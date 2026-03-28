//==[ 1. BASIC INFO ]==
let blogName = "mwangi's blog";
let authorName = "mwangi";
let authorLink = ""; // your link

//==[ 3. GENERATING THE HTML SECTIONS TO BE INSERTED ]==
// relative path (if needed)
let url = window.location.pathname;
let relativePath = ".";

// Generate Header HTML (simple)
let headerHTML = '<ul><li><a href="' + relativePath + '/home.html">home</a></li></ul>';

// Generate Footer HTML (keep your 2026 rights reserved)
let footerHTML = "<div><img src='neko.gif' style='margin-top:20px;'/><p>© 2026 mwangi, all rights reserved</p></div>";

// Insert header & footer if divs exist
if (document.getElementById("header")) {
  document.getElementById("header").innerHTML = headerHTML;
}
if (document.getElementById("header2")) {
  document.getElementById("header2").innerHTML = headerHTML;
}
if (document.getElementById("footer")) {
  document.getElementById("footer").innerHTML = footerHTML;
}
if (document.getElementById("footer2")) {
  document.getElementById("footer2").innerHTML = footerHTML;
}
