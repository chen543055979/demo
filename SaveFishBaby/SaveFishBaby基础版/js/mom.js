var momObj = function(){
    this.x = 0;
    this.y = 0;
    this.angle = 0;
    this.bigEye = new Image();
    this.bigBody = new Image();
    this.bigTail = new Image();
};

momObj.prototype.init = function(){
    this.x = canWidth*.5;
    this.y = canHeight*.5;
    this.angle = 0;
    this.bigEye.src = "./img/bigEye0.png";
    this.bigBody.src = "./img/bigSwim0.png";
    this.bigTail.src = "./img/bigTail0.png";
};

momObj.prototype.draw = function(){

    this.x = lerpDistance(mx,this.x,.98);
    this.y = lerpDistance(my,this.y,.98);

    var beta = Math.atan2(my-this.y,mx-this.x)+Math.PI;     //反正切
    this.angle = lerpAngle(beta,this.angle,.6);

    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    ctx1.drawImage(this.bigTail,-this.bigTail.width*.5+30,-this.bigTail.height*.5);
    ctx1.drawImage(this.bigBody,-this.bigBody.width*.5,-this.bigBody.height*.5);
    ctx1.drawImage(this.bigEye,-this.bigEye.width*.5,-this.bigEye.height*.5);
    ctx1.restore();
};