
var map;
function initPhys(){

map=Create2DArray(size);
clearMap();
}

function clearMap(){
    p("clearing map");
    for(var x=0;x<size;x+=1){
        for(var y=0;y<size;y+=1){
            map[x][y]=0;
        }}
    p("clearing done")

}


//   function updateMap(){
//     for(var x=0;x<size;x+=1){
//         for(var y=size-2;y>0;y-=1){
//             if(map[x][y] instanceof Sand){
//                 if(map[x][y+1]==0){
//                     map[x][y+=1]=map[x][y];
//                     map[x][y]=0;
//                 }else  if(map[x-1][y+1]==0){
//                     map[x-1][y+=1]=map[x][y];
//                     map[x][y]=0;
//                 } else  if(map[x+1][y+1]==0){
//                     map[x+1][y+=1]=map[x][y];
//                     map[x][y]=0;
//                 }

//                 if(map[x][y+1] instanceof Sand){
//                     var res=checkCombo(map[x][y],map[x][y+1]);

//                     if(res!=0){
//                         map[x][y]=0;
//                         map[x][y+1]=res;
//                     }

//                 }
//             }
            

//         }
//     }

//   }




  
function updateMap(){



    for(var x=1;x<size-1;x+=1){
        for(var y=size-2;y>0;y-=1){
            if(map[x][y] > 0){
             //   debugger;
                if(map[x][y+1]==0){
                    map[x][y+1]=map[x][y];
                    map[x][y]=0;
                }else if(map[x-1][y+1]==0){
                    map[x-1][y+=1]=map[x][y];
                    map[x][y]=0;
                } else if(map[x+1][y+1]==0){
                    map[x+1][y+=1]=map[x][y];
                    map[x][y]=0;
                }

                else if(map[x][y+1] >0){
                    var res=checkCombo(map[x][y],map[x][y+1]);

                    if(res!=0&&res!=undefined){
                    //    p(res)
                        map[x][y]=0;
                        map[x][y+1]=res;
                    }

                }
                else if(map[x-1][y+1] >0){
                    var res=checkCombo(map[x][y],map[x-1][y+1]);

                    if(res!=0&&res!=undefined){
                      //  p("res:"+res)
                        map[x][y]=0;
                        map[x-1][y+1]=res;
                    }

                }
                else if(map[x+1][y+1] >0){
                    var res=checkCombo(map[x][y],map[x+1][y+1]);

                    if(res!=undefined){
                      //  p(res)
                        map[x][y]=0;
                        map[x+1][y+1]=res+1;
                    }

                }
            }
            

        }
    }
//p(".")


  }

  
function Create2DArray(rows) {
    var arr = [];
  
    for (var i=0;i<rows;i++) {
       arr[i] = [];
    }
  
    return arr;
  }
