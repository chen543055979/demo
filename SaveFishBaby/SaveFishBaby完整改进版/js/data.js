var dataObj = function(){
    this.fruitNum = 0;
    this.double = 1;
    this.score = 0;
    this.gameOver = false;
    this.alpha = 0;
};

//在画部下方添加分数显示，游戏结束在画面中央添加GAMEOVER
dataObj.prototype.draw = function(){
    var w = can1.width;
    var h = can1.height;

    ctx1.save();
    ctx1.fillStyle = "white";
    ctx1.shadowBlur = 10;
    ctx1.shadowColor = "white";
    ctx1.fillText("SCORE: "+this.score,w*.5,h-20);

    if(this.gameOver){
        this.alpha += deltaTime*.0005;
        if(this.alpha>1) this.alpha = 1;
        ctx1.fillStyle = "rgba(255,255,255," + this.alpha +")";
        ctx1.fillText("GAMEOVER",w*.5,h*.5-30);
    }
    ctx1.restore();
};

//分值计算
//黄果实加1分，蓝果实使当前鱼妈妈吃的果实分数*2
dataObj.prototype.addScore = function(){
    this.score += this.fruitNum * this.double;
    this.fruitNum = 0;
    this.double = 1;
};