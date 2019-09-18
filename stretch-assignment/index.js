const blocks = document.querySelectorAll(".blocks");
const redBlock = document.querySelector(".block--red");
const blueBlock = document.querySelector(".block--blue");
const greenBlock = document.querySelector(".block--green");
const pinkBlock = document.querySelector(".block--pink");
const grayBlock = document.querySelector(".block--gray");

blueBlock.addEventListener("click", e => {
  blocks.forEach(block => {
    block.prepend(blueBlock);
  });
});

greenBlock.addEventListener("click", e => {
  blocks.forEach(block => {
    block.prepend(greenBlock);
  });
});

// redBlock.addEventListener("click", e => {
//   blocks.forEach(block => {
//     block.prepend(redBlock);
//   });
// });

pinkBlock.addEventListener("click", e => {
  blocks.forEach(block => {
    block.prepend(pinkBlock);
  });
});

grayBlock.addEventListener("click", e => {
  blocks.forEach(block => {
    block.prepend(grayBlock);
  });
});

redBlock.addEventListener("mousedown", e => {
  TweenMax.to(redBlock, 1, { x: 1000 });
});
redBlock.addEventListener("mouseup", e => {
  TweenMax.to(redBlock, 1, { x: -1000 });
});
