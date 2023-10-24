
function timeToString (time) {
    let diffHrs = time/ 3600000
    let hh = Math.floor(diffHrs);
    
    let diffMin = (diffHrs - hh) * 60;
    
    let mm = Math.floor(diffMin);
    
    let diffSec = (diffMin - mm) * 60;
    let ss = Math.floor(diffSec);
    
    let diffMs = (diffSec - ss) * 100;
    let ms = Math.floor(diffMs);
    
    
    let formattedMM = mm.toString().padStart(2, '0');
    let formattedSS = ss.toString().padStart(2, '0');
    let formattedMS = ms.toString().padStart(2, '0');
    return`${formattedMM}:${formattedSS}:${formattedMS}`;
    
    }
    
    
    const button1 = document.querySelector('.js-start-button')
    const button2 = document.querySelector('.js-pause-button')
    const button3 = document.querySelector('.js-reset-button')
    
    
    let timerInterval;
    button1.addEventListener('click', () => {
      start();
    });
    button2.addEventListener('click', () => {
      pause();
    });
    button3.addEventListener('click', reset);
    
    function print(txt) {
    document.getElementById('display').innerHTML = txt
    } 
    
    function showButton(buttonKey) {
      const buttonToShow = buttonKey === 'START' ? button1 : button2;
       const buttonToHide = buttonKey === 'START' ? button2 : button1;
       buttonToShow.style.display = 'block';
       buttonToHide.style.display = 'none';
    }
    
    
    function start () {
      let startTime;
      let elapsedTime = 0;
    
      startTime = Date.now() - elapsedTime;
      timerInterval = setInterval(function printTime() {
       elapsedTime = Date.now() - startTime;
     print(timeToString(elapsedTime));
     showButton('PAUSE');
    }, 10)
    }
    function pause() {
      clearInterval(timerInterval);
      showButton('START');
    }
    
    function reset () {
      clearInterval(timerInterval);
      print('00:00:00');
      elapsedTime = 0;
      showButton('START');
    }
    
    function printingTime() {
        var date = new Date();
      var hour = date.getHours();
      var minute = date.getMinutes();
      var seconds = date.getSeconds();
       var miliSeconds = date.getMilliseconds();
    
       let formattedss = seconds.toString().padStart(2, '0')
       document.querySelector('.js-time')
     .innerHTML = `${hour}:${minute}:${formattedss}`
    return `${hour}:${minute}:${formattedss}`
    } 
    
     setInterval(() => {
     console.log (printingTime());
     }, 1000);
    
    