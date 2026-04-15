// initiate variables
let track_name = document.querySelector(".songtitle");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// create new audio element
let curr_track = document.getElementById("music");

//
// DEFINE YOUR SONGS HERE!!!!!
// MORE THAN FOUR SONGS CAN BE ADDED!!
// JUST ADD ANOTHER BRACKET WITH NAME AND PATH
// CATBOX.MOE IS RECOMMENDED FOR UPLOADING MP3 FILES
let track_list = [
  {
    name: "drive ME crazy - lil yachty",
    path: "https://file.garden/adsn6IDutmhqKH5B/YTDown.com_YouTube_Lil-Yachty-drive-ME-crazy-extended-versi_Media_G4ttJvcpuhA_009_128k.mp3",
  },
  {
    name: "Bullies - Baby Keem ft. Kendrick Lamar",
    path: "https://file.garden/adsn6IDutmhqKH5B/Baby%20Keem%20-%20Bullies%20(ft.%20Kendrick%20Lamar).mp3",
  },
  {
    name: "popstar in da bits - young eman",
    path: "https://file.garden/adsn6IDutmhqKH5B/SpotiDown.App%20-%20popstar%20in%20da%20bits%20-%20Young%20Eman.mp3",
  },
  {
    name: "idk idk - Jim Legxacy",
    path: "https://file.garden/adsn6IDutmhqKH5B/idk%20idk%20-%20jim%20legxacy.mp3",
  }, 
  {
    name: "BOMB - ¥$",
    path: "https://file.garden/adsn6IDutmhqKH5B/SpotiDown.App%20-%20BOMB%20-%20__.mp3",
  },
  {
    name: "Westside, Right on time - Kendrick lamar",
    path: "https://file.garden/adsn6IDutmhqKH5B/westside%2C%20right%20on%20time.mp3",
  },
   {
    name: "Through the wire - Kanye West",
    path: "https://file.garden/adsn6IDutmhqKH5B/Through%20the%20wire%20-%20Kanye%20West.mp3",
  },
  { 
    name: "Acknowledge me - doja cat ft the joy",
    path: "https://file.garden/adsn6IDutmhqKH5B/SpotiDown.App%20-%20ACKNOWLEDGE%20ME%20_feat.%20The%20Joy_%20-%20Doja%20Cat.mp3",
  },
  {
    name: "DONT BE DUMB / TRIP BABY - asap rocky",
    path: "https://files.catbox.moe/dh6bsy.mp3",
  },
  {
    name: "Love you less - joji",
    path: "https://file.garden/adsn6IDutmhqKH5B/SpotiDown.App%20-%20LOVE%20YOU%20LESS%20-%20Joji.mp3",
  },
  {
    name: "sAy sOMETHINg - Lil Yachty",
    path: "https://file.garden/adsn6IDutmhqKH5B/SpotiDown.App%20-%20sAy%20sOMETHINg%20-%20Lil%20Yachty.mp3",
  },
  
  {
    name: "let me go - daniel ceasar",
    path: "https://file.garden/adsn6IDutmhqKH5B/SpotiDown.App%20-%20Let%20Me%20Go%20-%20Daniel%20Caesar.mp3",
  },
  {
    name: "MYANNA'S PERSPECTIVE - millkzy",
    path: "https://file.garden/adsn6IDutmhqKH5B/SpotiDown.App%20-%20MYANNA_S%20PERSPECTIVE%20-%20millkzy.mp3",
  },

 
  {
    name: "FEEL - Kendrick Lamar",
    path: "https://file.garden/adsn6IDutmhqKH5B/SpotiDown.App%20-%20FEEL.%20-%20Kendrick%20Lamar.mp3",
  },
  {
    name: "never see me again - Kanye West",
    path: "https://file.garden/adsn6IDutmhqKH5B/never%20see%20me%20again%20-%20kanye%20west.mp3",
  },
];
function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();

  // load a new track
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  // update details of the track
  track_name.textContent = "playing " + (track_index + 1) + " of " + track_list.length + ": " + track_list[track_index].name;

  // set an interval of 1000 milliseconds for updating the seek slider
  updateTimer = setInterval(seekUpdate, 1000);

  // move to the next track if the current one finishes playing
  curr_track.addEventListener("ended", nextTrack);
}

// reset values
function resetValues() {
  curr_time.textContent = "0:00";
  total_duration.textContent = "0:00";
  seek_slider.value = 0;
}

// checks if song is playing
function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

// plays track when play button is pressed
function playTrack() {
  curr_track.play();
  isPlaying = true;

  // replace icon with the pause icon
  playpause_btn.innerHTML = '<button class="player-button"><img src="pause.png" class="controlimg"></i></button>';
}

// pauses track when pause button is pressed
function pauseTrack() {
  curr_track.pause();
  isPlaying = false;

  // replace icon with the play icon
  playpause_btn.innerHTML = '<button class="player-button"><img src="play.png" class="controlimg"></button>';
}

// moves to the next track
function nextTrack() {
  if (track_index < track_list.length - 1) track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

// moves to the previous track
function prevTrack() {
  if (track_index > 0) track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

// seeker slider
function seekTo() {
  seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function seekUpdate() {
  let seekPosition = 0;

  // check if the current track duration is a legible number
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;

    // calculate the time left and the total duration
    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    // adding a zero to the single digit time values
    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = currentMinutes;
    }
    if (durationMinutes < 10) {
      durationMinutes = durationMinutes;
    }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

// load the first track in the tracklist
loadTrack(track_index);
