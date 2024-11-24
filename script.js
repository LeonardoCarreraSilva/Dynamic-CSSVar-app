console.log(document.styleSheets[0]);
var declaration = document.styleSheets[0].cssRules[0].style;
var propvalue = declaration.getPropertyValue("color");

