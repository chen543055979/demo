var dustObj = function(){
    this.x = [];
    this.y = [];
    this.amp = [];
    this.style = [];
    this.dustPic = [];
    this.sinX = 0;
};

//设置30个尘埃
//尘埃的位置随机分布在画布上，尘埃的大小随机
dustObj.prototype.num = 30;
dustObj.prototype.init = function(){
    for(var i=0;i<7;i++){
        this.dustPic[i] = new Image();
        this.dustPic[i].src = "./img/dust" + i + ".png";
    }
    for(var j=0;j<this.num;j++){
        this.x[j] = Math.random()*canWidth;
        this.y[j] = Math.random()*canHeight;
        this.amp[j] = 20 + Math.random() * 25;
        this.style[j] = Math.floor(Math.random()*7);
    }
    this.sinX = 0;
};

//在画布上渲染尘埃
//尘埃的x坐标参照海葵的正弦值变化，实现水流飘动的效果
dustObj.prototype.draw = function(){
    this.sinX += deltaTime*.0008;
    var sinY = Math.sin(this.sinX);
    for(var i=0;i<this.num;i++){
        ctx1.drawImage(this.dustPic[this.style[i]],this.x[i]+sinY*this.amp[i],this.y[i]);
    }
};