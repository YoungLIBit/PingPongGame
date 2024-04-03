// Generate Bricks
var brickContainer = $('.brick-container');
// tạo ra brick
var generateBricks = function(n,level){
    for(var i=0; i<n; i++){
        var brick = $('<div>'); //khởi tạo thẻ div mới
        brick.addClass('brick'); //thêm class 'brick'
        brick.addClass('level'); //thêm class 'level'
        brickContainer.append(brick); //thẻ mới tạo nằm trong thẻ có tên là brick-container - thẻ brick là phần tử con của brick-container
    }
}
//tạo ra khoảng trắng brick
var generateFakeBrick = function(n){
    for(var i =0; i<n;i++){
        var brick = $('<div>'); //khởi tạo thẻ div mới
        brick.addClass('brick'); //thêm class 'brick'
        brick.addClass('broken'); //thêm class 'broken'
        brickContainer.append(brick); //thẻ mới tạo nằm trong thẻ có tên là brick-container - thẻ brick là phần tử con của brick-container
    }
}
//Level 1
var generateLevelOne = function(){
    generateFakeBrick(10);
    generateFakeBrick(10);
    generateBricks(10, 'lv1');
    generateBricks(10, 'lv1');

}


// Move Pad, Ball and Collision
var mainContainer = $('.main-container');
var pad = $('#pad');
var ball = $('#ball');


var gameRunning = 0;
var ballTop = 0;
var ballLeft = 0;
var ballMoveDelay = 5;
var padCollisionPoint = 0; //
var maxLives = 10;
var ballLife = maxLives;
var timerId = 0;
var totalScore = 0;
var ballsDirection = {
    left: 0,
    top: 0
}
var movementPhysics = 25;

// Phương thức cho pad di chuyển theo chuột
$(function (){
    mainContainer.on('mousemove', function (event){ //Sử dụng sự kiện mousemove
        var padLeft = event.clientX - $(this).offset().left; //Xác định vị trí của cạnh bên trái của pad đến cạnh trái của trình duyệt, bằng cách xác định vị trí ngang của con trỏ khi di chuyển trong mainContainer
        padLeft -= pad.width()/2; //Lấy ra vị trí nằm giữa của pad bằng cách trừ đi 1/2 chiều rộng của pad
        // console.log(padLeft);
        if(padLeft < 0){ // khi vị trí của con trỏ < 0
            $(this).css('--pad-left', 1); // thì set biến cục bộ của pad cho thuộc tính left bằng 1 => pad nằm sát bên trái
            return;

        }
        if(padLeft > $(this).width() - pad.width() - 6){ //nếu vị trí của con trỏ lớn chiều rộng của mainContainer - chiều rộng của pad (6 là sai số)
            $(this).css('--pad-left', ($(this).width() - pad.width()-8).toString()); // thì set giá trị left của pad nằm ở sát bên phải của mainContainer
            return;
        }
        $(this).css('--pad-left', padLeft.toString()); // set giá trị left của pad theo vị trí của con trỏ được ước tính
        if(gameRunning === 0){
            ballLeft = padLeft + pad.width() / 2  - ball.width() / 2; // vị trí của left của ball nằm giữa pad đồng nghĩa là nằm theo vị trí của con trỏ
            $(this).css('--ball-left', ballLeft.toString()) //set value cho left của ball
        }


    })
});

$(function (){
    $(window).on('keydown',function (event){
        var padLeft = + pad.css('--pad-left');
        if(event.key == 'ArrowLeft'){
            padLeft -= movementPhysics;
        }
        if(event.key == 'ArrowRight'){
            padLeft += movementPhysics;
        }
        if(padLeft < 0){
            return;
        }
        if(padLeft > $(this).width() - pad.width() - 5){
            return;
        }
        if(gameRunning === 0){
            ballLeft = padLeft + pad.width()/2 - ball.width()/2;
            mainContainer.css('--ball-left', ballLeft.toString());
        }
        mainContainer.css('--pad-left', padLeft.toString());
    });
});

var startBallMove = function (){
    ballTop = pad.offset().top - ball.height(); //lấy ra vị trí của ball sao cho nằm trên pad
    ballsDirection = {
        left: 0,
        top: -3
    }
}

var onLifeGone = function(){
    gameRunning = 0;
    clearInterval(timerId);
    ballLeft = pad.offset().left + pad.height()/2 - ball.width()/2;
    ballTop = pad.offset().top - ball.height();
    mainContainer.css('--ball-left', ballLeft.toString());
    mainContainer.css('--ball-top',ballTop.toString());
}
var onBallDroped = function (){
    ballLife--;
    if(ballLife === 0){
        clearInterval(timerId);
        ballsDirection = {
            top:0,
            left:0
        }
    }else{
        onLifeGone();
    }
}

