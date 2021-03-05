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
  jQuery.noConflict();
  console.log("Asnwer Box");
  $(".modal-title").text("Answer of the Quiz");
  commanFunctionForButtonClick(true);

  $("#exampleModal2").modal("show");
});

$("#hintTriggerBtn").on("click", () => {
  jQuery.noConflict();

  console.log("Hint Box");
  $(".modal-title").text("Hints - Sharpen Your Brain ...");
  commanFunctionForButtonClick(false);
  $("#exampleModal2").modal("show");
});

const commanFunctionForButtonClick = (isAnswer = true) => {
  $(".hindiHint").html(
    `<span class="badge badge-success">Hindi Hint : </span>${PeriodicGameState.hindiHint}`
  );
  $(".englishHint").html(
    `<span class="badge badge-primary">English Hint :  </span>${PeriodicGameState.englishHint}`
  );

  if (!isAnswer) {
    PeriodicGameState.quizArr.map((el, index) => {
      if (el === PeriodicGameState.answerElement) {
        $(`#bohr-container-${index + 1}`).hide();
      }
    });
  } else {
    PeriodicGameState.quizArr.map((el, index) => {
      if (el === PeriodicGameState.answerElement) {
        $(`#bohr-container-${index + 1}`).show();
      }
    });
  }

  let sqaureBoxHTML = ``;
  PeriodicGameState.quizArr.map((el, index) => {
    let obj = periodictabledata.filter((el2) => el2.symbol === el);
    obj = obj[0];
    if (!isAnswer && el === PeriodicGameState.answerElement) {
      sqaureBoxHTML += `<div class="squareElement bg-danger">
    <p class="atomic-symbol">?</p>

  </div>`;
    } else {
      sqaureBoxHTML += `<div class="squareElement">
    <p class="element-name">${obj.name}</p>
    <p class="atomic-no">${obj.atomicnumber}</p>
    <p class="atomic-symbol">${el}</p>
    <p class="atomic-weight">
      ${obj.atomicweight}
    </p>
  </div>`;
    }
  });
  $(".squareElementDiv").html(sqaureBoxHTML);
};
