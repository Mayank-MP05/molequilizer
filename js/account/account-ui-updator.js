var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;

$("#dpUpdater").on("change", (e) => {
  //   console.log(e.target.value);
  $("#AvatarImg").attr("src", imgSrcArr[parseInt(e.target.value)]);
});

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    // window.alert("hi" + " " + user.uid);
    var userid = user.uid;
    var nam = user.displayName;
    joinInTriggerBtn.hide();
    dropdownTriggerBtn.show();

    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;
    console.log(name, email, photoUrl);
    $("#emailInput").val(email);
    if (name) {
      $("#nameInput").val(name);
    }
    if (photoUrl) {
      $("#AvatarImg").attr("src", imgSrcArr[parseInt(photoUrl)]);
      $("#dpUpdater").val(photoUrl);
    }

    $("#SaveChangesBtn").on("click", () => {
      user
        .updateProfile({
          displayName: $("#nameInput").val(),
          photoURL: parseInt($("#dpUpdater").val()),
        })
        .then(function () {
          console.log("Updation done successful!");
        })
        .catch(function (error) {
          console.log(error);
        });
    });
    $("#ResetBtn").on("click", () => {
      if (name) {
        $("#nameInput").val(name);
      }
      if (photoUrl) {
        $("#AvatarImg").attr("src", imgSrcArr[parseInt(photoUrl)]);
      }
    });

    /*
     */
  } else {
    // No user is signed in.
    /*window.location.replace("http://127.0.0.1:5500/login.html");*/
    // window.location.href = "learn.html";
    // alert("No user signed in");
    joinInTriggerBtn.show();
    dropdownTriggerBtn.hide();
    window.location.href = "./learn.html";
  }
});
