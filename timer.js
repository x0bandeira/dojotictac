function timer() {
  var doc = document,
      panel, timer, seccounter = 0, 
      mins, secs, color, text
      duration = 5;

  function update() {
    seccounter++;
    mins = Math.floor(seccounter / 60);
    secs = mins == 0? seccounter: seccounter - (mins * 60);    
    text = '0' + mins + ':' + (secs < 10 ? '0' + secs : secs);
    
    color = 'white';
    if (mins > 3)
      if (secs > 50) color = 'red';
      else if (secs > 30) color = 'yellow'; 
    panel.style.cssText = 'color:' + color;

    if (mins == duration) { stop(); text = 'CHANGE!'; }
    panel.innerHTML = text;
  }

  function stop() { 
    seccounter = 0;
    clearInterval(timer);
  }

  function play() {
    timer = setInterval(update, 1000);
  }

  var styles = 'body{background:black;color:white;text-align:center;font-weight:bold;font-family:Helvetica,Tahoma,Arial;height:' + window.innerHeight + 'px;}div{font-size:350px;}'; 

  doc.write('<style>' + styles + '</style><div id="timer"></div>')

  var action, clicks = 0;
  
  function tictac() {
    if (clicks == 2) { 
      stop(); 
      play(); 
    } else {
      if (timer != null) {
        clearInterval(timer);
        timer = null;
      } else {
        play();
      }
    }
    clearInterval(action);
    clicks = 0;
  }
  
  panel = doc.getElementById('timer');

  doc.body.onclick = function(event) {
    clicks++;
    clearInterval(action);
    action = setInterval(tictac, 500);
  }
}
