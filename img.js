var imgG=[];
var EH=[];
var PH=[];
var LC50=[];
var LC100=[];
var LC200=[];

let axisImg=[];
let txtMain;
let txtDemo=[];
let txtGraphics=[];

function imgSetup(){
    txtMain = createGraphics(width,height);
    let loadedFrame=frame;
  //  let loadedFrame=200;

    for(let i=0; i<2; i++){
        txtDemo[i] = createGraphics(width,height);

    }

    for(let i=0; i<3; i++){
        txtGraphics[i]=createGraphics(width,height);

        imgG[i]=[];
         axisImg[i]=[];
         for(let j=0; j<loadedFrame+1; j++){
                     imgG[i][j]=createGraphics(wimg[i],himg[i]);
                    
                     LCsetup(imgG[i][j],i,j);
    }
    imgG[i][frame]=createGraphics(wimg[i],himg[i]);
                    
    LCsetup(imgG[i][frame],i,frame);
}
txtGraphics[3]=createGraphics(width,height);

    for(let j=0; j<2; j++){
        EH[j]=createGraphics(wimg[0],himg[0]);
        PH[j]=createGraphics(wimg[0],himg[0]);
        LCsetup(EH[j],3,j);
        LCsetup(PH[j],4,j);
    }

    for(let j=0; j<2; j++){
        LC50[j]=createGraphics(wimg[0],himg[0]);
        LC100[j]=createGraphics(wimg[0],himg[0]);
        LC200[j]=createGraphics(wimg[0],himg[0]);
        LCsetup(LC50[j],5,j);
        LCsetup(LC100[j],6,j);
        LCsetup(LC200[j],7,j);
    }

    for (let i=0;i<2;i++){
        for (let j=0;j<3;j++){
        axisImg[j][i]=createGraphics(wimg[j]+2*border,himg[j]+2*border);
       
      
        }
    }
}


function imgDraw(){
    let I=2;

    for(let i=0; i<3; i++){
     if(bCoo[i].State){
        I=i;
     }
    }

    if(bPS[0].State){
        image(formulas0[I],xForm,yForm+2*bd,wForm,hForm);

        let j;
    for(let i=0; i<3; i++){
      j=setPosition(i);
     image(imgG[j][int(t)],ximg[i],yimg[i]);
              image(txtMain,0,0);

        }
        image(txtDemo[0],0,0);
        let s;
        s=convertState();
        image(txtGraphics[s],0,0);

    }


        if(bPS[1].State){
            image(formulas1[I],xForm,yForm+2*bd,wForm,hForm);

            image(EH[int(bCoo[0].State)],ximg[0],yimg[0]);
           if(bt[1].State){
            t=frame;
            bRel.order(false);
            image(LC50[int(bCoo[0].State)],ximg[1],yimg[1]);
           }else if(bt[2].State){
            t=frame;
            bRel.order(false);
            image(LC100[int(bCoo[0].State)],ximg[1],yimg[1]);
           }else if(bt[3].State){
            t=frame;
            bRel.order(false);
            image(LC200[int(bCoo[0].State)],ximg[1],yimg[1]);
           }else{
            image(imgG[int(bCoo[0].State)][int(t)],ximg[1],yimg[1]);
           }
            image(PH[int(bCoo[0].State)],ximg[2],yimg[2]);
            image(txtDemo[1],0,0);
            image(txtGraphics[3],0,0);

           }


        for(let i=0; i<3; i++){
        image(axisImg[i][0],xAxis[i],yAxis[i]);
        }

        image(txtMain,0,0);
        timeText(Tbar.x,Tbar.y,Tbar.l,Tbar.h);

}


function setPosition(i){
if(bCoo[0].State){
return i;

}
if(bCoo[1].State){
if(i==0){
    return 1;
}
if(i==1){
    return 0;
} 
if(i==2){
    return 2;

}
}
if(bCoo[2].State){
    if(i==0){
        return 0;
    }
    if(i==1){
        return 2;
    } 
    if(i==2){
        return 1;
    
    }
    
}

}

function convertState(){
  for(let i=0; i<3; i++){
   if(bCoo[i].State){

    return i;
   }

  


}
}

function timeText(x,y,w,h){
    let xline=map(t,0,frame,x,x+w);
    let c1=color(0x2B, 0x3A, 0x67);
    for(let i=1; i<4; i++){
        if(bt[i].State){
            
      xline=x+w*1.03;
      rectMode(CENTER);
      fill(c1);
      rect(xline,y+h/2,bd/4,bd*1.5)
      rect(xline,y+h/2,bd*1.5,bd/4)
      rectMode(CORNER);

        }

    }
    let time= table[0].getNum(int(t),1);
    fill(c1);
    triangle(xline, y+h*1.2, xline+bd/2, y+h*2, xline-bd/2, y+h*2)

    noStroke();
    fill(255);
    textAlign(CENTER, CENTER);   
    textSize(bd);
    noStroke();
   let a=2.6;
    if(bt[1].State){
   
    text("t= "+ 50+" Gyr",xline,y+a*h); 
    
    }else if(bt[2].State){
        text("t= "+ 100+" Gyr",xline,y+a*h); 

    }else if(bt[3].State){
        text("t= "+ 200+" Gyr", xline,y+a*h); 

    }else{    
    text("t= "+ round(time,1)+" Gyr", xline+10,y+a*h);
    }
  }