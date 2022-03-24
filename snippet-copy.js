/**
This file contains the code snippet needed to be coded on the Developer Console
**/

/**
 Disables CSP from page
**/

function dynamicallyInsertCSP() {
        let metaElement = document.createElement("meta");
        metaElement.setAttribute("content", "default-src 'self' 'unsafe-inline';")
        metaElement.setAttribute("http-equiv", "Content-Security-Policy");
        document.head.appendChild(metaElement);
};

 function initFreshChat() {
        window.fcWidget.init({
          token: "1f4d45e7-8818-4338-99f8-810c500120ed",
          host: "https://wchat.freshchat.com"
        });
      }

function initialize(i,t){
  var e;i.getElementById(t)?initFreshChat():((e=i.createElement("script")).id=t,e.async=!0,e.src="https://wchat.freshchat.com/js/widget.js",e.onload=initFreshChat,i.head.appendChild(e))}function initiateCall(){initialize(document,"Freshdesk Messaging-js-sdk")}window.addEventListener?window.addEventListener("load",initiateCall,!1):window.attachEvent("load",initiateCall,!1);
