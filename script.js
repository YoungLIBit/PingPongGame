// 21130220_DangHuuTrong_0833535010_DH21DTA

   var brickBroken = function(){
       let x = $("<audio></audio>").attr("src", "sound/brickbroken.wav");
       x.trigger("play");

   }

   var gameOver = function(){
       let x = $("<audio></audio>").attr("src", "sound/gameover.wav");
       x.trigger("play");

   }
   var brickTouch = function (){
       let x = $("<audio></audio>").attr("src", "sound/bricktouch.wav");
       x.trigger("play");
   }


var menu = $('#menu');
var play = $('.play');
var option = $('.option');
var instructions = $('.instructions');
var optionModal = $('#option-modal');
var instructionsModal = $('#instructions-modal');

var backButton = $('.back');

$(function (){
    optionModal.hide();
    instructionsModal.hide();
    // game.hide();
});
var eClick = function(eClick,element1, element2){
    eClick.on('click',function (event){
        element1.hide();
        element2.show();
    });
}
// eClick(play, lobby, game);
eClick(option,menu,optionModal);
eClick(instructions, menu, instructionsModal);
eClick(backButton,optionModal, menu );
eClick(backButton, instructionsModal, menu);
$(function (){

    function popupIntroduce(){
        $('.introduce').on('click', function (){
            $('#introduce-modal').toggleClass('introduce-show');

        });
        $('#introduce-close').on('click', function (){
            $('#introduce-modal').removeClass('introduce-show');
        });



    }

    popupIntroduce();
});

