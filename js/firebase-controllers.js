// Your web app's Firebase configuration

const joinInTriggerBtn = $("#Join-In-Trigger-Button");
const dropdownTriggerBtn = $("#logged-In-Dropdown-Trigger-Btn");
const logoutBtn = $("#logout-trigger-btn");
logoutBtn.click(() => logout());
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    // window.alert("hi" + " " + user.uid);
    var userid = user.uid;
    var nam = user.displayName;
    joinInTriggerBtn.hide();
    dropdownTriggerBtn.show();
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
