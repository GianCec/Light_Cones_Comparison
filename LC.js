let ColFuture;
let ColPast;
let ColFuture2;
let ColPast2;
let ColEH;
let ColPH;



function LCsetup(im,kind,time){ // kind

    if(kind==0){
      LCpro(im,time,true,true);
      LCpro(im,time,false,true);
      LCpro(im,time,true,false);
      LCpro(im,time,false,false);
    }
    
    
    
    if(kind==1){
      LCcom(im,time,true,true);
      LCcom(im,time,false,true);
      LCcom(im,time,true,false);
      LCcom(im,time,false,false);
      }
    
    if(kind==2){
      LCmink(im,time,true,true);
      LCmink(im,time,true,false);
      LCmink(im,time,false,true);
      LCmink(im,time,false,false);

    }

    if(kind==3){
      EH(im,time,true,true);
      EH(im,time,true,false);
      EH(im,time,false,true);
      EH(im,time,false,false);

    }

    if(kind==4){
      PH(im,time,true,true);
      PH(im,time,true,false);
      PH(im,time,false,true);
      PH(im,time,false,false);

    }

    if(kind==5){
      lc50(im,time,true,true);
      lc50(im,time,true,false);
      lc50(im,time,false,true);
      lc50(im,time,false,false);

    } 
    if(kind==6){
      lc100(im,time,true,true);
      lc100(im,time,true,false);
      lc100(im,time,false,true);
      lc100(im,time,false,false);

    } 
    if(kind==7){
      lc200(im,time,true,true);
      lc200(im,time,true,false);
      lc200(im,time,false,true);
      lc200(im,time,false,false);

    } 
}

