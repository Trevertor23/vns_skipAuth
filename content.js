// document.body.innerHTML += "<script type='module'>import DOMPurify fr\nom 'dompurify';\n" +
// "if (window.trustedTypes && window.trustedTypes.createPolicy) {\n" + 
//     "window.trustedTypes.createPolicy('default', {\n" + 
//         "createHTML: (string) => DOMPurify.sanitize(string, {RETURN_TRUSTED_TYPE: true}),\n"+
//         "createScriptURL: string => string, \n"+
//         "createScript: string => string\n"+
//     "});\n"+
// "}\nconsole.log('loghfgb')</script>"

//import DOMPurify from 'dompurify';      
//  if (window.trustedTypes && window.trustedTypes.createPolicy) {     
//      window.trustedTypes.createPolicy('default', {     
//          createHTML: (string) => DOMPurify.sanitize(string, {RETURN_TRUSTED_TYPE: true}),   
//          createScriptURL: string => string,    
//          createScript: string => string   
//      });   
//  }


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'setEmail') {
    console.log(request)
    localStorage.setItem('vnsEmail', request.email);
  }
});

if(window.location.href.match("https:\/\/vns\.lpnu\.ua\/login\/") != null) {
  let googleButton = document.getElementsByClassName("login-identityprovider-btn")[0]
  console.log(googleButton)
  if(googleButton != null) {
    let authLink = googleButton.href
    window.location.replace(authLink)
  }
}
else if(window.location.href.match("https:\/\/accounts\.google\.com\/o\/oauth2\/v2\/auth\/") != null){
  let email = localStorage.getItem('vnsEmail')
  if (email.length > 0){
    let accountButton = document.querySelectorAll(`div[data-identifier='${email}']`)[0]
    accountButton.style.outline = "auto"
  }
  // let authLink = window.location.href

  // //console.log(accountButton)
  // console.log(accountButton)
  // accountButton.click()
  // console.log("cliiiick")

  // let liButton = document.querySelectorAll(`div.w1I7fb`)[0]
  // console.log(liButton)
  // liButton.click()
  // // setTimeout(() => {liButton.click()
  // //   console.log("again")}, 3000)
  
}
