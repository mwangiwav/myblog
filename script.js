//==[ 1. BASIC INFO ]==
let blogName = "mwangi's blog";
let authorName = "mwangi";
let authorLink = ""; // your link

//==[ 2. GENERATING THE HTML SECTIONS TO BE INSERTED ]==
// relative path (if needed)
let url = window.location.pathname;
let relativePath = ".";

// Generate Header HTML (simple)
let headerHTML = '<ul><li><a href="' + relativePath + '/home.html">home</a></li><li><a href="' + relativePath + '/archive.html">archive</a></li></ul>';

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
//==[ 3. DAY SCORE ]==
let scoreStartDate = "2026-07-15"; // set this once, to whatever day you want day 1 to be

function getDayScore(dateStr) {
  let start = new Date(dateStr);
  let now = new Date();
  start.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);
  let diffDays = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  return diffDays + 1; // the set date itself counts as day 1
}

if (document.getElementById("dayScore")) {
  let days = getDayScore(scoreStartDate);
  document.getElementById("dayScore").innerHTML = "(" + days + (days === 1 ? " day" : " days") + ")";
}
