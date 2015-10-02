var mic;
var micLevel;

function setup(){
  mic = new p5.AudioIn()
  mic.start();
}

function draw(){
  micLevel = mic.getLevel();
}