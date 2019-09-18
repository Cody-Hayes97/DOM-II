// Your code goes here
const mapImg = document.querySelectorAll(".img-content");
const Btn = document.querySelectorAll(".btn");
const Text = document.querySelector("body");
const navigation = document.querySelectorAll(".nav-link");
const navWhole = document.querySelector(".main-navigation");
const paragraphs = document.querySelectorAll("p");
const topImg = document.querySelector(".top-img");
let scale = 1;
const headers = document.querySelectorAll("h2");

//first event
mapImg.forEach(image => {
  image.addEventListener("mouseover", event => {
    image.style.transform = "scale(1.1)";
    image.style.transition = "transform 0.5s";
    image.style.cursor = "pointer";
  });
  //second event
  image.addEventListener("mouseout", event => {
    image.style.transform = "scale(1.0)";
    image.style.transition = "transform 0.5s";
  });
});

//third event
Btn.forEach(button => {
  button.addEventListener("click", event => {
    //stretch goal
    TweenMax.to(Btn, 1, {
      rotation: 360,
      scale: 1.1,
      backgroundColor: "pink"
    });
  });
});

//fourth event
Text.addEventListener("keydown", checkKey, false);

function checkKey(key) {
  if (key.keyCode == "65") {
    event.target.style.color = "red";
  }
}

//fifth event
Text.addEventListener("keyup", checkKeyUp, false);

function checkKeyUp(key) {
  if (key.keyCode == "65") {
    event.target.style.color = "black";
  }
}

//sixth event
window.addEventListener("load", event => {
  console.log("press and hold a to change font color");
});

//seventh event
navigation.forEach(item => {
  item.addEventListener("dblclick", event => {
    item.style.fontSize = "2rem";
    item.style.transition = "color, font-size 0.5s";
    item.style.color = "blue";
    stopPropagation();
  });
  item.addEventListener("mouseout", event => {
    item.style.fontSize = "1.6rem";
    item.style.transition = "color, font-size 0.5s";
    item.style.color = "black";
    stopPropagation();
  });
});

//eighth event
document.addEventListener("scroll", event => {
  navWhole.style.backgroundColor = "magenta";
  stopPropagation();
  preventDefault();
});

//ninth event

topImg.addEventListener("wheel", zoom);

function zoom(event) {
  event.preventDefault();
  scale += event.deltaY * -0.003;
  scale = Math.min(Math.max(0.125, scale), 4);
  topImg.style.transform = `scale(${scale})`;
  topImg.style.transition = "transform 0.3s";
}

//tenth event
headers.forEach(head => {
  head.addEventListener("copy", event => {
    head.style.opacity = "0.5";
  });
});

//stretch goal
window.onload = function() {
  var timeline = new TimelineMax();
  timeline
    .from(".logo-heading", 1, { x: -100 }, 0)
    .from(".nav", 1, { y: -100 }, 0)
    .from(".top-img", 2, { opacity: 0 })
    .to(1, { x: 100, autoAlpha: 0 });
};
