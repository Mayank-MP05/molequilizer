const joinInBtn = document.getElementById("sign-in-button");
$("#errorAlert").hide();
$("#LoginAlert").hide();
$("#AccountCreationAlert").hide();
var errorMessage2;

$("#exampleModalCenter").on("show.bs.modal", function (e) {
  $("#errorAlert").hide();
  $("#LoginAlert").hide();
  $("#AccountCreationAlert").hide();
});

joinInBtn.addEventListener("click", () => {
  $("#errorAlert").hide();
  $("#LoginAlert").hide();
  $("#AccountCreationAlert").hide();
  let email_val = $("#inputEmail").val();
  let pass_val = $("#inputPassword").val();
  console.log(email_val, pass_val);
  firebase
    .auth()
    .createUserWithEmailAndPassword(email_val, pass_val)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      $("#errorAlert").hide();
      $("#AccountCreationAlert").show();
      setTimeout(() => {
        $("#exampleModalCenter").modal("hide");
      }, 1000);
    })
    .catch((error) => {
      var errorCode = error.code;
      errorMessage2 = error.message;
      // ..
      // console.log(errorCode, errorMessage);
      if (errorCode === "auth/email-already-in-use") {
        firebase
          .auth()
          .signInWithEmailAndPassword(email_val, pass_val)
          .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log(user);
            $("#LoginAlert").show();
            setTimeout(() => {
              $("#exampleModalCenter").modal("hide");
            }, 1000);
            return;
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            $("#errorAlert").html(errorMessage).show();
            return;
          });
      } else {
        $("#errorAlert").html(errorMessage2).show();
      }
    });
});