// Kiểm tra va chạm giữa hai đối tượng
var getConllisionBetween = function (e1, e2){
    // xác định vị trí của đối tượng 1 dựa trên Left và Top
    left1 = e1.offset().left;
    right1 = left1 + e1.width();
    top1 = e1.offset().top;
    bottom1 = top1 + e1.height();
    // Xác định vị trí của đối tượng 2 dựa trên Left và Top
    left2 = e2.offset().left;
    right2 = left2 + e2.width();
    top2 = e2.offset().top;
    bottom2 = top2 + e2.height();
    // Kiểm tra cạnh phải e1 nằm giữa khoảng cách cạnh trái và cạnh phải của e2
    if (right1 > left2 && right1 < right2) {

        // Kiểm tra cạnh dưới e1 nằm giữa khoảng cách của cạnh trên và cạnh dưới của e2
        if (bottom1 > top2 && bottom1 < bottom2) {
            // Kiểm tra va chạm từ trái sang phải - cạnh phải của e1 va chạm với cạnh trái của e2
            if (bottom1 - top2 > right1 - left2) { //khoảng cách từ cạnh phải của e1 đến cạnh trái của e2 nhỏ hơn khoảng cách cạnh dưới của của e1 và cạnh trên của e2
                console.log("111")
                return "ltr" //Hướng từ trái sang phải ==> left to right - 'ltr'
            // Ngược lại là va chạm từ trên xuống dưới - cạnh dưới của của e1 va chạm với cạnh trên của e2
            } else {
                console.log("112")
                return "ttb"// Hướng từ trên xuống dưới ==> 'top to bottom - ttb'

            }
        }
        //Kiểm tra cạnh trên của e1 nằm giữa khoảng cách của cạnh trên và cạnh dưới của e2
        if (top1 < bottom2 && top1 > top2) {
            //Kiểm tra va chạm từ trái sang phải - cạnh phải của e1 chạm với cạnh trái của e2
            // if (top1 - bottom2 > right1 - left2) {
            if(bottom2 - top1 > right1 - left2){//Khoảng cách từ cạnh phải của e1 và cạnh trái của e2 nhỏ hơn khoảng cách cạnh dưới của e1 và cạnh trên của e2
                console.log("121")
                return "ltr" //Hướng từ trái sang phải ==> left to right - 'ltr'
            //Ngược lại là va chạm từ dưới lên trên - cạnh trên của e1 va chạm với cạnh dưới của e2
            } else {
                console.log("122")
                return "btt" // Hướng từ dưới lên trên ==> 'bottom to top - btt'
            }
        }
    }
    //Kiểm tra cạnh trái của e1 nằm giữa khoảng cách cạnh trái và cạnh phải của e2
    if (left1 < right2 && left1 > left2) {
        //Kiểm tra cạnh dưới của e1 nằm giữa khoảng cách của cạnh trên và cạnh dưới của e2
        if (bottom1 > top2 && bottom1 < bottom2) {
            //Kiểm tra va chạm từ phải sang trái - cạnh trái của e1 va chạm với cạnh phải của e2
            if (bottom1 - top2 > right2 - left1) { //Kiểm tra khoảng cách va chạm
                console.log("211") //nếu khoảng cách của cạnh bên phải của e1 với cạnh bên trái của e2
                return "rtl" //nhỏ hơn hơn khoảng cách của cạnh bên dưới của e1 với cạnh bên trên của e2
                // ==> cạnh phải của e1 va chạm với cạnh trái của e2 - chiều từ phải sang trái
                // right to left - 'rtl'
            } else { //Nếu khoảng cách của cạnh duướ của e1 với cạnh trên của e2
                console.log("212") // nhỏ hơn khoảng cách của cạnh bên phải của e1 với cạnh bên trái của e2
                return "ttb" // ==> cạnh bên dưới của e1 va chạm với cạnh trên của e2 - chiều từ trên xuống dưới
            //     top to bottom - 'ttb'
            }
        }
        // Kiểm tra cạnh trên của e1 với cạnh dưới nằm giữa khoảng cách của cạnh trên và cạnh dưới của e2
        if (top1 < bottom2 && top1 > top2) {
            //Kiểm tra va chạm từ phải sang trái - cạnh trái của e1 đến cạnh phải của e2
            if (top1 - bottom2 > right2 - left1) { //Kiểm tra nếu khoảng cách của cạnh trái của e1 đến cạnh cạnh phải của e2
                console.log("221") //nhỏ hơn khoảng cách của cạnh trên của e1 và cạnh dưới của e2
                return "rtl" //right to left - 'rtl' => chiều từ phải sang trái
            } else { //Ngược lại
                console.log("222")
                return "btt" //bottom to top 'btt' ==> chiều từ dưới lên trên
            }
        }
    }
    return false;

}

