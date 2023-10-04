document.addEventListener('DOMContentLoaded', function() {
    var emailButton = document.getElementById('emailButton');
    let emailInput = document.getElementById('emailInput')
    let currentEmail = document.getElementById('currentEmail')
    currentEmail.innerHTML += localStorage.getItem('vnsEmail');
  
    // testButton.addEventListener('click', function() {
    //   chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    //     chrome.tabs.sendMessage(tabs[0].id, { action: 'test' });
    //   });
    // });
    console.log(chrome.tabs)

    emailButton.addEventListener('click', function(){
      let emailText = emailInput.value;
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            console.log(tabs)
            chrome.tabs.sendMessage(tabs[0].id, { action: 'setEmail', email: emailText });
          });
    });
  
  });