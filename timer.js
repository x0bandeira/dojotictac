function timer() {
  var doc = document,
      panel, timer, seccounter = 0, 
      mins, secs, color, text
      duration = 5;


  var screenSize = (document.body.clientHeigth<document.body.clientWidth?document.body.clientHeigth:document.body.clientWidth) * 0.7;
  var styles = 'body{background:black;color:white;text-align:center;font-weight:bold;font-family:Helvetica,Tahoma,Arial;height:' + 
       screenSize * 0.7 + 'px;}div{font-size:' + screenSize * 0.55 + 'px;}'; 
  doc.write('<style>' + styles + '</style><div id="timer">00:00</div>' + 
      '<audio src="sound.wav" id="audio" ></audio>');
  panel = doc.getElementById('timer');

  function update() {
    seccounter++;
    mins = Math.floor(seccounter / 60);
    secs = mins == 0? seccounter: seccounter - (mins * 60);    
    text = (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' + secs : secs);
    
    color = (mins > duration * 0.9) ? 'red' : (mins > duration * 0.8 ? 'yellow' : 'white');
    panel.style.cssText = 'color:' + color;

    if (mins == duration) { panel.innerHTML = 'END!'; playSound(); stop();}
    panel.innerHTML = text;
  } 

  function stop() { 
    seccounter = 0;
    clearInterval(timer); 
    timer = null;
  }

  function play() {
    timer = setInterval(update, 1000);
  }

  function pause(){
     if(timer==null) 
       play();
     else{
       clearInterval(timer);
       timer = null;
     }
  }

  var action, clicks = 0;
  
  function tictac() {
    if (clicks == 2) { 
      stop(); 
      play(); 
    } else 
      pause();

    clearInterval(action);
    clicks = 0;
  }

  doc.body.onclick = function(event) {
    clicks++;
    clearInterval(action);
    action = setInterval(tictac, 500);
  }

  function playSound(){
    doc.getElementById("audio").play();  		 
  }

  function loadDuration(){
    var regex = /\d{1,2}/;
    var text = '';
    while(!regex.test(text))
      text = prompt('Duration ?');

    duration = text;
  }
  loadDuration();

}
