const doctorCarousel = document.getElementById("doctorsCarousel");

doctorCarousel.addEventListener("slide.bs.carousel", ({ relatedTarget }) => {
  let slides = doctorCarousel.querySelectorAll(".carousel-item");
  let prevSibling = relatedTarget.previousElementSibling || slides[slides.length - 1];
  let nextSibling = relatedTarget.nextElementSibling || slides[0];

  slides.forEach((slide) => {
    slide.classList.remove("carousel-item-prev", "carousel-item-next");
  });

  prevSibling.classList.add("carousel-item-prev");
  nextSibling.classList.add("carousel-item-next");
});
