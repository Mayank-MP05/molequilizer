let quiz = quizesDB[0];
console.log(quiz);

$("#a");
$("#b");
$("#c");
$("#d");

$("#a_text");
$("#b_text");
$("#c_text");
$("#d_text");

$("#question");

const PeriodicGameState = {
  quizArr: [],
  question: "",
  optionA: "",
  optionB: "",
  optionC: "",
  optionD: "",
  correctAns: "",
  selctedAns: "",
};

// $(".answer").on("click", (e) => {
//   console.log(e.target.name);
// });

// //On radio button click event handlers
// $(".answer").on("click", (e) => {
//   $("#a").prop("checked", true);
// });

const UIupdator = () => {
  console.log("UI Updator Called...");
};
