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
let githubRepo = "mwangiwav/myblog"; 

fetch("https://api.github.com/repos/" + githubRepo + "/commits?per_page=1")
  .then(function (res) { return res.json(); })
  .then(function (data) {
    let lastCommitDate = new Date(data[0].commit.committer.date);
    let now = new Date();
    lastCommitDate.setHours(0, 0, 0, 0);
    now.setHours(0, 0, 0, 0);
    let diffDays = Math.floor((now - lastCommitDate) / (1000 * 60 * 60 * 24));

    let text;
    if (diffDays <= 0) text = "(updated today)";
    else if (diffDays === 1) text = "(updated 1 day ago)";
    else text = "(updated " + diffDays + " days ago)";

    if (document.getElementById("dayScore")) {
      document.getElementById("dayScore").innerHTML = text;
    }
  })
  .catch(function (err) {
    console.error("Couldn't fetch last commit:", err);
  });
