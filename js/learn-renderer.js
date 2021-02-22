const data = [
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

const renderList = () => {
  const parentX = $("#learner-parent");
  parentX.html("hiiii");
  let content = "";
  let isFirst = true;

  for (let i = 0; i < data.length; i++) {
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
              <span class="pl-1 font-wieght-bold">${data[i].title}</span>
            </button>
            <label class="customcheck ml-auto"
              >Completed
              <input type="checkbox" checked="checked" />
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
            ${data[i].videoURL}
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

renderList();
