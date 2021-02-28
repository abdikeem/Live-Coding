/******************************************
*                                         *
*    Made by: @Maz © 2017                 *
*                                         *
*    Title: Live Coding - Heart           *
*                                         *
*    Extra Credits: Kirk Schafer          *
*                                         *
******************************************/

// Sources:
// StackOverflow,
// Google Font
// jQuery

$(document).ready(function(){
    
    var textarea = $("textarea")[0];
    var iframe  = $("iframe")[0];
    
    var statements = "<!--\n\nAuthor : Maz\nTitle  : Live Coding - Heart\n\n-->\n\n<!DOCTYPE html>\n<html>\n<head>\n<title> Heart </title>\n<!-- Font Awesome CDN -->\n<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'>\n<head>\n<body>\n<div>\n<!-- Heart Icon -->\n<i class = 'fa fa-heart'></i>\n</div>\n<style>\nbody, html {\n  width: 100%; \n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\nbody {\n  display: table; \n}\ndiv {\n  display: table-cell;\n  vertical-align: middle;\n}\n.fa-heart {\n  display: block;\n  font-size: 10em;\n  text-align: center;\n  color: #ff5577;\n  -webkit-animation: heart 0.9s linear infinite;\n  animation: heart 0.9s linear infinite;\n  max-width: 300px;\n  margin: 0 auto;\n}\n@-webkit-keyframes heart {\n  0% { -webkit-transform: scale(1,1); }\n  50% { -webkit-transform: scale(1.3,1.3); }\n  100% { -webkit-transform: scale(1,1); }\n}\n@keyframes heart {\n  0% { transform: scale(1,1); }\n  50% { transform: scale(1.3,1.3); }\n  100% { transform: scale(1,1); }\n}\n</style>\n</body>\n</html>";
    
    var counter = 0;

    setInterval(function(){
        textarea.innerHTML += 
        statements.charAt( counter );
        counter++;
    }, 80)

    // iFrame content
    iframe = iframe.contentWindow || (
    iframe.contentDocument.document || 
    iframe.contentDocument);
    setInterval(function(){
        iframe.document.open();
        iframe.document.write(textarea.value);
        iframe.document.close();
        
    },900)
    
// Scroll down effect
var x = setInterval(function(){   $("textarea").scrollTop($("textarea")[0].scrollHeight)},0);setTimeout(function(){clearInterval(x)},70000)

})

