// ==UserScript==
// @name         AlienWorld by Thanh Tran
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://play.alienworlds.io*
// @match        https://play.alienworlds.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=alienworlds.io
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
    var resultId = "tool-auto-av1.0.0";
    var timeToMine = 5 * 1000; // 10s
    var timeToReload = 12 * 60 * 60 * 1000; // 12h

    startTool();

    function startTool() {
        setTimeout(function(){
            initLog();
            play();
            setInterval(function(){
                play();
            }, timeToMine)
        },2000);
    }

    function reload() {
        setInterval(function(){
            location.reload();
        },timeToReload);
    }

    function play() {
        log('Checking click...');
        var buttons = document.getElementsByTagName('button');
        for (let i = 0; i < buttons.length; i++) {
            let button = buttons[i];
            if(button.textContent.toLowerCase().includes('start now')){
                button.click()
                log('Start Now',button)
            } else if(button.textContent.toLowerCase().includes('mine')){
                button.click()
                log('Mine',button)
            } else if(button.textContent.toLowerCase().includes('claim mine')){
                button.click()
                log('Claim mine',button)
            }
        }
    }

    // utilities
    function initLog(){
        var node = document.createElement("div");

        node.setAttribute("id", resultId);
        node.style.backgroundColor = "white";
        node.style.maxHeight = "200px";
        node.style.overflowY = "auto";
        node.style.position = "fixed";
        node.style.right = "0";
        node.style.bottom = "0";
        node.style.zIndex = "9999999";
        node.style.color = "black";
        node.style.opacity = "0.5";
        document.body.insertBefore(node, document.body.firstChild);
    }

    function log(_text) {
        console.log(_text);
        var newNode = document.createElement("div");
        var _textNode = document.createTextNode(
            new Date().toLocaleString() + ":   " + _text
        );
        newNode.appendChild(_textNode);
        var resultDiv = document.getElementById(resultId);
        resultDiv.append(newNode);
    }
    log("Alien Worlds is running... ");
})();