// Generate Bricks
var brickContainer = $('.brick-container');
// tạo ra brick
var generateBricks = function(n,level){
    for(var i=0; i<n; i++){
        var brick = $('<div>'); //khởi tạo thẻ div mới
        brick.addClass('brick'); //thêm class 'brick'
        brick.addClass(level); //thêm class 'level'
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
var generateStoneBrick = function(n){
    for(var i =0; i<n;i++){
        var brick = $('<div>'); //khởi tạo thẻ div mới
        brick.addClass('brick'); //thêm class 'brick'
        brick.addClass('stone'); //thêm class 'broken'
        brickContainer.append(brick); //thẻ mới tạo nằm trong thẻ có tên là brick-container - thẻ brick là phần tử con của brick-container
    }
}
var generateStoneMoveBrick = function(n){
    for(var i= 0; i < n; i++){
        var brick = $('<div>'); //khởi tạo thẻ div mới
        brick.addClass('brick'); //thêm class 'brick'
        brick.addClass('stone'); //thêm class 'broken'
        brick.addClass('stone-move');
        brickContainer.append(brick); //thẻ mới tạo nằm trong thẻ có tên là brick-container - thẻ brick là phần tử con của brick-container
    }
}
var generateBlackHole = function (move){


        var brick = $('<div>');
        brick.addClass('brick');
        brick.addClass('hole');
        brick.addClass(move);
        brickContainer.append(brick);

}


//Level 1
var generateLevelTest = function(){
    generateFakeBrick(10);
    generateFakeBrick(10);
    generateFakeBrick(10);
    generateFakeBrick(3);
    generateBricks(2, 'lv1');
    generateFakeBrick(5);

}
var generateLevelOne = function(){

    generateFakeBrick(10);
    generateFakeBrick(10);
    generateFakeBrick(10);
    generateFakeBrick(1);
    generateBricks(8, "lv1");
    generateFakeBrick(1);
    generateBricks(10,"lv1");
    generateFakeBrick(10);
    generateFakeBrick(2);
    generateBricks(6, "lv1");



}
var generateLevelTwo = function(){
    generateFakeBrick(10);
    generateFakeBrick(10);
    generateBricks(10,'lv3');
    generateFakeBrick(1);
    generateBricks(8, 'lv1');
    generateFakeBrick(1);
    generateFakeBrick(2);
    generateBricks(6, 'lv2');
    generateFakeBrick(2);
    generateBricks(2,'lv2');
    generateFakeBrick(6);
    generateBricks(2,'lv2');
    generateFakeBrick(2);
    generateBricks(6, 'lv1');
    generateFakeBrick(2);
    generateBricks(5,'lv1')
    generateBricks(5,'lv2');

}
var generateLevelThree = function(){
    generateFakeBrick(10);
    generateFakeBrick(10);
    generateFakeBrick(1);
    generateBricks(8, 'lv4');
    generateFakeBrick(1);
    generateFakeBrick(4);
    generateStoneBrick(2)
    generateFakeBrick(4);
    generateFakeBrick(2);
    generateBricks(6, 'lv2');
    generateFakeBrick(2);
    generateFakeBrick(10);
    generateBricks(10, 'lv3');
    generateFakeBrick(10);
    generateFakeBrick(2);
    generateStoneBrick(1);
    generateFakeBrick(4);
    generateStoneBrick(1);
    generateFakeBrick(2);
    generateBricks(10, 'lv1');
}

var generateLevelFour = function(){
    generateFakeBrick(10);
    generateFakeBrick(10);
    generateFakeBrick(1);
    generateStoneBrick(1)
    generateBricks(6, 'lv4');
    generateStoneBrick(1);
    generateFakeBrick(1);
    generateFakeBrick(1);
    generateBricks(8, 'lv2');
    generateFakeBrick(1);
    generateBricks(10, 'lv3');
    generateStoneMoveBrick(1);
    generateFakeBrick(9);
    generateFakeBrick(10);
    generateBricks(1,"lv2");
    generateBricks(1,"lv3");
    generateStoneMoveBrick(1);
    generateFakeBrick(7);
    generateBricks(10,'lv1');
}
var generateLevelFive = function (){
    generateFakeBrick(10);
    generateFakeBrick(10);
    generateFakeBrick(1);
    generateStoneBrick(1)
    generateBricks(6, 'lv2');
    generateStoneBrick(1);
    generateFakeBrick(1);
    generateFakeBrick(1);
    generateBricks(8, 'lv3');
    generateFakeBrick(1);
    generateBricks(10, 'lv4');
    generateStoneMoveBrick(1);
    generateFakeBrick(9);
    generateFakeBrick(10);
    generateFakeBrick(10);
    generateFakeBrick(2);
    generateBricks(6, "lv4");
    generateFakeBrick(2);
    generateFakeBrick(10);
    generateBricks(2, "lv3");
    generateFakeBrick(2);
    generateBricks(2, "lv4");
    generateFakeBrick(2);
    generateBricks(2, "lv3");
}
var generateLevelSix = function (){
    generateFakeBrick(10);
    generateFakeBrick(10);
    generateFakeBrick(1);
    generateStoneBrick(1)
    generateBricks(2, 'lv3');
    generateStoneBrick(2);
    generateBricks(2, 'lv3');
    generateStoneBrick(1);
    generateFakeBrick(1);
    generateFakeBrick(1);
    generateBricks(8, 'lv3');
    generateFakeBrick(1);
    generateBricks(10, 'lv4');
    generateStoneMoveBrick(1);
    generateFakeBrick(9);
    generateFakeBrick(2);
    generateBlackHole("move1");
    generateFakeBrick(7);
    generateFakeBrick(10);
    generateFakeBrick(2);
    generateBricks(6, "lv4");
    generateBlackHole("move2");
    generateFakeBrick(1);
    generateFakeBrick(3);
    generateStoneBrick(1);
    generateBricks(2, "lv4");
    generateStoneBrick(1);
    generateFakeBrick(3);
    generateBricks(2, "lv3");
    generateFakeBrick(2);
    generateBricks(2, "lv4");
    generateFakeBrick(1);

    generateBricks(2, "lv3");
}
// generateLevelTest();

// POWER UP
// generatePowers
function generatePowers(){
    for (let brick of $('.brick')){ //Duyệt từng phần tử brick
        if($(brick).hasClass('broken')){
            continue; //Nếu brick có class broken thì bỏ qua brick đó
        }
        let num = Math.floor(Math.random() * 12); //đặt một biến làm tròn random * 12
        if(num === 5){
            $(brick).addClass('power'); //nếu giá trị num = 5 thì thêm class 'power'
            // console.log("power add to brick")
        }
    }
}
function generateBullets(){
    for(let brick of $('.brick')){
        if($(brick).hasClass('broken') || $(brick).hasClass('stone') || $(brick).hasClass('hole')){
            continue;
        }
        let num = Math.floor(Math.random()*6);
        if(num === 1){
            $(brick).addClass('bullet');
            $(brick).addClass('bullet-1');
        }
        if(num===2){
            $(brick).addClass('bullet');
            $(brick).addClass('bullet-2');
        }
    }
}
var checkHoleCollision = false;
function hole (brick){
    var brick = $(brick);
    var holes = $('.hole');
    if(brick.hasClass('hole')){

        for(let hole of holes){
            var collision = getConllisionBetween(ball, $(hole));
            if(collision){
                if(checkHoleCollision){
                    return;
                }
                if($(hole).hasClass('move1')){
                    checkHoleCollision = true;
                    // console.log(ballLeft);
                    if(collision === 'rtl'){ //nếu va chạm từ phải sang trái hoặc từ trái sang phải
                        ballLeft = $('.move2').offset().left - $('.move2').width() -1 ;
                        ballTop = $('.move2').offset().top
                        ballsDirection.left *= -1.1; //set tọa độ ngang của nó ngược lại với tọa độ hiện tại

                    }
                    if(collision ==='ltr'){
                        ballLeft = $('.move2').offset().left + $('.move2').width() +1;
                        ballTop = $('.move2').offset().top
                        ballsDirection.left *= -1.1;

                    }
                    if(collision === 'ttb'){//nếu va chạm từ trên xuống dưới hoặc từ dưới lên trên
                        ballTop = $('.move2').offset().top + $('.move2').height() + 1;
                        ballLeft = $('.move2').offset().left
                        ballsDirection.top*=-1.1;//set tọa độ dọc của nó ngược lại với tọa độ hiện tại
                    }
                    if(collision ==='btt'){
                        ballTop = $('.move2').offset().top - $('.move2').height() -1;
                        ballLeft = $('.move2').offset().left
                        ballsDirection.top*=-1.1;
                    }
                    setTimeout(function (){
                        checkHoleCollision = false;
                    },100);

                }
                if($(hole).hasClass('move2')){

                    ballLeft = $('.move1').offset().left;
                    ballTop = $('.move1').offset().top;
                    // console.log(ballLeft);
                    checkHoleCollision = true;
                    if(collision === 'rtl'){ //nếu va chạm từ phải sang trái hoặc từ trái sang phải
                        ballLeft = $('.move1').offset().left - $('.move1').width() -1 ;
                        ballTop = $('.move1').offset().top
                        ballsDirection.left *= -1.1; //set tọa độ ngang của nó ngược lại với tọa độ hiện tại

                    }
                    if(collision ==='ltr'){
                        ballLeft = $('.move1').offset().left + $('.move1').width() + 1;
                        ballTop = $('.move1').offset().top
                        ballsDirection.left *= -1.1;

                    }
                    if(collision === 'ttb'){//nếu va chạm từ trên xuống dưới hoặc từ dưới lên trên
                        ballTop = $('.move1').offset().top + $('.move1').height() + 1;
                        ballLeft = $('.move1').offset().left
                        ballsDirection.top*=-1.1;//set tọa độ dọc của nó ngược lại với tọa độ hiện tại
                    }
                    if(collision ==='btt'){
                        ballTop = $('.move1').offset().top - $('.move1').height() - 1;
                        ballLeft = $('.move1').offset().left
                        ballsDirection.top*=-1.1;
                    }
                    setTimeout(function (){
                        checkHoleCollision = false;
                    },100);
                }

            }
        }

    }

}
// Function dropPower
var dropPower = function (brick){
    if($(brick).hasClass('power')){  //Kiểm tra brick có power hay không, bằng cách kiểm tra có class power trong thẻ brick hay không
        var powerTop = 0; //Khởi tạo tọa đồ của power, lấy chiều dọc của power set mặc định là 0
        var powerLeft = 0;//Tương tự khởi tạo chiều ngang của power, set mặc định là 0
        var powerup = $('<div>'); //tạo thẻ div
        mainContainer.append(powerup); //thẻ đó là thẻ con của mainContainer
        powerup.addClass('power-up'); //Thêm class css cho thẻ vừa tạo, cụ thể là power up
        powerTop = $(brick).offset().top + $(brick).height()/2; // set vị trí của powerTop bằng cách, lấy vị trí top của brick có power so với thẻ cha của nó cộng với 1/2 chiều dọc của brick --> nằm ở giữa chiều dọc của brick
        powerLeft = $(brick).offset().left + $(brick).width()/2;//set vị trí của powerLeft bằng cách, lấy vị trí left của brick có power so với thẻ cha của nó cộng với 1/2 chiều dài của brick --> nằm ở giữa chiều ngang của birck
        powerup.css('--power-up-top', powerTop.toString()); //ta được vị trí của brick nằm ở center của brick và set nó vào thuộc tính biến cục bộ của css --power-up-top và --power-up-left
        powerup.css('--power-up-left', powerLeft.toString());
        var timerPowerId = setInterval(function (){ //setInterval để power rơi xuống tại vị trí hiện tại của nó trong brick có power
            powerTop += 2; //mỗi lần rơi đồng nghĩa là tăng khoảng cách dọc của nó so với thẻ cha nó lên
            powerup.css('--power-up-top', powerTop.toString()); //set lại tọa độ
            powerup.css('--power-up-left', powerLeft.toString());
            if(powerup){ //kiểm tra underfine, nếu không có power
                if(getConllisionBetween(powerup, pad)){ //kiểm tra va chạm với pad --> pad nhận được power
                    triggerPower(powerup); //gọi lại hàm triggerPower set thời gian effect của power
                    powerup.remove(); //sau đó không cho hiển hiện power --> mất
                    clearInterval(timerPowerId); //clearInterval chống tràn bộ nhớ
                }else if(powerTop > mainContainer.height() - powerup.height() - 1 ){ //nếu nó rơi cạnh dưới của power vượt quá chiều dọc của mainCOntainer với sai số là 1 thì đồng nghĩa không nhặt được power
                    powerup.remove(); //xóa power
                    clearInterval(timerPowerId); //clearInterval chống tràn bộ nhớ
                }
            }
        });
    }
}
var dropBullet = function (brick){
    if($(brick).hasClass('bullet')){
        var bulletTop = 0;
        var bulletLeft = 0;
        var bulletDown = $('<div>'); //tạo một bullet
        mainContainer.append(bulletDown);
        bulletDown.addClass('bullet-down');//add them class bullet-down
        bulletTop = $(brick).offset().top + $(brick).height() / 2; //lấy vị trí ở giữa brick làm vị trí của bullet
        bulletLeft = $(brick).offset().left + $(brick).width() /2 ; //lấy vị trí ở giữa brick làm vị trí của bullet
        bulletDown.css('--bullet-down-top', bulletTop.toString()); //set vị trí đó vào css
        bulletDown.css('--bullet-down-left', bulletLeft.toString());
        var timerBulletId = setInterval(function (){
            if($(brick).hasClass('bullet-1')){ //if bullet-1 thì tốc độ normal
                bulletTop +=2;
            }
            if($(brick).hasClass('bullet-2')){ //if bullet-2 thì tốc độ nhân đôi
                bulletTop +=4;
            }
            bulletDown.css('--bullet-down-top',bulletTop.toString());
            bulletDown.css('--bullet-down-left', bulletLeft.toString());
            if(bulletDown){
                if(getConllisionBetween(bulletDown,pad)){
                    bulletDown.remove(); //if bullet chạm với pad thì bullet bị xóa đi
                    onBallDroped(); //mất một mạng
                    clearInterval(timerBulletId);
                }else if(bulletTop>mainContainer.height() - bulletDown.height() - 1){
                    bulletDown.remove(); //nếu rớt ra ngoài pad thì mất, và không làm gì cả
                    clearInterval(timerBulletId);
                }
            }
        })

    }
}

var triggerPower = function (powerup){
        ball.addClass('power-ball'); //ball được hưởng effect thêm vào class power-ball
        setTimeout(function (){ //đặt thời gian cho hiệu ứng quả bóng, kết thúc sau 10000ms
            ball.removeClass('power-ball');
        }, 10000);
}

var stoneMove = function(){
    // console.log(123);
    var stone = $('.stone');
    var left = 2;
                if (stone.hasClass('stone-move')) {

                    var stoneMove = $('.stone-move');
                    var stoneTop = 0;
                    var stoneLeft = 0;
                    // stoneTop = stone.offset().top + stone.height() / 2;
                    stoneLeft = stone.offset().left + stone.width()/2;
                    // stoneLeft = 1;
                    // console.log(stone.offset().left);
                    stoneMove.css('--stone-move-left', stoneLeft.toString());
                    // stoneMove.css('--stone-move-top', stoneTop.toString());
                    // console.log(timerStoneMoveId);
                    var timerStoneMoveId =  setInterval(function () {
                        stoneLeft += left;


                            if (stoneLeft > 1 && stoneLeft > brickContainer.width() - stone.width()) {
                                left *= -1;
                                // console.log('va chạm trái')
                                // console.log(stoneLeft);

                                // stoneMove.css('--stone-move-top', stoneTop.toString());

                            }
                            if (stoneLeft < 1) {
                                left *= -1;
                                // console.log(stoneLeft);
                                // stoneMove.css('--stone-move-top', stoneTop.toString());

                            }
                        stoneMove.css('--stone-move-left', stoneLeft.toString());
                        if($('.broken').length === bricks.length - $('.stone').length){
                            clearInterval(timerStoneMoveId);
                        }
                    }, 5);

                }

}

// Move Pad, Ball and Collision
var mainContainer = $('.main-container');
var pad = $('#pad');
var ball = $('#ball');
var bricks = $('.brick');

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
var resetTotalScore = function (){
    totalScore = 0;
    $('#score').text(totalScore.toString());
}
var resetBallLife = function (){
    ballLife = maxLives;
    $('#lives').text(ballLife.toString());
}
var onBallDroped = function (){
    ballLife--;
    $('#lives').text(ballLife.toString());
    if(ballLife === 0){
        gameOver();
        updateInfoModal();
        $('#endModal').modal('show');
        $('#restart-button-end').off('click').on('click',function (){
            totalScore = 0;
            restartGame();
            $('#endModal').modal('hide');
        });
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
    var left1 = e1.offset().left;
    var right1 = left1 + e1.width();
    var top1 = e1.offset().top;
    var bottom1 = top1 + e1.height();
    // Xác định vị trí của đối tượng 2 dựa trên Left và Top
    var left2 = e2.offset().left;
    var right2 = left2 + e2.width();
    var top2 = e2.offset().top;
    var bottom2 = top2 + e2.height();
    // Kiểm tra cạnh phải e1 nằm giữa khoảng cách cạnh trái và cạnh phải của e2
    if (right1 > left2 && right1 < right2) {

        // Kiểm tra cạnh dưới e1 nằm giữa khoảng cách của cạnh trên và cạnh dưới của e2
        if (bottom1 > top2 && bottom1 < bottom2) {
            // Kiểm tra va chạm từ trái sang phải - cạnh phải của e1 va chạm với cạnh trái của e2
            if (bottom1 - top2 > right1 - left2) { //khoảng cách từ cạnh phải của e1 đến cạnh trái của e2 nhỏ hơn khoảng cách cạnh dưới của của e1 và cạnh trên của e2
                //console.log("111")
                return "ltr" //Hướng từ trái sang phải ==> left to right - 'ltr'
            // Ngược lại là va chạm từ trên xuống dưới - cạnh dưới của của e1 va chạm với cạnh trên của e2
            } else {
                //console.log("112")
                return "ttb"// Hướng từ trên xuống dưới ==> 'top to bottom - ttb'

            }
        }
        //Kiểm tra cạnh trên của e1 nằm giữa khoảng cách của cạnh trên và cạnh dưới của e2
        if (top1 < bottom2 && top1 > top2) {
            //Kiểm tra va chạm từ trái sang phải - cạnh phải của e1 chạm với cạnh trái của e2
            // if (top1 - bottom2 > right1 - left2) {
            if(bottom2 - top1 > right1 - left2){//Khoảng cách từ cạnh phải của e1 và cạnh trái của e2 nhỏ hơn khoảng cách cạnh dưới của e1 và cạnh trên của e2
                //console.log("121")
                return "ltr" //Hướng từ trái sang phải ==> left to right - 'ltr'
            //Ngược lại là va chạm từ dưới lên trên - cạnh trên của e1 va chạm với cạnh dưới của e2
            } else {
                //console.log("122")
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
                //console.log("211") //nếu khoảng cách của cạnh bên phải của e1 với cạnh bên trái của e2
                return "rtl" //nhỏ hơn hơn khoảng cách của cạnh bên dưới của e1 với cạnh bên trên của e2
                // ==> cạnh phải của e1 va chạm với cạnh trái của e2 - chiều từ phải sang trái
                // right to left - 'rtl'
            } else { //Nếu khoảng cách của cạnh duướ của e1 với cạnh trên của e2
                //console.log("212") // nhỏ hơn khoảng cách của cạnh bên phải của e1 với cạnh bên trái của e2
                return "ttb" // ==> cạnh bên dưới của e1 va chạm với cạnh trên của e2 - chiều từ trên xuống dưới
            //     top to bottom - 'ttb'
            }
        }
        // Kiểm tra cạnh trên của e1 với cạnh dưới nằm giữa khoảng cách của cạnh trên và cạnh dưới của e2
        if (top1 < bottom2 && top1 > top2) {
            //Kiểm tra va chạm từ phải sang trái - cạnh trái của e1 đến cạnh phải của e2
            if (top1 - bottom2 > right2 - left1) { //Kiểm tra nếu khoảng cách của cạnh trái của e1 đến cạnh cạnh phải của e2
                //console.log("221") //nhỏ hơn khoảng cách của cạnh trên của e1 và cạnh dưới của e2
                return "rtl" //right to left - 'rtl' => chiều từ phải sang trái
            } else { //Ngược lại
                //console.log("222")
                return "btt" //bottom to top 'btt' ==> chiều từ dưới lên trên
            }
        }
    }
    return false;

}

// Function kiểm tra va chạm giữa ball va pad
var checkPadCollision = function (){
    if(getConllisionBetween(ball,pad)){ //Kiểm tra xảy ra va chạm, giữa ball va pad

        brickTouch();
        // console.log(getConllisionBetween(ball,pad))
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

// Function thay đổi brick khi đuược va chạm
var onCollisionWithBrick = function(ball, brick){
    totalScore+=100;
    if(brick.hasClass('stone')||brick.hasClass('hole')){
        totalScore-=100;
    }

    $('#score').text(totalScore.toString());


        if(ball.hasClass('power-ball')){
            if(brick.hasClass('bullet')){
                dropBullet(brick);
            }
            if(brick.hasClass('lv1')){ //nếu va chạm với brick mà brick lv1 thì sẽ mất
                brickBroken();
                brick.removeClass('lv1');
                brick.addClass('broken');
                brick.addClass('lv0');
                if(brick.hasClass('power')){
                    dropPower(brick);
                }


            }else if(brick.hasClass('lv4')){ //nếu va chạm với brick mà brick lv4 thì sẽ trở thành lv3
                brick.removeClass('lv4');
                brick.addClass('lv2');

            }else if(brick.hasClass('lv3')){//nếu va chạm với brick mà brick lv3 thì sẽ trở thành lv2
                brick.removeClass('lv3');
                brick.addClass('lv1');
            }else if(brick.hasClass('lv2')){//nếu va chạm với brick mà brick lv2 thì sẽ trở thành lv1
                brickBroken();
                brick.removeClass('lv2');
                brick.addClass('broken');
                brick.addClass('lv0');
                if(brick.hasClass('power')){
                    dropPower(brick);
                }
                if(brick.hasClass('bullet')){
                    dropBullet(brick);
                }
            }
        }else{
            if(brick.hasClass('hole')){
                hole(brick);
            }
            if(brick.hasClass('bullet')){
                dropBullet(brick);
            }
            if(brick.hasClass('lv1')){ //nếu va chạm với brick mà brick lv1 thì sẽ mất
                brickBroken();
                brick.removeClass('lv1');
                brick.addClass('broken');
                brick.addClass('lv0');
                if(brick.hasClass('power')){
                    dropPower(brick);
                }
                if(brick.hasClass('bullet')){
                    dropBullet(brick);
                }
            }else if(brick.hasClass('lv4')){ //nếu va chạm với brick mà brick lv4 thì sẽ trở thành lv3
                brick.removeClass('lv4');
                brick.addClass('lv3');
            }else if(brick.hasClass('lv3')){//nếu va chạm với brick mà brick lv3 thì sẽ trở thành lv2
                brick.removeClass('lv3');
                brick.addClass('lv2');
            }else if(brick.hasClass('lv2')){//nếu va chạm với brick mà brick lv2 thì sẽ trở thành lv1
                brick.removeClass('lv2');
                brick.addClass('lv1');
            }
        }

}

var ignoreBrickCollision = false; //Bỏ qua va chạm
var checkBrickCollision = function(){
    if(ignoreBrickCollision){ //Nếu va chạm được bỏ qua thì không thực thi gì cả
        return;
    }
    for(let brick of bricks){ //duyệt tất cả các brick liên tục

        if(ignoreBrickCollision){ //nếu va chạm được bỏ qua thì không thực thi gì cả
            return;
        }

        if($(brick).hasClass('broken')){ //nếu brick có lớp 'broken' - ý là không tồn tại brick
            continue; //bỏ qua brick đó
        }
        //gọi lại hàm va chạm, set e1 là ball, e2 là từng brick được duyệt qua - va chạm giữa ball và brick
        var collision = getConllisionBetween(ball, $(brick));
        //nếu va chạm không trả về gì đồng nghĩa là không va chạm thì bỏ qua phần tử đó
        if(!collision){
            continue;
        }
        onCollisionWithBrick(ball,$(brick)); //gọi lại hàm thay đổi brick khi va chạm
        ignoreBrickCollision = true; // va chạm được bỏ qua
        if(collision === 'rtl' || collision ==='ltr'){ //nếu va chạm từ phải sang trái hoặc từ trái sang phải
            ballsDirection.left *= -1; //set tọa độ ngang của nó ngược lại với tọa độ hiện tại
        }
        if(collision === 'ttb' || collision ==='btt'){//nếu va chạm từ trên xuống dưới hoặc từ dưới lên trên
            ballsDirection.top*=-1;//set tọa độ dọc của nó ngược lại với tọa độ hiện tại
        }

        // console.log(ignoreBrickCollision);
        setTimeout(function(){ //set lại ignoreBrickCollision với thời gian gấp đôi tốc độ gi chuyển của quả bóng
            ignoreBrickCollision = false;
        }, ballMoveDelay);

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
    checkBrickCollision();

    checkPadCollision();

}
// quả bóng di chuyển theo mặc định, khi va chạm vào pad va chạm vào tường
var moveBall = function () {
    ballTop += ballsDirection.top; //lấy vị trí hiện tại phương dọc của ball cộng với top của phương hướng quả bỏng
    ballLeft += ballsDirection.left; // lấy vị trí hiện phương ngang của ball cộng với left của phương hướng quả bóng
    mainContainer.css('--ball-left', ballLeft.toString()); //set giá trị left cho quả bóng
    mainContainer.css('--ball-top', ballTop.toString());//set giá trị top cho quả bóng
    checkCollision(); //kiểm tra va chạm để thay đổi giá trị trong phương hướng quá bóng (thay đổi phương hướng quả bóng khi va chạm)
    checkEndGame();

}
var checkEndGame = function(){
    if($('.broken').length === bricks.length - $('.stone').length - $('.hole').length){
        // console.log("Game finished");
        clearInterval(timerId);
        nextLevel();
    }
}
var startGame = function (){
    startBallMove(); //set phương hướng mặc định khi ball bắt đầu di chuyển

    timerId = setInterval(moveBall, ballMoveDelay); //gọi lại hàm di chuyển ball với thời gian gọi lại dựa ballMoveDelay đơn vị là milisecond
}


var pauseGameVar = false;

$(function (){
    $(document).keydown(function (event){
        if(event.keyCode === 27){
            if(!pauseGameVar){
                pauseGame();
                $('#gameModal').modal('show');
            }else{
                $('#gameModal').modal('hide');
                resumeGame();
            }
        }
    });
    $('#resumeGame').off('click').on('click', function (){
        resumeGame();
        $('#gameModal').modal('hide');
    });
    $('#restart-button-game').off('click').on('click', function (){
        resetTotalScore();
        resetBallLife();
        restartGame();
        $('#gameModal').modal('hide');
    });
})

function pauseGame(){
    pauseGameVar = true;
    clearInterval(timerId);
}
function resumeGame(){
    pauseGameVar = false;
    if(gameRunning===1){
        timerId = setInterval(moveBall, ballMoveDelay);
    }
}


$(function (){
    mainContainer.on('click', function (event){
        if(gameRunning === 0){
            gameRunning= 1;
            startGame();
        }
    });
});
// luôn luôn set vị trí ban đầu của ball. Cụ thể là nằm trên ở trung điểm của pad
$(function (){
    ballLeft = pad.offset().left + pad.width()/2 - ball.width()/2;
    ballTop = pad.offset().top - ball.height();
    mainContainer.css('--ball-left', ballLeft.toString());
    mainContainer.css('--ball-top',ballTop.toString());

});

// Intergrate
var initializeGame = function(){
    mainContainer = $('.main-container');
    pad = $('#pad');
    ball = $('#ball');
    bricks = $('.brick');
    gameRunning = 0;
    padCollisionPoint = 0;
    ballLife = maxLives;
    timerId = 0;
    ballsDirection = {
        left: 0,
        top: -3
    }
    ballTop = pad.offset().top - ball.height();
    ballLeft = pad.offset().left + pad.width()/2 - ball.width()/2;
    mainContainer.css('--ball-left', ballLeft.toString());
    mainContainer.css('--ball-top', ballTop.toString());
    clearInterval(timerId);
}

var levelId = 1;

$(function (){
    $('.play').on('click', function (){
        localStorage.setItem('level', '1');
    });
    $('.level').on('click', function (){
        levelId = $(this).attr('id');
        localStorage.setItem('level', levelId);

    });
});
// $(function (){
//     if(localStorage.getItem('level')==1){
//         generateLevelOne();
//         ballMoveDelay = 6;
//         initializeGame();
//     }
// });

$(function (){

        switch(localStorage.getItem('level')){

           case '1':
               brickContainer.html('');
               generateLevelOne();
               ballMoveDelay = 6;
               initializeGame();
               break;
           case '2':
               brickContainer.html('');
               generateLevelTwo();
               generatePowers();
               ballMoveDelay = 5;
               initializeGame();
               break;
           case '3':
               brickContainer.html('');
               generateLevelThree();
               generatePowers();
               ballMoveDelay = 4;
               initializeGame();
               break;
           case '4':
               brickContainer.html('');
               generateLevelFour();
               stoneMove();
               generatePowers();
               ballMoveDelay = 4;
               initializeGame();
               break;
           case '5':
               brickContainer.html('');
               generateLevelFive();
               stoneMove();
               generatePowers();
               generateBullets();
               ballMoveDelay = 3;
               initializeGame();
               break;
           case '6':
               brickContainer.html('');
               generateLevelSix();
               stoneMove();
               generatePowers();
               generateBullets();
               ballMoveDelay = 3;
               initializeGame();
               break;
        }
});

levelId = localStorage.getItem('level');
var keyOn = false;
$(document).on('keydown', function(event){
    if(event.key === 'l' || event.key === 'L'){
        keyOn = true;
        clearInterval(timerId);
    } else if(keyOn && event.key === '1'){
        clearInterval(timerId);
        chooseLevel(1);

    } else if(keyOn && event.key === '2'){
        clearInterval(timerId);
        chooseLevel(2);

    } else if(keyOn && event.key === '3'){
        clearInterval(timerId);
        chooseLevel(3);

    }else if(keyOn && event.key === '4'){
        clearInterval(timerId);
        chooseLevel(4);
    }else if(keyOn && event.key === '5'){
        clearInterval(timerId);
        chooseLevel(5);
    }else if(keyOn && event.key === '6'){
        chooseLevel(6);
    }
});
var currentLevel = parseInt(levelId);
// console.log(currentLevel);
var restartGame = function (){

    brickContainer.html('');
    resetTotalScore();
    resetBallLife();
    $("#nextModal").modal('hide');

    // console.log(currentLevel);
    if(currentLevel === 1){
        // console.log('thực thi level1')
        generateLevelOne();
        ballMoveDelay = 6;
    }else if(currentLevel === 2){
        // console.log('thực thi level2')
        generateLevelTwo();
        generatePowers();

        ballMoveDelay = 5;
    }else if(currentLevel === 3){
        generateLevelThree();
        generatePowers();
        ballMoveDelay = 5;
    }else if(currentLevel === 4){
        generateLevelFour();
        stoneMove();
        generatePowers();
        ballMoveDelay = 4;
    }else if(currentLevel === 5){
        generateLevelFive();
        stoneMove();
        generatePowers();
        generateBullets();
        ballMoveDelay = 4;
    }else if(currentLevel === 6){
        generateLevelSix();
        stoneMove();
        generatePowers();
        generateBullets();
        ballMoveDelay = 3;
    }
    initializeGame();
}
var nextLevel = function(){
    updateInfoModal();
    $("#nextModal").modal('show');
    $('#next-button').off('click').on('click',function(){
        brickContainer.html('');
        resetTotalScore();
        resetBallLife();
        currentLevel++;
        // console.log(currentLevel);
        $("#nextModal").modal('hide');
        if(currentLevel === 1){
            generateLevelOne();
            ballMoveDelay = 6;
        }else if(currentLevel === 2){
            generateLevelTwo();
            generatePowers();
            ballMoveDelay = 5;
        }else if(currentLevel === 3){
            generateLevelThree();
            generatePowers();
            ballMoveDelay = 5;
        }else if(currentLevel === 4){
            generateLevelFour();
            stoneMove();
            generatePowers();
            ballMoveDelay = 4;
        }else if(currentLevel === 5){
            generateLevelFive();
            stoneMove();
            generatePowers();
            generateBullets();
            ballMoveDelay = 4;
        }else if(currentLevel === 6){
            generateLevelSix();
            stoneMove();
            generatePowers();
            generateBullets();
            ballMoveDelay = 3;
        }else{
            window.location.href = 'menu.html';
        }
        initializeGame();
    });
    $('#restart-button-next').off('click').on('click',function(){

        restartGame();
    });
}
var chooseLevel = function(level){
    brickContainer.html('');
    $("#confirmChangeModal").modal('show');
    $('#confirm-button').off('click').on('click',function(){
        resetTotalScore();
        resetBallLife();
        currentLevel = level;
        $("#confirmChangeModal").modal('hide');
        if(level == 1){
            generateLevelOne();
            ballMoveDelay = 6;
        }else if(level == 2){
            generateLevelTwo();
            generatePowers();
            ballMoveDelay = 5;
        }else if(level == 3){
            generateLevelThree();
            generatePowers();
            ballMoveDelay = 5;
        }else if(level == 4){
            generateLevelFour();
            stoneMove();
            generatePowers();
            ballMoveDelay = 4;
        }else if(level == 5){
            generateLevelFive();
            stoneMove();
            generatePowers();
            generateBullets();
            ballMoveDelay = 4;
        }else if(level == 6){
            generateLevelSix();
            stoneMove();
            generatePowers();
            generateBullets();
            ballMoveDelay = 3;
        }
        initializeGame();
    });
}

var updateInfoModal = function (){
    var star1 = $('.star-one');
    var star2 = $('.star-two');
    var star3 = $('.star-three');
    var noneStar = 'fa-regular';
    var isStar = 'fa-solid';
    var score = $('.info');
    if(ballLife === 0){
        star1.removeClass(isStar);
        star2.removeClass(isStar);
        star3.removeClass(isStar);
        star1.addClass(noneStar);
        star2.addClass(noneStar);
        star2.addClass(noneStar);
        score.text(totalScore.toString());
    }else if(ballLife > 0 && ballLife < 4){
        star1.addClass(isStar);
        star1.removeClass(noneStar);
        score.text(totalScore.toString());
    }else if(ballLife > 3 && ballLife < 7){
        star1.addClass(isStar);
        star1.removeClass(noneStar);
        star2.addClass(isStar);
        star2.removeClass(noneStar);
        score.text(totalScore.toString());
    }else{
        star1.addClass(isStar);
        star1.removeClass(noneStar);
        star2.addClass(isStar);
        star2.removeClass(noneStar);
        star3.addClass(isStar);
        star3.removeClass(noneStar);
        score.text(totalScore.toString());
    }

}

