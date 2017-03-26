//鱼妈妈与果实的碰撞事件
//碰撞之后，果实死亡，鱼妈妈颜色变色变深，产生波纹，果实出生
function momFruitsCollision(){
    if(!data.gameOver){
        for(var i=0;i<fruit.num;i++){
            var l = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
            if(l<900){
                data.fruitNum++;
                mom.momBodyCount++;
                if(mom.momBodyCount>7) mom.momBodyCount = 7;
                if(fruit.fruitType[i]=="blue") data.double = 2;
                wave.born(fruit.x[i],fruit.y[i],"fruit");
                fruit.dead(i);
            }
        }
    }
}

//鱼妈妈与鱼宝宝的碰撞事件
//碰撞之后，检测鱼妈妈是否吃了果实，是的话鱼妈妈鱼宝宝变为初始颜色，分数增加，产生波纹
function momBabyCollision(){
    if(data.fruitNum > 0 && !data.gameOver){
        var l = calLength2(mom.x,mom.y,baby.x,baby.y);
        if(l<900){
            baby.babyBodyCount = 0;
            mom.momBodyCount = 0;
            data.addScore();
            wave.born(baby.x,baby.y,"fish");
        }
    }
}
