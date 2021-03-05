//   ".alkalimetal",
//   ".alkalineearthmetal",
//   ".lanthanide",
//   ".actinide",
//   ".transitionmetal",
//   ".posttransitionmetal",
//   ".metalloid",
//   ".reactivenonmetal",
//   ".noblegas",
//   ".unknown",

const randomColorGenerator = () => {
  const allElements = [
    ".alkalimetal",
    ".alkalineearthmetal",
    ".lanthanide",
    ".actinide",
    ".transitionmetal",
    ".posttransitionmetal",
    ".metalloid",
    ".reactivenonmetal",
    ".noblegas",
    ".unknown",
  ];
  allElements.map((el) => {
    let c1 = Math.floor(Math.random() * 255);
    let c2 = Math.floor(Math.random() * 255);
    let c3 = Math.floor(Math.random() * 255);
    $(el).css("background-color", `rgb(${c1},${c2},${c3},0.5)`);
  });
};

$(document).ready(function () {
  console.log("object");
  randomColorGenerator();
});
