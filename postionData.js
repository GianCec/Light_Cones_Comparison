let ximg=[];
let wimg=[];
let yimg=[];
let himg=[];

let xAxis=[];
let yAxis=[];

let xForm, yForm, wForm, hForm;
let border;


function imagePosition(){


    wimg[0]=width*0.62;
    //ximg[0]=(width-wimg[0])/2; //center
    ximg[0]=width-wimg[0]-width/40;

    yimg[0]=width*0.005;
    let dimg=width*0.005;
    himg[0]=height/3-2.8*dimg;
  
    ximg[1]=ximg[0];
    yimg[1]=height/3+dimg;
    wimg[1]=wimg[0];
    himg[1]=himg[0];

    ximg[2]=ximg[0];
    yimg[2]=height*2/3+dimg;
    wimg[2]=wimg[0];
    himg[2]=himg[0];

    border=width/10;

    for(let i=0; i<3; i++){
        xAxis[i]=ximg[i]-border;
        yAxis[i]=yimg[i]-border;

    }

    xForm=ximg[0]*0.48;
    yForm=yimg[1]+himg[0]/4;
    wForm=ximg[0]*0.45;
    hForm=wForm*3/2;
    }