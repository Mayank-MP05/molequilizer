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
      let user = userCredential.user;
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

$(document).ready(() => {
  const links = $("#auth-toggler-btn");
  const title = $("#auth-toggler-title");
  const btn = $("#sign-in-button");

  var logInActive = true;
  links.click(() => {
    if (logInActive) {
      links.html("Already have a acct. Log in...");
      title.html("Create new account");
      btn.html("Sign Up");
    } else {
      links.html("Create an account..");
      title.html("Log in");
      btn.html("Sign In");
    }
    logInActive = !logInActive;
  });
});
