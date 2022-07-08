
let Px;
let Py;
let D;


function mousePressed(){
    bt[0].click();
 
    
         for(let i=0; i<2;i++){

            bT[i].click();
            bPS[i].click();
            if(!bCoo[i].State){
            bCoo[i].click();
            }
            }
            if(bPS[0].State){
                bTool.click();

                bRel.order(false);
                for(let i=0; i<3;i++){
                    bt[i+1].order(false);
        
                }
                if(!bCoo[2].State){
                bCoo[2].click();
                }
                buttonTriple(bCoo[0],bCoo[1],bCoo[2])
            }
            if(bPS[1].State){
                bTool.order(false);
                bRel.click();
                for(let i=0; i<3;i++){
                    bt[i+1].click();

                }
                buttonTriple(bt[3],bt[1],bt[2])
                if(bCoo[2].State){
                    bCoo[2].order(false);
                    bCoo[0].order(true);
                }
                buttonCouple(bCoo[0],bCoo[1]);
            }
            buttonCouple(bPS[0],bPS[1]);
         
         Tbar.click();
       
         if(bT[1].State){
            t=0;
            disableFutureTime()
        }
        if(bt[0].State){
            t=t0;
            disableFutureTime()
        }
        if(bT[0].State && t<frame){
            t++;
        }

        let initial=0;
        let max=3;
        if(bPS[1].State){
            initial=1;
            max=2;
        }
    
    
        for(let i=initial; i<max; i++){
                    if(overArea(ximg[i],yimg[i],wimg[i],himg[i])){
            TY=mouseY-yimg[i];
            }
        } 

}

function mouseDragged(){
    let initial=0;
    let max=3;
    if(bPS[1].State){
        initial=1;
        max=2;
    }


    for(let i=initial; i<max; i++){        if(overArea(ximg[i],yimg[i],wimg[i],himg[i])){
        TY=mouseY-yimg[i];
        }
    }
}

function overGraphic(img,x,y){
if(mouseX>x && mouseX<x+img.width && mouseY>y && mouseY<y+img.height){
    return true;
}
return false;
}
function overArea(x,y,w,h){
    if(mouseX>x && mouseX<x+w && mouseY>y && mouseY<y+h){
        return true;
    }
    return false;
    }

function disableFutureTime(){

    for(let i=0; i<3;i++){
        bt[i+1].order(false);

    }
}