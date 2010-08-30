function timer() {
  var doc = document,
      panel, timer, seccounter = 0, 
      mins, secs, color, text
      duration = 5;

  doc.write('<style>body{background:black;color:white;text-align:center;font-weight:bold;font-family:Helvetica,Tahoma,Arial;}div{font-size:350px}</style><button>tic-tac</button><div id="timer"></div>');

  function tictac() {
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
  doc.getElementsByTagName('button')[0].onclick = function() {
    stop();
    timer = setInterval(tictac, 1000);
  };
 
  panel = doc.getElementById('timer');
}
