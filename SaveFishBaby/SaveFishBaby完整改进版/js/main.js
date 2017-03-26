var can1,can2,ctx1,ctx2,lastTime,deltaTime,bgPic=new Image(),canWidth,canHeight,ane,fruit,mom,mx,my,baby,data,wave,dust;

window.onload = function(){
    //初始化
    init();
    //得到当前时间
    lastTime = Date.now();
    //刷新帧
    gameloop();
};

function init(){
    //创建画布
    //获得canvas,context
    can1 = document.getElementById("canvas1");      //fishes,dust,UI,circle
    ctx1 = can1.getContext("2d");
    can2 = document.getElementById("canvas2");      //background,ane,fruits
    ctx2 = can2.getContext("2d");

    //定义鼠标移动事件
    can1.addEventListener("mousemove",onMouseMove,false);

    //背景图片
    bgPic.src = "./img/background.jpg";

    //画布宽，高
    canWidth = can1.width;
    canHeight = can1.height;

    //海葵初始化
    ane = new aneObj();
    ane.init();

    //果实初始化
    fruit = new fruitObj();
    fruit.init();

    //鱼妈妈初始化
    mom = new momObj();
    mom.init();

    //鱼宝宝初始化
    baby = new babyObj();
    baby.init();

    //显示数据初始化
    data = new dataObj();

    //波纹初始化
    wave = new waveObj();
    wave.init();

    //背景尘埃初始化
    dust = new dustObj();
    dust.init();

    mx = canWidth*.5;
    my = canHeight*.5;

    //画布1的字体、字体位置
    ctx1.font = "30px Verdana";
    ctx1.textAlign = "center";

}

//每一帧要执行的动作
function gameloop(){
    requestAnimationFrame(gameloop);
    //得到当前时间
    var now = Date.now();
    //帧与帧之间的时间间隔
    deltaTime = now - lastTime;
    if(deltaTime>40) deltaTime = 40;
    lastTime = now;

    //画布2上渲染背景、海葵和果实
    drawBg();
    ane.draw();
    fruit.draw();

    //清除画布1
    ctx1.clearRect(0,0,canWidth,canHeight);

    //画笔1上渲染鱼妈妈、鱼宝宝、得分数据、波纹、尘埃
    mom.draw();
    baby.draw();
    data.draw();
    wave.draw();
    dust.draw();

    //检测鱼妈妈与果实的碰撞
    momFruitsCollision();
    //检测鱼妈妈和鱼宝宝的碰撞
    momBabyCollision();
}

//监测鼠标移动事件
function onMouseMove(e){
    //若游戏没有结束，一直检测鼠标的位置，若游戏结束，点击画面重新开始游戏
    if(!data.gameOver){
        if(e.offsetX || e.layerX){
            mx = e.offsetX == "undefined" ? e.layerX : e.offsetX;
            my = e.offsetY == "undefined" ? e.layerY : e.offsetY;
        }
    }else{
        document.getElementById("canvas").onclick = function(){
            window.location.reload();
        }
    }
}