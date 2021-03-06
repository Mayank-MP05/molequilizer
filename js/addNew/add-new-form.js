let reactionObj = {
  DIFFICULTY: 0,
  isR2There: true,
  isP2There: true,
  r1_label: "",
  r2_label: "",
  p1_label: "",
  p2_label: "",
  r1_mol: {
    nodes: [],
    links: [],
  },
  r2_mol: {
    nodes: [],
    links: [],
  },
  p1_mol: {
    nodes: [],
    links: [],
  },
  p2_mol: {
    nodes: [],
    links: [],
  },
};

const handleChange = () => {};

$("#isR2There").on("change", (e) => {
  console.log(e.target.checked);
  let indicator = e.target.checked;
  if (!indicator) {
    $("#r2_label").hide();
    $(".r2_struct").hide();
  } else {
    $("#r2_label").show();
    $(".r2_struct").show();
  }
});
$("#isP2There").on("change", (e) => {
  console.log(e.target.checked);
  let indicator = e.target.checked;
  if (!indicator) {
    $("#p2_label").hide();
    $(".p2_struct").hide();
  } else {
    $("#p2_label").show();
    $(".p2_struct").show();
  }
});

const ResetBtnFn = () => {
  $("#r1_label").val("");
  $("#r2_label").val("");
  $("#p1_label").val("");
  $("#p2_label").val("");

  $("#isR2There").prop("checked", true);
  $("#isP2There").prop("checked", true);

  $("#r1_JSON").html(`{
    nodes:[],
    links:[]
}`);
  $("#r2_JSON").html(`{
  nodes:[],
  links:[]
}`);
  $("#p1_JSON").html(`{
  nodes:[],
  links:[]
}`);
  $("#p2_JSON").html(`{
  nodes:[],
  links:[]
}`);
};

$("#ResetBtn").on("click", ResetBtnFn);