// Function kiểm tra va chạm giữa ball va pad
var checkPadCollision = function (){
    if(getConllisionBetween(ball,pad)){ //Kiểm tra xảy ra va chạm, giữa ball va pad
        console.log(getConllisionBetween(ball,pad))
        var pointMove1 = Math.sqrt(14); //đặt giá trị cho hướng di chuyển
        var pointMove2 = 2; // đặt giá trị cho hướng di chuyển
        padCollisionPoint = ball.offset().left + ball.width() /2; //lấy ra vị trí va chạm ở giữa quả bóng
        //set cho top trong mỗi điều kiện đều là giá trị âm, vì khi va chạm vào pad thì quả bóng cũng đi lên, khác nhau là đi lên nhanh hay chậm
        if(padCollisionPoint < pad.offset().left + pad.width()/4){ // nếu vị trí va chạm nằm ở 1/4 trên pad
            // (-3.74165..;-2)
            ballsDirection.left = -pointMove1; //thì set cho left trong object ball là âm căn 14 - quả bóng di chuyển sang phía bên trái
            ballsDirection.top = -pointMove2; //thì set cho top trong object ball là -2 - quả bóng di chuyển lên trên
        }else if(padCollisionPoint < pad.offset().left + pad.width()/2){
            // (-2;-3.74165..)
            ballsDirection.left = -pointMove2;
            ballsDirection.top = -pointMove1;
        }else if(padCollisionPoint >= pad.offset().left + pad.width()/2 && padCollisionPoint < pad.offset().left + pad.width() * 3 / 4){
            //(2;-3.74165..)
            ballsDirection.left = pointMove2;
            ballsDirection.top = -pointMove1;
        }else{
            //(3.74165..;-2)
            ballsDirection.left = pointMove1;
            ballsDirection.top = -pointMove2;
        }
        // while(ballTop + ball.height() > pad.offset().top){
        //     ballTop--;
        // }
    }
}
// Function hướng quả bóng di chuyển khi chạm vào tường
var checkWallCollision = function (){
    if(ballLeft > mainContainer.width() - ball.width() - 1){ //kiểm tra va chạm bên phải của mainContainer
        ballsDirection.left*=-1; //Thay đổi left trong object thành giá trị ngược lại là -1 thì ball sẽ di chuyển sang trái
    }
    if(ballLeft < 1){ //kiểm tra va chạm bên trái của main Container
        ballsDirection.left*=-1; //thay đổi left trong object thành giá trị ngược lại là -1 thì ball sẽ di chuyển sang phải
    }
    if(ballTop < 1){//kiểm tra va chậm ở trên cùng của mainContainer
        ballsDirection.top*=-1; //thay đổi top trong object thành giá trị ngược lại là -1 thị ball sẽ di chuyện xuống dưới
    }
    if(ballTop > mainContainer.height() - ball.width() -1){ // kiểm tra va chạm bới pad nếu nó vượt quá vị trí của pad, cụ thể là vượt qua pad hoàn toàn
        onBallDroped(); // gọi lại phương thức, quả bóng được cho là bị rơi khỏi nếu ballLife === 0 thì clearInterval(kết thúc hàm gọi), còn nếu !== 0 thì tiếp tục set  vị trí của ball nằm giữa pad
    }
}

var checkCollision = function (){
    checkWallCollision();
    checkPadCollision();
}
// quả bóng di chuyển theo mặc định, khi va chạm vào pad va chạm vào tường
var moveBall = function () {
    ballTop += ballsDirection.top; //lấy vị trí hiện tại phương dọc của ball cộng với top của phương hướng quả bỏng
    ballLeft += ballsDirection.left; // lấy vị trí hiện phương ngang của ball cộng với left của phương hướng quả bóng
    mainContainer.css('--ball-left', ballLeft.toString()); //set giá trị left cho quả bóng
    mainContainer.css('--ball-top', ballTop.toString());//set giá trị top cho quả bóng
    checkCollision(); //kiểm tra va chạm để thay đổi giá trị trong phương hướng quá bóng (thay đổi phương hướng quả bóng khi va chạm)


}

var startGame = function (){
    startBallMove(); //set phương hướng mặc định khi ball bắt đầu di chuyển

    timerId = setInterval(moveBall, ballMoveDelay); //gọi lại hàm di chuyển ball với thời gian gọi lại dựa ballMoveDelay đơn vị là milisecond
}

$(function (){
    mainContainer.on('click', function (event){
        if(gameRunning === 0){
            gameRunning= 1;
            startGame();
        }
    });
})
// luôn luôn set vị trí ban đầu của ball. Cụ thể là nằm trên ở trung điểm của pad
$(function (){
    ballLeft = pad.offset().left + pad.height()/2 - ball.width()/2;
    ballTop = pad.offset().top - ball.height();
    mainContainer.css('--ball-left', ballLeft.toString());
    mainContainer.css('--ball-top',ballTop.toString());

});
