var mG
var d

var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var miasiento = urlParams.get('user_numero');

// localStorage.setItem('user_numero', _numAs);

window.onload = function () {
   if (document.readyState == "complete") {
      mG = new clsCinemaCompany();
      //alert(miasiento);
   }
}