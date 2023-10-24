let miliseconds = 0;
  let seconds = 0;
  let minutes = 0;
  let hour = 0;
  let formattedms = miliseconds.toString().padEnd(2, '0');
  let formattedss = seconds.toString().padEnd(2, '0');
  let formattedmm = minutes.toString().padEnd(2, '0');
  let formattedhh = hour.toString().padEnd(2, '0');


    const buttonElement = document.querySelector('.js-timer-button')
    buttonElement.addEventListener('click', () => {
      if(buttonElement.innerText === 'Start') {
        timer();
        buttonElement.innerHTML ='Pause';
      }
      
      else if(buttonElement.innerText === 'Pause') {
        clearInterval(intervalId);
        buttonElement.innerHTML = 'Start'
      }
    });
    
    let intervalId;
    function timer() {
      intervalId = setInterval(() => {
        if (formattedms < 60) {
        formattedms++;
        document.querySelector('.js-timer').innerHTML = 
        `${formattedhh}:${formattedmm}:${formattedss}: ${formattedms}`;  
        }
       else if (formattedms === 60) {
        formattedms = 0;
        formattedss++;
       }

       if(formattedss === 60) {
        formattedss = 0;
        formattedmm++;
       }

       if(formattedmm === 60) {
        formattedmm = 0;
        formattedhh++;
       }
    
    }, 20)
    }; 


    document.querySelector('.js-reset-button')
    .addEventListener('click', () => {
      clearInterval(intervalId);
  formattedms = miliseconds.toString().padEnd(2, '0');
   formattedss = seconds.toString().padEnd(2, '0');
   formattedmm = minutes.toString().padEnd(2, '0');
   formattedhh = hour.toString().padEnd(2, '0');

      document.querySelector('.js-timer')
      .innerHTML = '00:00:00:00'
    });


    function realDate () {
      setInterval(() => {
      let d = new Date()
      let h = d.getHours();
      let m = d.getMinutes();
      let s = d.getSeconds();
      let ms = d.getMilliseconds();
      document.querySelector('.js-realtime')
      .innerText = d;
    },);  
    }

realDate();
    
       