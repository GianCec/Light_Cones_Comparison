function timeLine(){
    let    cipher=1;
    let bd=height*0.012;
    let time;
    let spacePH;
    let spaceLC;
    time= table[0].getNum(int(t),1);
    let initial=0;
    let max=3;
    if(bPS[1].State){
        initial=1;
        max=3;
    }


    for(let i=initial; i<max; i++){
        strokeWeight(2);
        stroke(255);
        let y=map(t,0,frame,yimg[i]+himg[i],yimg[i])
    line(ximg[i],y,ximg[i]+wimg[i],y);
    strokeWeight(1);
    noStroke();
    fill(255);
   if(t<t0){
   text("Observer time : t= "+ round(time,cipher)+" Gyr", ximg[i]+2*wimg[i]/3,y-bd);
   }else{

    text("Observer time : t= "+ round(time,cipher)+" Gyr", ximg[i]+2*wimg[i]/3,y+bd);

   }
   if(i==2){
   if(bPS[1].State){
    spacePH=   tabPH[int(bCoo[0].State)].getNum(int(t),0)*scaleR;
   if(spacePH<wimg[1]/2){
   if(bRel.State){
    push;
    translate(ximg[2]+wimg[2]/2,yimg[2]+himg[1])
    dottedLine(spacePH,-time*scaleT,spacePH,yimg[1]+himg[1]-(yimg[2]+himg[1]));
    dottedLine(-spacePH,-time*scaleT,-spacePH,yimg[1]+himg[1]-(yimg[2]+himg[1]));

    pop;
   }
   }
   }
    }
}
}
function MTool(){
    let bd=height*0.015;

    let index=map(TY,himg[0],0,0,frame);

    let time= table[0].getNum(int(index),1);
    let initial=0;
    let max=3;
    if(bPS[1].State){
        initial=1;
        max=2;
    }


    for(let i=initial; i<max; i++){
        let spaceV= setDistance(i,index);
        
   let space=spaceV*scaleR;
   if(space>wimg[i]/2){
    space=wimg[i]/2;
      }
        strokeWeight(2);
        stroke(255,0,0);
    line(ximg[i],yimg[i]+TY,ximg[i]+wimg[i]/2-space,yimg[i]+TY);
    stroke(0,255,0);

    line(ximg[i]+wimg[i]/2-space,yimg[i]+TY,ximg[i]+wimg[i]/2,yimg[i]+TY);
    stroke(255,0,0);

    line(ximg[i]+wimg[i]/2,yimg[i]+TY,ximg[i]+wimg[i],yimg[i]+TY);

    strokeWeight(1);
    noStroke();
    fill(255);
   if(index<t0){
   text("Light cone distance time: t= "+ round(time,1)+" Gyr", ximg[i]+3*wimg[i]/5,yimg[i]+TY-bd);
   text("Light cone distance : d = "+ round(spaceV,1)+" Glyr", ximg[i]+wimg[i]/4,yimg[i]+TY-bd);

   }else{

    text("Light cone distance time: t= "+ round(time,1)+" Gyr", ximg[i]+3*wimg[i]/5,yimg[i]+TY+bd);
    text("Light cone distance : d = "+ round(spaceV,1)+" Glyr", ximg[i]+wimg[i]/4,yimg[i]+TY+bd);

   }

}
}

function setDistance(i,index){
    let v;
 
    if(bCoo[0].State){
        if(i==0){
           v= abs(table[int(t)].getNum(int(index),0));
        }
        if(i==1){
            v= abs(tableC[int(t)].getNum(int(index),0));
        } 
        if(i==2){
            v=abs(tableC[int(t)].getNum(int(index),1)-tableC[int(t)].getNum(int(t),1));
        }
        }
        if(bCoo[1].State){
        if(i==0){
            v= abs(tableC[int(t)].getNum(int(index),0));
        }
        if(i==1){
            v= abs(table[int(t)].getNum(int(index),0));
        } 
        if(i==2){
            v=abs(tableC[int(t)].getNum(int(index),1)-tableC[int(t)].getNum(int(t),1));
        
        }
        }
        if(bCoo[2].State){
            if(i==0){
                v= abs(table[int(t)].getNum(int(index),0));
            }
            if(i==1){
                v=abs(tableC[int(t)].getNum(int(index),1)-tableC[int(t)].getNum(int(t),1));
            } 
            if(i==2){
                v= abs(tableC[int(t)].getNum(int(index),0));
            
            }
            
        }
    
return v;
}

function dottedLine(xi,yi,xf,yf){
    let d=dist(xi,yi,xf,yf);
    let l=10;
    let n=d/l;
  
    for(let i=0;i<n;i++){
      if(i%2==0){
      let vi= i/n;
      let  vf= (i+1)/n;
     xti=lerp(xi,xf,vi);
      yti=lerp(yi,yf,vi);
      xtf=lerp(xi,xf,vf);
      ytf=lerp(yi,yf,vf); 
      if(ytf<yf){
        ytf=yf;
      }
      stroke(255);
        line(xti,yti,xtf,ytf);
      }
    }
    
  }