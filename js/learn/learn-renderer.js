const VideosData = [
  {
    title: "Chemical reactions introduction",
    videoURL: `<iframe width="100%" height="397" src="https://www.youtube.com/embed/TStjgUmL1RQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    isCompleted: false,
  },
  {
    title: "Balancing chemical equations",
    videoURL: `<iframe width="100%" height="397" src="https://www.youtube.com/embed/TUuABq95BBM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    isCompleted: false,
  },
  {
    title: "Balancing more complex chemical equations",
    videoURL: `<iframe width="100%" height="397" src="https://www.youtube.com/embed/xqpYeiefZl8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    isCompleted: false,
  },
  {
    title: "Visually understanding balancing chemical equations",
    videoURL: `<iframe width="100%" height="397" src="https://www.youtube.com/embed/HbIdp5DURJA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    isCompleted: false,
  },
  {
    title: "Balancing another combustion reaction",
    videoURL: `<iframe width="100%" height="397" src="https://www.youtube.com/embed/cmi8EnJQA84" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    isCompleted: false,
  },
  {
    title: "Balancing chemical equation with substitution",
    videoURL: `<iframe width="100%" height="397" src="https://www.youtube.com/embed/8KXWJCmshEE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    isCompleted: false,
  },
];

const db = firebase.firestore();
let learnPageState = {
  current: "",
  next: "",
  progress: 0,
  completedArr: [false, false, false, false, false, false],
};
$(".progress-card").hide();
firebase.auth().onAuthStateChanged(function (user) {
  $(".progress-card").hide();
  if (user) {
    db.collection("progress")
      .doc(user.email)
      .get()
      .then((doc) => {
        console.log("Document data:", doc.data());
        learnPageState.completedArr = doc.data().arr;
        renderList();
        let c = 0;
        learnPageState.completedArr.forEach((el) => {
          if (el) c++;
        });
        progress = (c / learnPageState.completedArr.length) * 100;
        console.log(progress);
        $("#ProgressBarIndicator").attr("style", `width:${progress}%;`);
        let currIndex;
        c = 0;
        // learnPageState.completedArr.forEach((el) => {
        //   if (el) c++;
        //   else break;
        // });
        for (let el of learnPageState.completedArr) {
          if (el) c++;
          else break;
        }
        $("#currLesson").html(
          `<span class="badge badge-success">Current Lesson</span> : ${
            VideosData[c - 1].title
          }`
        );
        $("#nextLesson").html(
          `<span class="badge badge-primary">Next Lesson</span> : ${
            VideosData[c].title ? VideosData[c].title : VideosData[0].title
          }`
        );
        $("#checkBoxLabel").show();
        $(".progress-card").show();
      })
      .catch((error) => {
        console.log("Error getting document:", error);
        $(".progress-card").hide();
      });
  } else {
    // No user is signed in.
    /*window.location.replace("http://127.0.0.1:5500/login.html");*/
    // window.location.href = "learn.html";
    // alert("No user signed in");
    //
    (learnPageState.completedArr = [false, false, false, false, false, false]),
      $("#checkBoxLabel").hide();
    $(".progress-card").hide();
    renderList();
  }
});

const checkChanged = (e) => {
  console.log(e);
  learnPageState["completedArr"][e.id] = !learnPageState["completedArr"][e.id];
  console.log(learnPageState.completedArr);
  updateToFirebase(
    firebase.auth().currentUser.email,
    learnPageState.completedArr
  );
  let c = 0;
  learnPageState.completedArr.forEach((el) => {
    if (el) c++;
  });
  progress = (c / learnPageState.completedArr.length) * 100;
  console.log(progress);
  $("#ProgressBarIndicator").attr("style", `width:${progress}%;`);
  let currIndex;
  c = 0;
  // learnPageState.completedArr.forEach((el) => {
  //   if (el) c++;
  //   else break;
  // });
  for (let el of learnPageState.completedArr) {
    if (el) c++;
    else break;
  }
  $("#currLesson").html(
    `<span class="badge badge-success">Current Lesson</span> : ${
      VideosData[c - 1].title
    }`
  );
  $("#nextLesson").html(
    `<span class="badge badge-primary">Next Lesson</span> : ${
      VideosData[c].title ? VideosData[c].title : VideosData[0].title
    }`
  );
};
const renderList = () => {
  const parentX = $("#learner-parent");

  let content = "";
  let isFirst = true;
  let width = window.innerWidth;
  let isMobile = false;
  if (width <= 600) isMobile = true;
  for (let i = 0; i < VideosData.length; i++) {
    content += `      
      <div class="accordion" id="accordionExample${i}">
      <div class="card m-0">
        <div class="card-header" id="headingOne">
          <h5 class="mb-0 d-flex flex-row">
            <button class="btn btn-link" type="button"  data-toggle="collapse"
            data-target="#collapseOne${i}"
            aria-expanded="true"
            aria-controls="collapseOne${i}">
                <img src="../img/learn/video-thumbnail.png" hieght="30" width="30"/>
              <span class="pl-1 font-wieght-bold">${
                isMobile
                  ? VideosData[i].title.substr(0, 25) + "..."
                  : VideosData[i].title
              }</span>
            </button>
            <label class="customcheck ml-auto" id="checkBoxLabel"
              >${isMobile ? "" : "Completed"}
              <input type="checkbox"   ${
                learnPageState.completedArr[i] ? `checked="checked"` : ""
              } onChange="checkChanged(this)" id="${i}"/>
              <span class="checkmark"></span>
            </label>
          </h5>
        </div>

        <div
          id="collapseOne${i}"
          class="collapse hide"
          aria-labelledby="headingOne"
          data-parent="#accordionExample${i}"
        >
          <div class="card-body">
            ${VideosData[i].videoURL}
          </div>
        </div>
      </div>
    </div>`;
    // console.log(content);
    $(`#collapseOne${i}`).collapse("hide");
    if (isFirst) {
      isFirst = false;
    }
  }
  //console.log(content);
  parentX.html(content);
};
