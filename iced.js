(function () {
  var carousel = document.getElementById('gngCarousel');
  var slidesBox = carousel.querySelector('.ig-slides');
  var slides = carousel.querySelectorAll('.ig-slide');
  var song = document.getElementById('gngSong');
  var current = 0;
  var musicStarted = false;

  function setRatio(img) {
    if (img.naturalWidth && img.naturalHeight) {
      slidesBox.style.aspectRatio = img.naturalWidth + ' / ' + img.naturalHeight;
    }
  }

  function applyRatioFor(index) {
    var img = slides[index].querySelector('img');
    if (img.complete) setRatio(img);
    else img.addEventListener('load', function () { setRatio(img); });
  }

  function goTo(index) {
    slides[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    applyRatioFor(current);
  }

  // browsers block autoplay, so the song starts on the first tap, click or swipe
  function startMusic() {
    if (musicStarted) return;
    musicStarted = true;
    song.play().catch(function () { musicStarted = false; });
  }

  // preload every image so slide changes never flash
  slides.forEach(function (s) {
    var pre = new Image();
    pre.src = s.querySelector('img').src;
  });

  applyRatioFor(0);

  carousel.querySelector('.ig-prev').addEventListener('click', function () {
    startMusic();
    goTo(current - 1);
  });
  carousel.querySelector('.ig-next').addEventListener('click', function () {
    startMusic();
    goTo(current + 1);
  });

  var startX = 0;
  carousel.addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX;
  }, { passive: true });
  carousel.addEventListener('touchend', function (e) {
    var diff = e.changedTouches[0].clientX - startX;
    if (Math.abs(diff) > 50) {
      startMusic();
      goTo(diff > 0 ? current - 1 : current + 1);
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { startMusic(); goTo(current - 1); }
    if (e.key === 'ArrowRight') { startMusic(); goTo(current + 1); }
  });
})();
