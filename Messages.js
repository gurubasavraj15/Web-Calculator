(function (window, document, $, undefined) {

    'use strict';


    
    document.getElementById('equals').addEventListener('click', () => {
      function calculate() {
        var problem = document.form.textview.value;
        // const chars = problem.split('');
        var regex = /^[0-9,+,-,*,/]+$/;
        if(problem === '') {
          new window.FlashMessage.error('Please enter something!', {
            progress: false,
            timeout: 8000,
            interactive: true,
            theme: 'default',
          })
          return
        }
        if(problem.startsWith('+')||problem.startsWith('-')||problem.startsWith('*')||problem.startsWith('/')) {
          new window.FlashMessage.error('Please provide a valid Problem!', {
            progress: false,
            timeout: 8000,
            interactive: true,
            theme: 'default',
          })
          return
        }
        if(problem.endsWith('+')||problem.endsWith('-')||problem.endsWith('*')||problem.endsWith('/')) {
          new window.FlashMessage.error('Please provide a valid Problem!', {
            progress: false,
            timeout: 8000,
            interactive: true,
            theme: 'default',
          })
          return
        }
        const chars = problem.toLowerCase().split('');
        var isValid = regex.test(problem);
        if(isValid === false) {
          new window.FlashMessage.error('No Alphabets and special keys allowed!', {
            progress: false,
            timeout: 8000,
            interactive: true,
            theme: 'default',
          })
          return
        }
        var solution = eval(problem);
        document.form.textview.value = solution; 
    }

    calculate()
    })
    // OR
  
    // With a jQuery plugin
    $('document').ready(function () {
  
      $('.jq-msg').flashjs();
  
    });
  
  })(window, document, jQuery)