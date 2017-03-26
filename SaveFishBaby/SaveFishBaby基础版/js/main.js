var can1,can2,ctx1,ctx2,lastTime,deltaTime,bgPic=new Image(),canWidth,canHeight,ane,fruit,mom,mx,my,baby;

window.onload = function(){
    init();
    lastTime = Date.now();
    gameloop();
};

function init(){
    //获得canvas,context
    can1 = document.getElementById("canvas1");      //fishes,dust,UI,circle
    ctx1 = can1.getContext("2d");
    can2 = document.getElementById("canvas2");      //background,ane,fruits
    ctx2 = can2.getContext("2d");

    can1.addEventListener("mousemove",onMouseMove,false);

    bgPic.src = "./img/background.jpg";

    canWidth = can1.width;
    canHeight = can1.height;

    ane = new aneObj();
    ane.init();

    fruit = new fruitObj();
    fruit.init();

    mom = new momObj();
    mom.init();

    baby = new babyObj();
    baby.init();

    mx = canWidth*.5;
    my = canHeight*.5;
}

function gameloop(){
    requestAnimationFrame(gameloop);
    var now = Date.now();
    deltaTime = now - lastTime;     //帧与帧之间的时间间隔
    if(deltaTime>40) deltaTime = 40;
    lastTime = now;
    drawBg();
    ane.draw();
    fruit.draw();

    ctx1.clearRect(0,0,canWidth,canHeight);
    mom.draw();

    momFruitsCollision();
    baby.draw();
}

function onMouseMove(e){
    if(e.offsetX || e.layerX){
        mx = e.offsetX == "undefined" ? e.layerX : e.offsetX;
        my = e.offsetY == "undefined" ? e.layerY : e.offsetY;
    }
}