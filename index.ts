// ==UserScript==
// @name         Alien world auto
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include        https://play.alienworlds.io
// @icon         https://www.google.com/s2/favicons?domain=alienworlds.io
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var delay5Second = 0;

    var resultId = "tool-auto-v125";
    var node = document.createElement("div");
    node.setAttribute("id", resultId);
    node.style.backgroundColor = "white";
    node.style.maxHeight = "200px";
    node.style.overflowY = "auto";
    document.body.insertBefore(node, document.body.firstChild);

     function log(_text) {
         console.log(_text);
         // var newNode = document.createElement("div");
          // var _textNode = document.createTextNode(
          //     new Date().toLocaleString() + ":   " + _text
          // );
         //  newNode.appendChild(_textNode);
          // var resultDiv = document.getElementById(resultId);
          // resultDiv.append(newNode);
     }

    function checkForClick() {
        var btns = document.getElementsByClassName('css-rrm59m');

        for(var x=0; x < btns.length; x++)
        {
            if(btns[x].textContent.includes('Claim Mine')) {
                log('Claim Mine Clicked');
                btns[x].click();
                delay5Second = 10;
                break;
            } else if(btns[x].textContent.includes('Mine')) {
                log('Mine Clicked');
                btns[x].click();
                break;
            }
        }
    }

    setInterval(function(){
        if(delay5Second < 1) {
            log('checkForClick' + delay5Second);
            checkForClick();
        } else {
            log('Delay second - 1 : ' + delay5Second);
            delay5Second = delay5Second -1;
        }
    },5000)



    // Your code here...
})();
