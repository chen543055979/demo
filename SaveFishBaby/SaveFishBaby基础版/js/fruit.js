var fruitObj = function(){
    this.x = [];
    this.y = [];
    this.l = [];
    this.alive = [];
    this.spd = [];
    this.fruitType = [];
    this.orange = new Image();
    this.blue = new Image();
};

fruitObj.prototype.num = 15;

fruitObj.prototype.init = function(){
    for(var i=0;i<this.num;i++){
        this.x[i] = 0;
        this.y[i] = 0;
        this.l[i] = 0;
        this.alive[i] = true;
        this.spd[i] = Math.random()*.015+.003;
        this.fruitType[i] = "";
        this.born(i);
    }
    this.orange.src = "./img/fruit.png";
    this.blue.src = "./img/blue.png";
};

fruitObj.prototype.draw = function(){
    for(var i=0;i<this.num;i++){
        if(this.alive[i]){
            var pic;
            this.fruitType[i] == "blue" ? pic = this.blue : pic = this.orange;
            this.l[i]<=14 ? this.l[i] += this.spd[i]*deltaTime : this.y[i] -= this.spd[i]*deltaTime*7;
            ctx2.drawImage(pic,this.x[i]-this.l[i]*.5,this.y[i]-this.l[i]*.5,this.l[i],this.l[i]);
            if(this.y[i]<10){
                this.born(i);
            }
        }
    }
};

fruitObj.prototype.born = function(i){
    var aneID = Math.floor(Math.random()*ane.num);
    this.x[i] = ane.x[aneID];
    this.y[i] = canHeight - ane.len[aneID];
    this.l[i] = 0;
    this.alive[i] = true;
    Math.random()<.3 ? this.fruitType[i] = "blue" : this.fruitType[i] = "orange";
};

fruitObj.prototype.dead = function(i){
    this.alive[i] = false;
    this.born(i);
};

