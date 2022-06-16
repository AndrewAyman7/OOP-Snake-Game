class item {
    shape;
    x;
    y;
    
    constructor(shape,x,y){
        this.shape = shape;
        this.x = x;
        this.y = y;
        
        this.shape.style.left = x + "px";
        this.shape.style.top = y + "px";
        
    }
}


class food extends item {
    constructor(shape,x,y){  // belongs to food (same as item)
        super(shape,x,y)     // calling item constructor
    }
    
    
    // To re posistion food when i eat it
    rePosition(){
        this.x = getRandom(window.innerWidth -20)
        this.y = getRandom(window.innerHeight -20)    
        this.shape.style.left = this.x + "px";
        this.shape.style.top = this.y + "px";
    }
}


class player extends item{
    constructor(shape,x,y){  
        super(shape,x,y)     
}
    moveUp(){
        this.y -= 20;
        this.shape.style.top = this.y + "px"; 
    }

    moveDown(){
        this.y += 20;
        this.shape.style.top = this.y + "px"; 
    }
    moveLeft(){
        this.x -= 20;
        this.shape.style.left = this.x + "px"; 
    }
    moveRight(){
        this.x += 20;
        this.shape.style.left = this.x + "px"; 
    }
    
}


function getRandom (end){
    let val = Math.round( Math.random()*end );
    return val - (val % 20);
}



let f1 = new food(document.getElementById("food"), getRandom(window.innerWidth -20), getRandom(window.innerHeight -20) ) 

let p1 = new player(document.getElementById("player"),getRandom(window.innerWidth -20),getRandom(window.innerHeight -20)) 


window.addEventListener("keydown" ,  e =>{
    switch (e.keyCode){
            
        case 38 : {
            if (p1.y > 0) p1.moveUp();
            break; }
            
        case 40 : {
            if (p1.y < window.innerHeight-20 )p1.moveDown();
            break; }
            
        case 37 : {
            if (p1.x > 0) p1.moveLeft();
            break; }
            
        case 39 : {
            if (p1.x < window.innerWidth-20 ) p1.moveRight();
            break; }
    }
    
    if (p1.x === f1.x  &&  p1.y === f1.y)
        f1.rePosition();
} )





            
            
            
            
            
            
