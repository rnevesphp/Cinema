var mG
var d

var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var miasiento = urlParams.get('user_numero');

// localStorage.setItem('user_numero', _numAs);

/*
d = new clsDebug();
d.log("que tal");
d.openurl("https://www.w3schools.com");
*/

window.onload = function () {
   if (document.readyState == "complete") {
      mG = new cls1Cinema_();
      //alert(miasiento);
   }
}