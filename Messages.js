(function (window, document, $, undefined) {

    'use strict';


    
    document.getElementById('equals').addEventListener('click', () => {
      function calculate() {
        var problem = document.form.textview.value;
        // const chars = problem.split('');
        var regex = /^(?:\d+[+\-*\/]?)+$/;
        if(problem === '') {
          new window.FlashMessage.error('Please enter something!', {
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
        var solution = eval(problem);
        document.form.textview.value = solution; 
    }

    calculate()
    })

    document.getElementById('cle').addEventListener('click', () => {
      document.form.textview.value = ''
      new window.FlashMessage.success('Cleared!', {
        progress: false,
        timeout: 8000,
        interactive: true,
        theme:'default'
      })
    })
    // OR
    function insert(key){
      document.form.textview.value += key
    }
    // With a jQuery plugin
    $('document').ready(function () {
  
      $('.jq-msg').flashjs();
  
    });
  
  })(window, document, jQuery)

  function insert(key){
    document.form.textview.value += key
  }