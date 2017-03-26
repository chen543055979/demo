var waveObj = function(){
    this.x = [];
    this.y = [];
    this.alive = [];
    this.r = [];
    this.style = [];
};

//初始化10个波纹
waveObj.prototype.num = 10;
waveObj.prototype.init = function(){
    for(var i=0;i<this.num;i++){
        this.alive[i] = false;
        this.r[i] = 0;
    }
};

//在画布上渲染波纹
//根据触发对象选择渲染的波纹类别
waveObj.prototype.draw = function(){
    ctx1.save();
    ctx1.shadowBlur = 10;
    ctx1.shadowColor = "white";
    for(var i=0;i<this.num;i++){
        if(this.alive[i]){
            if(this.style[i] == "fruit"){
                ctx1.lineWidth = 2;
                this.r[i] += deltaTime*.04;
                if(this.r[i]>50){
                    this.alive[i] = false;
                    continue;
                }
                var alpha1 = 1 - this.r[i]/50;
                ctx1.beginPath();
                ctx1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
                ctx1.strokeStyle = "rgba(255,255,255," + alpha1 +")";
            }else{
                ctx1.lineWidth = 4;
                this.r[i] += deltaTime*.03;
                if(this.r[i]>60){
                    this.alive[i] = false;
                    continue;
                }
                var alpha2 = 1 - this.r[i]/60;
                ctx1.beginPath();
                ctx1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
                ctx1.strokeStyle = "rgba(255,165,0," + alpha2 +")";
            }

            ctx1.stroke();
        }
    }
    ctx1.restore();
};

//设置波纹出生，检测出生时的触发对象是果实还是鱼宝宝
waveObj.prototype.born = function(x,y,style){
    for(var i=0;i<this.num;i++){
        if(!this.alive[i]){
            this.alive[i] = true;
            this.r[i] = 10;
            this.x[i] = x;
            this.y[i] = y;
            this.style[i] = style;
            return;
        }
    }
};