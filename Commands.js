
//bottoni
let bT=[];   // time
let Tbar;
let bPS=[];
let bCoo=[];
let bTool;
let bRel;

let bt=[];






  
  
    function commandSetup(){
       let bx=width*0.01;
       let by=height*0.12;
      let   byI=height/36;
         bd=height*0.018;
   
   let byI2=byI/2;
   by=by+byI2;
   xTB=bx+byI*2;
   yTB=by-bd/3;
   wTB=width/4;
   hTB=10;

   Tbar=new slider(bx+byI*2,by*1.05,width*0.27,height*0.018);


   bT[0]=new button(bx,by*1.11,bd*1.3,true,false);
   bT[1]=new button(bx+byI,by*1.11,bd*1.3,false,false);
   bt[0]=new button(bx,by*1.6,bd,false,false);
   buttonText(txtMain,bt[0],"Set time to today (13.8 gyr)");
   bt[1]=new button(bx,by*1.8,bd,true,false);
   buttonText(txtDemo[1],bt[1],"Set time to 50 gyr");
   bt[2]=new button(bx,by*2,bd,true,false);
   buttonText(txtDemo[1],bt[2],"Set time to 100 gyr");
   bt[3]=new button(bx,by*2.2,bd,true,false);
   buttonText(txtDemo[1],bt[3],"Set time to 200 gyr");

   let byPS=height/10;
   let bxPS=ximg[0]/2;
   bPS[0]=new button(bx+byI,byPS,bd*1.3,true,true);
   buttonText(txtMain,bPS[0],"Demostration 1");
   bPS[1]=new button(bxPS,byPS,bd*1.3,true,false);
   buttonText(txtMain,bPS[1],"Demostration 2");
   let byCoo=yimg[1]+himg[0]*0.55;
   let bdyCoo=himg[0]/8;
   bCoo[0]=new button(bx,byCoo-bdyCoo,bd,true,false);
   buttonText(txtMain,bCoo[0],"FLRW metric - coomving distance");
   bCoo[1]=new button(bx,byCoo,bd,true,false);
   buttonText(txtMain,bCoo[1],"FLRW metric - proper distance");
   bCoo[2]=new button(bx,byCoo+bdyCoo,bd,true,true);
   buttonText(txtDemo[0],bCoo[2],"Minkowski metric");

   bTool=new button(bx,byCoo-4*bdyCoo,bd,true,true);
   buttonText(txtDemo[0], bTool,"Show measuring tools");
   bRel=new button(bx,byCoo-4*bdyCoo,bd,true,false);
   buttonText(txtDemo[1], bRel,"Show relation between Particle Horizon and Past light cone");


    }

    function commandDraw(){
        bt[0].display();
            Tbar.display();
            for(let i=0; i<2;i++){
            bT[i].display();
            bPS[i].display();
            }

            for(let i=0; i<2;i++){
                bCoo[i].display();
            }
            if(bPS[0].State){
                bCoo[2].display();
                bTool.display();

            }

            if(bPS[1].State){
                for(let i=1; i<4;i++){
                bt[i].display();
                }
                bRel.display();
            }
   
    }

