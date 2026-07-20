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

//==[ 3. UPDATING SCORE ]==
(function () {
  let githubRepo = "mwangiwav/myblog";
  let cacheKey = "dayScoreCache";
  let cacheHours = 6; // how often to actually re-hit the API
  let cacheMs = cacheHours * 60 * 60 * 1000;

  function renderText(lastCommitDateStr) {
    let lastCommitDate = new Date(lastCommitDateStr);
    let now = new Date();
    lastCommitDate.setHours(0, 0, 0, 0);
    now.setHours(0, 0, 0, 0);
    let diffDays = Math.floor((now - lastCommitDate) / (1000 * 60 * 60 * 24));
    let text;
    if (diffDays <= 0) text = "(last updated today)";
    else if (diffDays === 1) text = "(last updated 1 day ago)";
    else text = "(last updated " + diffDays + " days ago)";
    if (document.getElementById("dayScore")) {
      document.getElementById("dayScore").innerHTML = text;
    }
  }

  function fetchAndCache() {
    fetch("https://api.github.com/repos/" + githubRepo + "/commits?per_page=1")
      .then(function (res) {
        if (!res.ok) throw new Error("GitHub API error: " + res.status);
        return res.json();
      })
      .then(function (data) {
        let commitDate = data[0].commit.committer.date;
        localStorage.setItem(cacheKey, JSON.stringify({
          date: commitDate,
          fetchedAt: Date.now()
        }));
        renderText(commitDate);
      })
      .catch(function (err) {
        console.error("Couldn't fetch last commit:", err);
        // fall back to whatever's cached, even if stale, rather than showing nothing
        let cached = localStorage.getItem(cacheKey);
        if (cached) {
          renderText(JSON.parse(cached).date);
        }
      });
  }

  let cachedRaw = localStorage.getItem(cacheKey);
  if (cachedRaw) {
    let cached = JSON.parse(cachedRaw);
    let age = Date.now() - cached.fetchedAt;
    renderText(cached.date); // show cached value immediately, no flash of blank text
    if (age > cacheMs) {
      fetchAndCache(); // stale, refresh in background
    }
  } else {
    fetchAndCache(); // nothing cached yet, fetch now
  }
})();
