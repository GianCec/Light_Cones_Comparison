


function axisSetup(){


infoNum=[false,true,false,true];  //Sopra sx destra sotto
infoNum2=[false,true,false,false];  //Sopra sx destra sotto

infoSymm=[true,false,false,true]; //true = symm
infoUR=[true,false,false,true];  //true sx->dx up->down 
infoSCL=[true,false,false,true];

axis(imgG[0][0],axisImg[0][0],infoNum,infoSymm,infoUR);
axis(imgG[1][0],axisImg[1][0],infoNum,infoSymm,infoUR);
axis(imgG[2][0],axisImg[2][0],infoNum2,infoSymm,infoUR);
axis(imgG[0][0],axisImg[0][1],infoNum,infoSymm,infoUR,infoSCL);
axis(imgG[1][0],axisImg[1][1],infoNum,infoSymm,infoUR,infoSCL);
axis(imgG[2][0],axisImg[2][1],infoNum2,infoSymm,infoUR,infoSCL);

}


function axis(img,axisImg,infoNum,infoSym,infoUR,infoSCL=[false,false,false,false]){
    let x=[];
    let y=[];
      x[0]=border;
      y[0]=border;
      x[1]=border+img.width;
      y[1]=border+img.height;
      for(let i=0;i<4; i++){
        let a=int(i/2)%2;
        let b=i%2;
      let UpRight=infoUR[i];
        let c=(i+1)%2;
     axisLine(axisImg,x[a],y[a],x[c],y[b],infoNum[i],infoSym[i],UpRight,border,i)
    }  
    }
    
    function axisLine(axisImg, xi,yi,xf,yf,info,infosym,UpRight,bd,j){
 
      // axisImg.background(100);
          axisImg.fill(255);
          axisImg.stroke(255);

       axisImg.line(xi,yi,xf,yf);
       let d=dist(xi,yi,xf,yf);
       let scale=scaleR;
       let n=d/scale/2;
       let xti,xtf,yti,ytf;
       for(let i= 0 ; i<n;i++ ){
         let  valueI1=i;
         let  valueI2=valueI1;
         if(infosym==false){
         valueI1=abs(i-n)-0.5;
           valueI2=abs(i+n)+0.5;
           if(UpRight){
                 valueI1=abs(i+n);
           valueI2=abs(i-n);
              }
         }
          axisImg.textSize(10);
          let l=bd/80;
     
         if(i%5==2){ //Regola lunghezza
            
          l=bd/40;}
        if(valueI1==0){
          
           l=bd/(25);}
         if(xi==xf){
           yti=d/2+bd+(i+0.5)*scale;
           ytf=yti;
           xti=xi-l;
           xtf=xi+l;
        axisImg.line(xti,yti,xtf,ytf);
             if(info==true && i%5==2){  
       l=bd/16;
       axisImg.noStroke();

        axisImg.textAlign(CENTER, CENTER);               
     axisImg.text(valueI1, xi+s(j)*l*2,yti);
       }
              yti=d/2+bd-(i+0.5)*scale;
         ytf=yti;
             if(info==true && i%5==2 && i!=0){  
     
        axisImg.textAlign(CENTER, CENTER);  
        axisImg.noStroke();
             
     axisImg.text(valueI2, xi+s(j)*l*2,yti);

       }
       axisImg.stroke(255);

             axisImg.line(xti,yti,xtf,ytf);
       }
          if(yi==yf){
            l=bd/80;
            if(i%5==0){ //Regola lunghezza
            
              l=bd/40;}
           yti=yi-l;
           ytf=yi+l;
           xti=d/2+bd+i*scale;
           xtf=xti;
   
        axisImg.line(xti,yti,xtf,ytf);
     
                  if(info==true && i%5==0){  
                    l=bd/15;

        axisImg.textAlign(CENTER, CENTER);
        axisImg.noStroke();
               
     axisImg.text(valueI1, xti,yi+s(j)*l);
     axisImg.stroke(255);

       }
          xti=d/2+bd-i*scale;
        xtf=xti;
             axisImg.line(xti,yti,xtf,ytf);
                  if(info==true && i%5==0){  
            axisImg.textAlign(CENTER, CENTER);   
            axisImg.noStroke();
            
            axisImg.text(valueI2, xti,yi+s(j)*l);
            axisImg.stroke(255);

       }
       }
     
       }
     
       
     }
     
     function s(i){
      if(int(i/2)==0){
       return (-1);
      }else{
        return(1);
      }
     }
     