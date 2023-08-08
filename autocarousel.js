let slideIndex = 0;
showSlides();

function showSlides() {
    let ct;
    let dots = document.getElementsByClassName("dt");
    let profiles = document.getElementsByClassName("aboutCarosel");
    for (ct = 0; ct < dots.length; ct++) {
      dots[ct].src = "selected.svg";
      profiles[ct].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > dots.length) {
      slideIndex = 1
    }
    dots[slideIndex - 1].src = "unselected.svg";
    profiles[slideIndex - 1].style.display = "flex";
    setTimeout(showSlides, 5000);
  }