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
let lastUpdatedDate = "2026-07-15"; // change this every time you update the blog

function getLastUpdatedText(dateStr) {
  let updated = new Date(dateStr);
  let now = new Date();
  updated.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);
  let diffDays = Math.floor((now - updated) / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) return "(updated today)";
  if (diffDays === 1) return "(updated 1 day ago)";
  return "(updated " + diffDays + " days ago)";
}

if (document.getElementById("dayScore")) {
  document.getElementById("dayScore").innerHTML = getLastUpdatedText(lastUpdatedDate);
}
