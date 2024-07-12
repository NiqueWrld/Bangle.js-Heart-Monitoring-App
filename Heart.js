Bangle.setHRMPower(1);
Bangle.on('HRM',function(hrm) {
  g.clear();
  
  if(hrm.bpm > 0){
  console.log("BPM: " + hrm.bpm);
  }
  
  if(hrm.bpm > 100){
  Bangle.buzz();
  }
  
  g.drawString("BPM: " + hrm.bpm, g.getWidth()/2, g.getHeight()/2);
  g.setFontAlign(0,0); // center font
g.setFont("6x8",2); 
  Bangle.setLCDPower(1);
});