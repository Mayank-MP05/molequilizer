let bubbleAudio = new Audio("./sound/Bubbles.mp3");
let successAudio = new Audio("./sound/success.mp3");
let errorAudio = new Audio("./sound/error.mp3");
bubbleAudio.loop = successAudio.loop = errorAudio.loop = false;
// bubbleAudio.play()

function gcd_two_numbers(x, y) {
  return y == 0 ? x : gcd_two_numbers(y, x % y);
}

$("#CheckTheBalanceBtn").on("click", () => {
  // bubbleAudio.play();
  // this is
  // console.log("modal open");
  // $("#exampleModal").modal("show");

  //Input the values of Coeficeints
  let cr1 = $("#cr1").val();
  let cr2 = $("#cr2").val();
  let cp1 = $("#cp1").val();
  let cp2 = $("#cp2").val();

  //Count the values in object
  let obj_reactant = {};
  let obj_product = {};
  for (let i = 0; i < reactants.nodes.length; i++) {
    if (typeof obj_reactant[reactants.nodes[i]["atom"]] == "undefined")
      obj_reactant[reactants.nodes[i]["atom"]] = 1;
    else
      obj_reactant[reactants.nodes[i]["atom"]] =
        obj_reactant[reactants.nodes[i]["atom"]] + 1;
  }
  for (let i = 0; i < products.nodes.length; i++) {
    if (typeof obj_product[products.nodes[i]["atom"]] == "undefined")
      obj_product[products.nodes[i]["atom"]] = 1;
    else
      obj_product[products.nodes[i]["atom"]] =
        obj_product[products.nodes[i]["atom"]] + 1;
  }

  //   console.table(obj_reactant, obj_product);

  //Table Updation Logic
  let index = 1;
  let table_html = ``;
  for (const [property, value] of Object.entries(obj_reactant)) {
    // console.log(property, value, obj_product[property]);
    row_html = `<tr>
      <th scope='row'>${index}</th>
      <td>${property}</td>
      <td>${value}</td>
      <td>${obj_product[property]}</td>
    </tr>`;
    table_html += row_html;
    index++;
  }
  $("#reactionElementCountTable").html(table_html);

  //GCD Simple Logic
  let gcdToCompare;
  if (isR2There && isP2There) {
    gcdToCompare = gcd_two_numbers(
      gcd_two_numbers(cr1, cr2),
      gcd_two_numbers(cp1, cp2)
    );
  } else if (isR2There) {
    gcdToCompare = gcd_two_numbers(gcd_two_numbers(cr1, cr2), cp1);
  } else {
    gcdToCompare = gcd_two_numbers(cr1, gcd_two_numbers(cp1, cp2));
  }

  let statusMsg = ``,
    balanced = true;

  /**
   * Stattus messages example :
   * 1. Reaction is Both Balanced and Optimised
   * 2. Reaction is Balanced but NOT Optimised
   * 3. Reaction Imbalance :
   */
  for (const [property, value] of Object.entries(obj_reactant)) {
    if (obj_product[property] == value) {
    } else if (obj_product[property] < value) {
      balanced = false;
      break;
    } else {
      balanced = false;
      break;
    }
  }
  //   console.log(gcdToCompare, balanced);
  if (balanced && gcdToCompare == 1) {
    statusMsg = `Reaction is Balanced and Optimized`;
  } else if (balanced) {
    statusMsg = `Reaction is Balanced but NOT Optimized`;
    balanced = false;
  } else {
    statusMsg = `Reaction is NOT balanced`;
  }

  //Updation for Alert Message Styling
  $("#ReactionStatusAlert").html(statusMsg);
  if (balanced) {
    $("#ReactionStatusAlert")
      .removeClass("alert-danger")
      .addClass("alert-success");
    $("#modelBorderFrame").attr("style", "border: 3px solid greenyellow");
  } else {
    $("#ReactionStatusAlert")
      .addClass("alert-danger")
      .removeClass("alert-success");
    $("#modelBorderFrame").attr("style", "border: 3px solid red");
  }

  // playing bubble sound
  bubbleAudio.play();
  balanced
    ? $("#reactionLoading").attr("src", "./img/playground/green_flask.gif")
    : $("#reactionLoading").attr("src", "./img/playground/red_flask.gif");
  $("#exampleModal").modal("show");

  //Cacluclate Random time for modal
  //why random?
  let loadTime = Math.random() * 3000;
  // let loadTime = 3000;
  setTimeout(() => {
    bubbleAudio.pause();
    bubbleAudio.currentTime = 0;
    successAudio.currentTime = errorAudio.currentTime = 0;
    if (balanced) successAudio.play();
    else errorAudio.play();
    $("#reactionLoading").addClass("d-none");
    $("#resultDialogue").removeClass("d-none");
  }, loadTime);
});

//Closing the modal revive the original conditions
$("#exampleModal").on("hidden.bs.modal", function () {
  $("#reactionLoading").removeClass("d-none");
  $("#resultDialogue").addClass("d-none");
});
