

function pbsetPX(x,y,r,g,b,a){
    let d = pb.pixelDensity();
for (let i = 0; i < d; i++) {
  for (let j = 0; j < d; j++) {
    // loop over
    index = 4 * ((y * d + j) * size * d + (x * d + i));
    pb.pixels[index] = r;
    pb.pixels[index+1] = g;
    pb.pixels[index+2] = b;
    pb.pixels[index+3] = a;
  }
}
}


function drawBoard(){
    pb.loadPixels();
   
for(var x=0;x<size;x+=1){
    for(var y=0;y<size;y+=1){
        if(map[x][y]==0){
            pbsetPX(x,y,0,0,0,255);
        }
        else if(map[x][y]==-1){
            pbsetPX(x,y,120,120,120,255);
        }
       else if(map[x][y] >0 ){
            var c=sands[map[x][y]].color;
            pbsetPX(x,y,red(c),green(c),blue(c),alpha(c));
        }


   
     
    }
}
pb.updatePixels();
//p("-")
}