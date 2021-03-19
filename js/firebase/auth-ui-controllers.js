// Your web app's Firebase configuration

const joinInTriggerBtn = $("#Join-In-Trigger-Button");
const dropdownTriggerBtn = $("#logged-In-Dropdown-Trigger-Btn");
const logoutBtn = $("#logout-trigger-btn");
logoutBtn.click(() => logout());
const imgSrcArr = [
  "./img/users/user (1).png",
  "./img/users/user (2).png",
  "./img/users/user (3).png",
  "./img/users/user (4).png",
  "./img/users/user (5).png",
  "./img/users/user (6).png",
  "./img/users/user (7).png",
  "./img/users/user (8).png",
  "./img/users/user (9).png",
];

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    // window.alert("hi" + " " + user.uid);

    var userid = user.uid;
    var nam = user.displayName;
    joinInTriggerBtn.hide();
    dropdownTriggerBtn.show();
    // console.log(user);
    if (user.photoURL)
      $("#UserImg").attr("src", imgSrcArr[parseInt(user.photoURL)]);
  } else {
    // No user is signed in.
    /*window.location.replace("http://127.0.0.1:5500/login.html");*/
    // window.location.href = "learn.html";
    // alert("No user signed in");
    joinInTriggerBtn.show();
    dropdownTriggerBtn.hide();
  }
});

function logout() {
  firebase
    .auth()
    .signOut()
    .then(function () {
      joinInTriggerBtn.show();
      dropdownTriggerBtn.hide();
    })
    .catch(function (error) {
      // An error happened
      window.alert("Error:" + error);
    });
}
