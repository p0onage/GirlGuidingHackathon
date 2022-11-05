// ==UserScript==
// @name         Parbold GirlGuide
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Joshua Duxbury
// @match        https://www.girlguiding.org.uk/information-for-parents/register-your-daughter/?gclid=CjwKCAjw8JKbBhBYEiwAs3sxN_-sdEUjGFZ1AWNToTOcUUJCdDq29kYoP3O2BAY6xAI0KEurg4ix-hoCZK8QAvD_BwE
// @icon         https://www.google.com/s2/favicons?sz=64&domain=girlguiding.org.uk
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var paragraph = document.getElementsByClassName("pageIntro")[0];
    var text = document.createTextNode(" but just so everyone knows, the parbold girl guiding district is the best! <3");
    paragraph.appendChild(text);
    // Your code here...
})();