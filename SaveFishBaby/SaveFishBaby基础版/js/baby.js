var babyObj = function(){
    this.x = 0;
    this.y = 0;
    this.angle = 0;
    this.babyEye = new Image();
    this.babyBody = new Image();
    this.babyTail = new Image();
};

babyObj.prototype.init = function(){
    this.angle = 0;
    this.x = canWidth*.5 - 50;
    this.y = canHeight*.5 + 50;
    this.babyEye.src = "./img/babyEye0.png";
    this.babyBody.src = "./img/babyFade0.png";
    this.babyTail.src = "./img/babyTail0.png";
};

babyObj.prototype.draw = function(){

    this.x = lerpDistance(mom.x,this.x,.98);
    this.y = lerpDistance(mom.y,this.y,.98);

    var beta = Math.atan2(mom.y-this.y,mom.x-this.x)+Math.PI;
    this.angle = lerpAngle(beta,this.angle,.6);

    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    ctx1.drawImage(this.babyTail,-this.babyTail.width*.5+23,-this.babyTail.height*.5);
    ctx1.drawImage(this.babyBody,-this.babyBody.width*.5,-this.babyBody.height*.5);
    ctx1.drawImage(this.babyEye,-this.babyEye.width*.5,-this.babyEye.height*.5);
    ctx1.restore();
};