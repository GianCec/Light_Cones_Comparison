function infoLoad(){
    let bd=height*0.018;
    let TITLE="Light cones Confrontation";
    let Tsize=height/30;
    txtMain.textSize(bd);
    txtMain.noStroke();
    txtMain.fill(255);
    txtMain.textAlign(CENTER,CENTER);
    txtMain.text("R", bT[1].x, bT[1].y+1);

    // TITLE
    txtMain.textAlign(LEFT);
  
    let d=width/60*4.5
    let h=height/25;
    txtMain.textSize(Tsize);
    txtMain.text(TITLE,d,h);
    txtMain.noFill();
    txtMain.stroke(255);
    txtMain.line(width/120,h,d,h);
    txtMain.line(d+textWidth(TITLE)*2.08,h,width/60*19,h);
    txtMain.noStroke();
    // Axis info space
    let xlab1=ximg[0]+wimg[0]/2;
    let ylab1=height-6;
    txtMain.textSize(bd);
    txtMain.fill(255);
    txtMain.textAlign(CENTER,CENTER);

    txtMain.text("Space : glyr",xlab1,ylab1);

    // time
    for(let i=0; i<3; i++){
        txtMain.push()
    txtMain.translate(width-width/80,himg[0]/2+yimg[i]);
    let n=i+1;
    let h=-himg[0]*0.42;
    txtMain.text(n,0,h);
    txtMain.noFill();
    txtMain.stroke(255);
    txtMain.circle(0,h,bd*1.4);
    txtMain.noStroke();
    txtMain.fill(255);


    txtMain.rotate(PI/2);
    txtMain.text("Time : gyr",0,0);
        /// Graphic Number 
    txtMain.pop()
    }
    //Central button cluster
    txtMain.textSize(bd*1.2);
    let xCG=width*0.005;
    let yCG=yimg[1]+himg[0]/4;
    txtMain.textAlign(LEFT,CENTER);

    txtMain.text("Set central graphic",xCG,yCG);


    //legend
    let x=width*0.01;
    let X=x
    let Y=ximg[2];
    bd=height*0.018;
    txtMain.stroke(255);
    txtMain.noFill(255);
  
    txtMain.line(X,Y-bd/2,X+width/7,Y-bd/2);
    txtMain.noStroke();
    txtMain.fill(255);
    txtMain.textSize(bd+3);
    txtMain.text("Legend",X,Y-bd)
    txtMain.textSize(bd);
  
    txtMain.text("Gyr : Giga-years",X,Y+bd)
    txtMain.text("Glyr : Giga-lightyears",X,Y+bd*2.5)
    txtMain.text("ON",X+bd*1.5,Y+bd*4);
    txtMain.text("OFF",X+bd*1.5,Y+bd*5.5);
    txtMain.text("Future world-line of Observer",X+bd*1.5,Y+bd*7.5);
    txtMain.text("Time-like future events",X+bd*1.5,Y+bd*9.5);
    txtMain.text("Past world-line of Observer",X+bd*1.5,Y+bd*11.5);
    txtMain.text("Time-like past events",X+bd*1.5,Y+bd*13.5);

    let textGr=[];
    for(let i=0; i<4; i++){
        textGr[i]=[];
    }
    textGr=[ ["FLRW metric - Proper distance","FLRW metric - Comoving distance","Minkowski metric"] ,
    ["FLRW metric - Comoving distance","FLRW metric - Proper distance","Minkowski metric"] ,
    ["FLRW metric - Proper distance","Minkowski metric","FLRW metric - Comoving distance"] ,
    ["Event Horizon","Light cone","Particle Horizon"]    ]
    for(let i=0; i<3; i++){
        txtMain.push()
        txtMain.textAlign(CENTER,CENTER);

    txtMain.translate(ximg[0]/2,himg[0]*0.8+yimg[0]);
    let n=i+1;
    let distFactor=2;
    let ty=bd*distFactor*(i-1);
    txtMain.text(n,0,ty);
    txtMain.noFill();
    txtMain.stroke(255);
    txtMain.circle(0,ty,bd*1.4);
    txtMain.pop();

    }
    txtMain.noStroke();
    for(let j=0; j<4; j++){
        txtGraphics[j].noStroke();
        txtGraphics[j].fill(255);
        txtGraphics[j].textSize(bd);
        txtGraphics[j].push;
        txtGraphics[j].textAlign(LEFT,CENTER);
        txtGraphics[j].translate(ximg[0]/2,himg[0]*0.8+yimg[0]);
        for(let i=0; i<3; i++){
            let distFactor=2;
            let   ty=bd*distFactor*(i-1);
    txtGraphics[j].text(textGr[j][i],bd*1.5,ty);
        }
    txtGraphics[j].pop;
    }
   
    txtMain.fill(0x2B, 0x3A, 0x67);
    txtMain.circle(X+bd/2,Y+bd*3.9,bd);
    txtMain.fill(0xE3, 0x17, 0x0A);
    txtMain.circle(X+bd/2,Y+bd*5.4,bd);
    txtMain.fill(255);
    txtMain.stroke(ColFuture2);
    txtMain.strokeWeight(3);
    txtMain.line(X+bd/2,Y+bd*7,X+bd/2,Y+bd*8);
    txtMain.line(X+bd/2,Y+bd*7,X+bd/2,Y+bd*8);

    txtMain.stroke(ColPast2);
    txtMain.line(X+bd/2,Y+bd*11,X+bd/2,Y+bd*12);    
    txtMain.line(X+bd/2,Y+bd*11,X+bd/2,Y+bd*12);    
    txtMain.noStroke();
    txtMain.rectMode(CENTER);
    txtMain.fill(ColFuture);
    txtMain.square(X+bd/2,Y+bd*9.5,bd);
    txtMain.fill(ColPast);
    txtMain.square(X+bd/2,Y+bd*13.5,bd);


    // GRAPHIC INFORMATION
    txtDemo[0].textSize(bd*1.2);
    txtDemo[0].textAlign(LEFT,CENTER);
    txtDemo[0].fill(255);
    txtDemo[0].text("Formulas for the central graph :",xForm,yForm)
    
    txtDemo[1].textSize(bd*1.2);
    txtDemo[1].textAlign(LEFT,CENTER);
    txtDemo[1].fill(255);
    txtDemo[1].text("Usefull formulas :",xForm,yForm)




}