function LCcom(im,time,RIGHT,FULL){
    let lastValue;
    let jump1=15;
    let jump2=10;
 if(time<80){
     jump2=2;

 }
  let LR=1;
  if(RIGHT){
  LR=-1;
  }
 
      im.beginShape();
      im.translate(im.width/2,im.height);
      im.noFill();
      im.stroke(255);
      im.strokeWeight(2);

  if(FULL){

    im.fill(ColPast);
    im.noStroke();
    
    im.vertex(0,table[time].getNum(time+1,1)*scaleT);
    im.vertex(0,0)

  }
  for(let j=0;j<time;j=j+jump2){
    j=indexFix(j,time,jump2); 
  let x =abs(tableC[time].getNum(j,0)*scaleR);
 
  let y =-table[time].getNum(j,1)*scaleT;
  im.vertex(LR*x,y);


  }
  if(FULL){

    im.endShape();
    im.beginShape();
    im.fill(ColFuture);
    im.noStroke();
    im.vertex(0,-im.height);

    im.vertex(0,table[time].getNum(time+1,1)*scaleT);

   

  }
  for(let j=time+1;j<frame;j=j+jump1){
    j=indexFix(j,time,jump1); 
  let x =abs(tableC[time].getNum(j,0)*scaleR);
  if(j==frame-1){
    lastValue=x;
  }
  let y =-table[time].getNum(j,1)*scaleT;
  im.vertex(LR*x,y);
  }
  im.vertex(LR*lastValue,-im.height);
  im.endShape();
  im.stroke(ColFuture2);
  im.line(0,-table[time].getNum(time+1,1)*scaleT,0,-im.height);
  im.stroke(ColPast2);
  im.line(0,0,0,-table[time].getNum(time+1,1)*scaleT);
  im.translate(-im.width/2,-im.height);

  

  
  
  }
  
  
  
  function LCpro(im,time,RIGHT,FULL){
    let lastValue;

    let jump1=15;
    let jump2=10;
 if(time<80){
     jump2=2;

 }
  let LR=1;
  if(RIGHT){
  LR=-1;
  }
  
      im.beginShape();
      im.translate(im.width/2,im.height);
      im.noFill();
      im.stroke(255);
      im.strokeWeight(2);

  if(FULL){

    im.fill(ColPast);
    im.noStroke();
    
    im.vertex(0,table[time].getNum(time+1,1)*scaleT);
    im.vertex(0,0)
    im.line(0,0,0,table[time].getNum(time+1,1)*scaleT)
  }
  for(let j=0;j<time;j=j+jump2){
    j=indexFix(j,time,jump2); 
  let x =abs(table[time].getNum(j,0)*scaleR);
  
  let y =-table[time].getNum(j,1)*scaleT;
  im.vertex(LR*x,y);
  }
  if(FULL){

    im.endShape();
    im.beginShape();
    im.fill(ColFuture);
    im.noStroke();
    im.vertex(0,-im.height)

    im.vertex(0,table[time].getNum(time+1,1)*scaleT);

    im.line(0,-im.height,0,table[time].getNum(time+1,1)*scaleT)
    im.noStroke();
  }
  for(let j=time+1;j<frame;j=j+jump1){
    j=indexFix(j,time,jump1); 
  let x =abs(table[time].getNum(j,0)*scaleR);
  
  if(j==frame-1){
    lastValue=x;
  }
  let y =-table[time].getNum(j,1)*scaleT;
  im.vertex(LR*x,y);
  }
  im.vertex(LR*lastValue,-im.height);
  im.endShape();
  im.stroke(ColFuture2);
  im.line(0,-table[time].getNum(time+1,1)*scaleT,0,-im.height);
  im.stroke(ColPast2);
  im.line(0,0,0,-table[time].getNum(time+1,1)*scaleT);
  im.translate(-im.width/2,-im.height);

  

  
  
  }
  


  
  function LCmink(im,time,FULL,RIGHT){
    let top=25*scaleT;
    let t =table[0].getNum(time+1,1)*scaleT;
    let y=[0,t,top];
    let x=[t,0,y[2]-t];
    let LR=1;
    if(RIGHT){

        LR=-1;
    }
    im.beginShape();
    

    im.translate(im.width/2,im.height);
    im.noFill();
    im.stroke(255);
    im.strokeWeight(2);
    if(FULL){
        im.fill(ColPast);
        im.noStroke();

        im.vertex(0,-t);
        im.vertex(0,0);
     

    }
    im.vertex(LR*x[0],-y[0]);
    if(FULL){
        im.endShape();
        im.beginShape();
        im.fill(ColFuture);
    }
    for(let j=1;j<x.length;j++){

    im.vertex(LR*x[j],-y[j]);
}
if(FULL){
    im.vertex(0,-top);
}


im.endShape();
im.stroke(ColFuture2);
  im.line(0,-table[time].getNum(time+1,1)*scaleT,0,-im.height);
  im.stroke(ColPast2);
  im.line(0,0,0,-table[time].getNum(time+1,1)*scaleT);
im.translate(-im.width/2,-im.height);

    
  }


  function indexFix(i,time,jump){
    let diff2=abs(frame-1-i);
    let diff=abs(time-1-i);
    
  if(diff<jump){
  return time;
  }
  if(diff2<jump){
  
   return frame-1;
    }
    return i;
  }


  function PH(im,time,RIGHT,FULL){
    let lastValue;

    let jump1=10;
    let jump2=10;

  let LR=1;
  if(RIGHT){
  LR=-1;
  }
  
      im.beginShape();
      im.translate(im.width/2,im.height);
      im.noFill();
      im.stroke(255);
      im.strokeWeight(2);

  if(FULL){

    im.fill(ColPH);
    im.noStroke();
    
    im.vertex(0,tabPH[time].getNum(time+1,1)*scaleT);
    im.vertex(0,0)
    im.line(0,0,0,tabPH[time].getNum(time+1,1)*scaleT)
  }
  for(let j=0;j<time;j=j+jump2){
    j=indexFix(j,time,jump2); 
  let x =abs(tabPH[time].getNum(j,0)*scaleR);
  
  let y =-tabPH[time].getNum(j,1)*scaleT;
  im.vertex(LR*x,y);
  }
  if(FULL){

    im.endShape();
    im.beginShape();
    im.fill(ColPH);
    im.noStroke();
    im.vertex(0,-im.height)

    im.vertex(0,tabPH[time].getNum(time+1,1)*scaleT);

    im.line(0,-im.height,0,tabPH[time].getNum(time+1,1)*scaleT)
    im.noStroke();
  }
  for(let j=time+1;j<frame;j=j+jump1){
    j=indexFix(j,time,jump1); 
  let x =abs(tabPH[time].getNum(j,0)*scaleR);
  
  if(j==frame-1){
    lastValue=x;
  }
  let y =-tabPH[time].getNum(j,1)*scaleT;
  im.vertex(LR*x,y);
  }
  im.vertex(LR*lastValue,-im.height);
  im.endShape();
  im.stroke(ColFuture2);

  im.line(0,-tabPH[time].getNum(time+1,1)*scaleT,0,-im.height);
  im.stroke(ColPast2);

  im.line(0,0,0,-tabPH[time].getNum(time+1,1)*scaleT);
  im.translate(-im.width/2,-im.height);

  

  
  
  }



  function EH(im,time,RIGHT,FULL){
    let lastValue;

    let jump1=10;
    let jump2=10;

  let LR=1;
  if(RIGHT){
  LR=-1;
  }
  
      im.beginShape();
      im.translate(im.width/2,im.height);
      im.noFill();
      im.stroke(255);
      im.strokeWeight(2);

  if(FULL){

    im.fill(ColEH);
    im.noStroke();
    
    im.vertex(0,tabEH[time].getNum(time+1,1)*scaleT);
    im.vertex(0,0)
    im.line(0,0,0,tabEH[time].getNum(time+1,1)*scaleT)
  }
  for(let j=0;j<time;j=j+jump2){
    j=indexFix(j,time,jump2); 
  let x =abs(tabEH[time].getNum(j,0)*scaleR);
  
  let y =-tabEH[time].getNum(j,1)*scaleT;
  im.vertex(LR*x,y);
  }
  if(FULL){

    im.endShape();
    im.beginShape();
    im.fill(ColEH);
    im.noStroke();
    im.vertex(0,-im.height)

    im.vertex(0,tabEH[time].getNum(time+1,1)*scaleT);

    im.line(0,-im.height,0,tabPH[time].getNum(time+1,1)*scaleT)
    im.noStroke();
  }
  for(let j=time+1;j<frame;j=j+jump1){
    j=indexFix(j,time,jump1); 
  let x =abs(tabEH[time].getNum(j,0)*scaleR);
  
  if(j==frame-1){
    lastValue=x;
  }
  let y =-tabPH[time].getNum(j,1)*scaleT;
  im.vertex(LR*x,y);
  }
  im.vertex(LR*lastValue,-im.height);
  im.endShape();
  im.stroke(ColPast2);

  im.line(0,-tabEH[time].getNum(time+1,1)*scaleT,0,-im.height);
  im.stroke(ColFuture2);
  im.line(0,0,0,-tabEH[time].getNum(time+1,1)*scaleT);
  im.translate(-im.width/2,-im.height);
  }

  
  
  function lc50(im,time,RIGHT,FULL){
    let lastValue;

    let jump1=10;
    let jump2=10;

  let LR=1;
  if(RIGHT){
  LR=-1;
  }
  
      im.beginShape();
      im.translate(im.width/2,im.height);
      im.noFill();
      im.stroke(255);
      im.strokeWeight(2);

  if(FULL){

    im.fill(ColEH);
    im.noStroke();
    
    im.vertex(0,tab50[time].getNum(time+1,1)*scaleT);
    im.vertex(0,0)
    im.line(0,0,0,tab50[time].getNum(time+1,1)*scaleT)
  }
  for(let j=0;j<time;j=j+jump2){
    j=indexFix(j,time,jump2); 
  let x =abs(tab50[time].getNum(j,0)*scaleR);
  
  let y =-tab50[time].getNum(j,1)*scaleT;
  im.vertex(LR*x,y);
  }
  if(FULL){

    im.endShape();
    im.beginShape();
    im.fill(ColEH);
    im.noStroke();
    im.vertex(0,-im.height)

    im.vertex(0,tab50[time].getNum(time+1,1)*scaleT);

    im.line(0,-im.height,0,tabPH[time].getNum(time+1,1)*scaleT)
    im.noStroke();
  }
  for(let j=time+1;j<frame;j=j+jump1){
    j=indexFix(j,time,jump1); 
  let x =abs(tab50[time].getNum(j,0)*scaleR);
  
  if(j==frame-1){
    lastValue=x;
  }
  let y =-tab50[time].getNum(j,1)*scaleT;
  im.vertex(LR*x,y);
  }
  im.vertex(LR*lastValue,-im.height);
  im.endShape();
  im.stroke(ColPast2);

  im.line(0,-tab50[time].getNum(time+1,1)*scaleT,0,-im.height);
  im.stroke(ColFuture2);

  im.line(0,0,0,-tab50[time].getNum(time+1,1)*scaleT);
  im.translate(-im.width/2,-im.height);
  }

  function lc100(im,time,RIGHT,FULL){
    let lastValue;

    let jump1=10;
    let jump2=10;

  let LR=1;
  if(RIGHT){
  LR=-1;
  }
  
      im.beginShape();
      im.translate(im.width/2,im.height);
      im.noFill();
      im.stroke(255);
      im.strokeWeight(2);

  if(FULL){

    im.fill(ColEH);
    im.noStroke();
    
    im.vertex(0,tab100[time].getNum(time+1,1)*scaleT);
    im.vertex(0,0)
    im.line(0,0,0,tab100[time].getNum(time+1,1)*scaleT)
  }
  for(let j=0;j<time;j=j+jump2){
    j=indexFix(j,time,jump2); 
  let x =abs(tab50[time].getNum(j,0)*scaleR);
  
  let y =-tab100[time].getNum(j,1)*scaleT;
  im.vertex(LR*x,y);
  }
  if(FULL){

    im.endShape();
    im.beginShape();
    im.fill(ColEH);
    im.noStroke();
    im.vertex(0,-im.height)

    im.vertex(0,tab100[time].getNum(time+1,1)*scaleT);

    im.line(0,-im.height,0,tabPH[time].getNum(time+1,1)*scaleT)
    im.noStroke();
  }
  for(let j=time+1;j<frame;j=j+jump1){
    j=indexFix(j,time,jump1); 
  let x =abs(tab100[time].getNum(j,0)*scaleR);
  
  if(j==frame-1){
    lastValue=x;
  }
  let y =-tab100[time].getNum(j,1)*scaleT;
  im.vertex(LR*x,y);
  }
  im.vertex(LR*lastValue,-im.height);
  im.endShape();
  im.stroke(ColPast2);

  im.line(0,-tab100[time].getNum(time+1,1)*scaleT,0,-im.height);
  im.stroke(ColFuture2);
  im.line(0,0,0,-tab100[time].getNum(time+1,1)*scaleT);
  im.translate(-im.width/2,-im.height);
  }

  function lc200(im,time,RIGHT,FULL){
    let lastValue;

    let jump1=10;
    let jump2=10;

  let LR=1;
  if(RIGHT){
  LR=-1;
  }
  
      im.beginShape();
      im.translate(im.width/2,im.height);
      im.noFill();
      im.stroke(255);
      im.strokeWeight(2);

  if(FULL){

    im.fill(ColEH);
    im.noStroke();
    
    im.vertex(0,tab200[time].getNum(time+1,1)*scaleT);
    im.vertex(0,0)
    im.line(0,0,0,tab200[time].getNum(time+1,1)*scaleT)
  }
  for(let j=0;j<time;j=j+jump2){
    j=indexFix(j,time,jump2); 
  let x =abs(tab200[time].getNum(j,0)*scaleR);
  
  let y =-tab200[time].getNum(j,1)*scaleT;
  im.vertex(LR*x,y);
  }
  if(FULL){

    im.endShape();
    im.beginShape();
    im.fill(ColEH);
    im.noStroke();
    im.vertex(0,-im.height)

    im.vertex(0,tab200[time].getNum(time+1,1)*scaleT);

    im.line(0,-im.height,0,tabPH[time].getNum(time+1,1)*scaleT)
    im.noStroke();
  }
  for(let j=time+1;j<frame;j=j+jump1){
    j=indexFix(j,time,jump1); 
  let x =abs(tab200[time].getNum(j,0)*scaleR);
  
  if(j==frame-1){
    lastValue=x;
  }
  let y =-tab200[time].getNum(j,1)*scaleT;
  im.vertex(LR*x,y);
  }
  im.vertex(LR*lastValue,-im.height);
  im.endShape();
  im.stroke(ColPast2);
  im.line(0,-tab200[time].getNum(time+1,1)*scaleT,0,-im.height);
  im.stroke(ColFuture2);

  im.line(0,0,0,-tab200[time].getNum(time+1,1)*scaleT);
  im.translate(-im.width/2,-im.height);
  }