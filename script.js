var mainContainer = $('.main-container');
var pad = $('#pad');
var ball = $('#ball');


var gameRunning = 0;
var ballTop = 0;
var ballLeft = 0;

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


// luôn luôn set vị trí ban đầu của ball. Cụ thể là nằm trên ở trung điểm của pad
$(function (){
    ballLeft = pad.offset().left + pad.height()/2 - ball.width()/2;
    ballTop = pad.offset().top - ball.height();
    mainContainer.css('--ball-left', ballLeft.toString());
    mainContainer.css('--ball-top',ballTop.toString());

})
