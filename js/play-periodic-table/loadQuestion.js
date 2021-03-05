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
  answerElement: "",
  correctAns: 0,
  selctedAns: 0,
};

const GetNewQuestion = () => {
  console.log("UI Updator Called...");
  PeriodicGameState.quizArr = quizesDB[0];
  let quiz = quizesDB[0];
  console.log(quiz);
  let ansIndex = Math.floor(Math.random() * quiz.length);
  PeriodicGameState.answerElement = PeriodicGameState.quizArr[ansIndex];
  //   console.log(ansIndex);

  //Question string making logic
  let questionStr = ``;
  quiz.forEach((el, index) => {
    if (index != 0 && index != quiz.length) {
      questionStr += ", ";
    }
    if (index == ansIndex) {
      questionStr += `?`;
    } else {
      questionStr += `${el}`;
    }
  });
  console.log(questionStr);
  PeriodicGameState.question = questionStr;

  //Option Rendering Logic
  let atomsDB = atomic_data;
  let optionAtom;

  for (let i = 0; i <= 3; i++) {
    optionAtom = atomsDB[`${Math.floor(Math.random() * 118)}`];
    switch (i) {
      case 0:
        PeriodicGameState.optionA = optionAtom.atomic_symbol;

      case 1:
        PeriodicGameState.optionB = optionAtom.atomic_symbol;

      case 2:
        PeriodicGameState.optionC = optionAtom.atomic_symbol;

      case 3:
        PeriodicGameState.optionD = optionAtom.atomic_symbol;
    }
  }
  ansIndex = Math.floor(Math.random() * 4);
  switch (ansIndex) {
    case 0:
      PeriodicGameState.optionA = PeriodicGameState.answerElement;
      break;
    case 1:
      PeriodicGameState.optionB = PeriodicGameState.answerElement;
      break;
    case 2:
      PeriodicGameState.optionC = PeriodicGameState.answerElement;
      break;
    case 3:
      PeriodicGameState.optionD = PeriodicGameState.answerElement;
      break;
  }
  PeriodicGameState.correctAns = ansIndex;

  console.log(PeriodicGameState);
};

const UIupdator = () => {
  $("#question").html(PeriodicGameState.question);
  //Option Updation
  periodictabledata.forEach((el) => {
    if (el.symbol == PeriodicGameState.optionA) {
      $("#a_text").html(`${el.symbol} - ${el.name}`);
    }
    if (el.symbol == PeriodicGameState.optionB) {
      $("#b_text").html(`${el.symbol} - ${el.name}`);
    }
    if (el.symbol == PeriodicGameState.optionC) {
      $("#c_text").html(`${el.symbol} - ${el.name}`);
    }
    if (el.symbol == PeriodicGameState.optionD) {
      $("#d_text").html(`${el.symbol} - ${el.name}`);
    }
  });
};

GetNewQuestion();
UIupdator();
