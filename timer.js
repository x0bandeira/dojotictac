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

  var styles = 'body{background:black;color:white;text-align:center;font-weight:bold;font-family:Helvetica,Tahoma,Arial;}div{font-size:350px}'; 

  doc.write('<style>' + styles + '</style><button>tic-tac</button><button>pause</button><div id="timer"></div>')

  doc.getElementsByTagName('button')[0].onclick = function() {
    stop();
    play();
  };
  
  doc.getElementsByTagName('button')[1].onclick = function(e) {
    var text = 'pause';
    if (timer == null) {
      play(); 
    } else { 
      clearInterval(timer); 
      timer = null;
      text = 'play';
    }

    e.target.innerHTML = text;
  }

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

  panel.onclick = function(event) {
    clicks++;
    clearInterval(action);
    action = setInterval(tictac, 500);
  }
}
