/**
 * 
 * const PeriodicGameState = {
  quizArr: [],
  question: "",
  optionA: "",
  optionB: "",
  optionC: "",
  optionD: "",
  answerElement: "",
  correctAns: 0,
  selctedAns: 0,
  hindiHint: "",
  englishHint: "",
  period: "",
  group: "",
};
 */

$("#AnswerExplanationBtn").on("click", () => {
  console.log("Asnwer Box");
  commanFunctionForButtonClick(true);

  $("#exampleModal2").modal("show");
});

$("#hintTriggerBtn").on("click", () => {
  console.log("Hint Box");
  commanFunctionForButtonClick(false);
  $("#exampleModal2").modal("show");
});

const commanFunctionForButtonClick = (isAnswer = true) => {
  $(".hindiHint").html(
    `<span class="badge badge-success">Hindi Hint : </span>{Content of the Hindi Slang}`
  );
  $(".englishHint").html(
    `<span class="badge badge-primary">English Hint : </span>{Content of the Hindi Slang}`
  );

  console.log(atomic_data, periodictabledata);

  let sqaureBoxHTML = ``;
  PeriodicGameState.quizArr.map((el, index) => {
    sqaureBoxHTML += `<div class="squareElement">
    <p class="element-name">${atomic_data[`${0}`].element_name}</p>
    <p class="atomic-no">${PeriodicGameState.atomicNoArr[index]}</p>
    <p class="atomic-symbol">${el}</p>
    <p class="atomic-weight">
      ${periodictabledata[PeriodicGameState.atomicNoArr[index]].atomicweight}
    </p>
  </div>`;
  });
  $(".squareElementDiv").html(sqaureBoxHTML);
  console.log(atomic_data);
};
