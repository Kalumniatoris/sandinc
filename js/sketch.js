

var pb; //board
var pc; //control panel

function setup() {
    initPhys();
createCanvas(size+csize,size);

pb=createGraphics(size,size);
cb=createGraphics(size,size);

  
//generators.push({x:20,y:10,c:1,to:100})
tphys=setInterval(doPhys,30);
noLoop();
//createGenerator(168,15,2,350)
}

var drawTO=100;
var graphicsLoop=setInterval(draw,60/2)
function changeDrawInt(ms){
    clearInterval(graphicsLoop);
graphicsLoop=setInterval(draw,ms);
}

function changePhysInt(ms){
    clearInterval(tphys);
    tphys=setInterval(doPhys,ms);
}
function draw() {
  // put drawing code here
drawBoard();
drawControls();

image(pb,0,0);
image(cb,size,0);

}


function doPhys(){
    updateMap();
 

}

var toDraw=-1;
var pSize=1;

function mouseDragged(){

 
    //console.log(map)
   
    for(var tx=-pSize;tx<pSize;tx+=1){
        for(var ty=-pSize;ty<pSize;ty+=1){
            if(tx>=0&&tx<size&&ty>=0&&ty<size){
            map[mouseX+tx][mouseY+ty]=toDraw;
            }
        }
    }
    
}


function printMap(){
    for(var x=0;x<size;x+=1){
        console.log(map[x]);
    }

}

// function  pbsetPX(x,y,r,g,b,a){
//     pb.set(x,y,color(r,g,b,a));
// }



function drawControls(){
    cb.background(255);
    cb.text("Money: "+money,10,10)
}

