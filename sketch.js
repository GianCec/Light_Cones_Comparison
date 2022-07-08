var t;
var frame;
var t0;
var scaleT;
var scaleR;


let table=[];// Data
let tableC=[];// Data
let tabEH=[];
let tabPH=[];
let tab50=[];
let tab100=[];
let tab200=[];
var formulas0=[];
var formulas1=[];

let TY;


let go=true;



function preload(){

  for(let i=0; i<484;i++){
    table[i]=new p5.Table();
    table[i] = loadTable('assets/Data ('+i+').csv', 'csv');

    tableC[i]=new p5.Table();
    tableC[i] = loadTable('assets/DataC ('+i+').csv', 'csv');
    }

    for(let i=0; i<2;i++){
      tabEH[i]=new p5.Table();
      tabEH[i] = loadTable('assets/EH ('+i+').csv', 'csv');

      tabPH[i]=new p5.Table();
      tabPH[i] = loadTable('assets/PH ('+i+').csv', 'csv');

      tab50[i]=new p5.Table();
      tab50[i] = loadTable('assets/LC_('+i+')(0).csv', 'csv');

      tab100[i]=new p5.Table();
      tab100[i] = loadTable('assets/LC_('+i+')(1).csv', 'csv');

      tab200[i]=new p5.Table();
      tab200[i] = loadTable('assets/LC_('+i+')(2).csv', 'csv');
      formulas1[i]=loadImage('assets/F['+i+'][1].png');


    }

    for(let j=0; j<3;j++){

      formulas0[j]=loadImage('assets/F['+j+'][0].png');
      
    }
   }

function setup() {
  createCanvas(windowWidth, windowHeight-1);

  imagePosition();
  initializeFields();

  imgSetup();

  commandSetup();
  axisSetup();
  infoLoad();

}

function draw() {
  background(0);
  commandDraw();
  imgDraw();
  if(bTool.State){
  timeLine();
  MTool();
  }
  if(bRel.State){
 
    timeLine();
  }
}

function initializeFields() {
  t = 0;
  t0=267;
  frame = 483;
  scaleT = himg[0]/25;
  scaleR = scaleT;
  TY=120;
 
 ColEH=color(65,234,212,100);
 ColPH=color(255,191,0,100);

 ColPast=color(65,234,212,100);
 ColPast2=color(71,0,99);

 ColFuture=color(255,191,0,100);
 ColFuture2=color(204,88,3);

}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    t--;
  } else if (keyCode === RIGHT_ARROW) {
    t++;
  }else if (keyCode === 32) {
   print(t);
   go=!go;
  }
}