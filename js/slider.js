function initStripSlider() {

  const track = document.querySelector(".strip-track");
  const viewport = document.querySelector(".strip-viewport");

  if (!track || !viewport) {
    console.log("Slider not found");
    return;
  }

  const slides = Array.from(track.children);
  const slideWidth = slides[0].offsetWidth;
  const count = slides.length;

  /* CLONE SLIDES */
  slides.forEach(slide => {
    track.appendChild(slide.cloneNode(true));
    track.insertBefore(slide.cloneNode(true), track.firstChild);
  });

  let index = count;

  /* INITIAL POSITION */
  track.style.transition = "none";
  track.style.transform = `translateX(-${index * slideWidth}px)`;

  function move() {
    track.style.transition = "transform 0.8s ease";
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  function jump() {
    track.style.transition = "none";
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  /* AUTOPLAY — EVERY 6 SECONDS */
  setInterval(() => {
    index++;
    move();

    if (index === count * 2) {
      setTimeout(() => {
        index = count;
        jump();
      }, 800);
    }
  }, 2000);
}
