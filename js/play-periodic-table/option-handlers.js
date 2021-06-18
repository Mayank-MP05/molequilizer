// importing sound
let successAudio = new Audio('./sound/success.mp3')
let errorAudio = new Audio('./sound/error.mp3')
successAudio.loop = errorAudio.loop = false;

// Handler for Background Color Check for Options
$("#quiz-form input").on("change", function () {
  $(".a_li").removeClass("selected-option");
  $(".b_li").removeClass("selected-option");
  $(".c_li").removeClass("selected-option");
  $(".d_li").removeClass("selected-option");
  let selected = $("input[name='answer']:checked", "#quiz-form").val();
  switch (selected) {
    case "a":
      $(".a_li").addClass("selected-option");
      break;
    case "b":
      $(".b_li").addClass("selected-option");
      break;
    case "c":
      $(".c_li").addClass("selected-option");
      break;
    case "d":
      $(".d_li").addClass("selected-option");
      break;
  }
  PeriodicGameState.selctedAns = selected;
  console.log(PeriodicGameState);
});

// Clear out all selections on Clear button click

const clearTheInputs = () => {
  $(".a_li")
    .removeClass("selected-option")
    .removeClass("wrong-option")
    .removeClass("correct-option");
  $(".b_li")
    .removeClass("selected-option")
    .removeClass("wrong-option")
    .removeClass("correct-option");
  $(".c_li")
    .removeClass("selected-option")
    .removeClass("wrong-option")
    .removeClass("correct-option");
  $(".d_li")
    .removeClass("selected-option")
    .removeClass("wrong-option")
    .removeClass("correct-option");
  $("input.answer").prop("checked", false);
  PeriodicGameState.selctedAns = "";
};
$("#clear").on("click", clearTheInputs);
//Check the Answer button
$("#submit").on("click", () => {
  //If the selected and Correct ans are the same
  let mapper = ["a", "b", "c", "d"];
  //   console.log(PeriodicGameState.selctedAns);
  //   console.log(mapper[PeriodicGameState.correctAns]);
  if (PeriodicGameState.selctedAns == mapper[PeriodicGameState.correctAns]) {
    $(`.${PeriodicGameState.selctedAns}_li`).addClass("correct-option");

    //TODO: Congratulation Modal
    successAudio.currentTime = 0;
    successAudio.play();
    callCongratulations();
  } else {
    errorAudio.currentTime = 0;
    errorAudio.play();
    //Else if Selected and Correct are diff
    $(`.${PeriodicGameState.selctedAns}_li`).addClass("wrong-option");
    // console.log(`.${mapper[PeriodicGameState.correctAns]}_li`);
    $(`.${mapper[PeriodicGameState.correctAns]}_li`).addClass("correct-option");
  }
});
