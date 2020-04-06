//TypeWriter Effect

let i = 0;
const txt = "GIRLSCRIPT CHENNAI";
const speed = 80;

const typeWriter = () => {
  if (i < txt.length) {
    document.getElementById("typer").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};

// Code for carousel/slider : Manual

let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

const reset = () => {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
};

const startSlide = () => {
  reset();
  sliderImages[0].style.display = "block";
};

const slideLeft = () => {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
};

const slideRight = () => {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
};

arrowLeft.addEventListener("click", () => {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

arrowRight.addEventListener("click", () => {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

//Code for Caurosel/Slider :Automatic

document.addEventListener("DOMContentLoaded", () => {
  if (current === sliderImages.length - 1) {
    current = -1;
  }

  setInterval(() => {
    if (current === sliderImages.length - 1) {
      current = -1;
    }
    slideRight();
  }, 4000);
});
