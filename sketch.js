

var pb; //board
var pc; //control panel

function setup() {
    initPhys();
createCanvas(size+csize,size);

pb=createGraphics(size,size);
cb=createGraphics(size,size);

  
//generators.push({x:20,y:10,c:1,to:100})
tphys=setInterval(doPhys,100);

//createGenerator(168,15,2,350)
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



function mouseDragged(){
    //console.log(map)
    if(mouseX<size){
    map[mouseX][mouseY]=-1;
    map[mouseX-1][mouseY]=-1;
    map[mouseX][mouseY-1]=-1;
    map[mouseX+1][mouseY]=-1;
    map[mouseX][mouseY+1]=-1;
    map[mouseX+1][mouseY+1]=-1;
    map[mouseX-1][mouseY-1]=-1;
    map[mouseX-1][mouseY+1]=-1;
    map[mouseX+1][mouseY-1]=-1;
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

