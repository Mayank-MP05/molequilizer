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

  $("#r1_JSON").val(`{
    "nodes":[],
    "links":[]
}`);
  $("#r2_JSON").val(`{
  "nodes":[],
  "links":[]
}`);
  $("#p1_JSON").val(`{
  "nodes":[],
  "links":[]
}`);
  $("#p2_JSON").val(`{
  "nodes":[],
  "links":[]
}`);
};

$("#ResetBtn").on("click", ResetBtnFn);

const AddReactionFn = () => {
  reactionObj = {
    REACTION_LABEL: "Reaction From Firebase",
    DIFFICULTY: Number($("#DIFFICULTY").val()),
    isR2There: $("#isR2There").is(":checked"),
    isP2There: $("#isP2There").is(":checked"),
    r1_label: $("#r1_label").val(),
    r2_label: $("#r2_label").val(),
    p1_label: $("#p1_label").val(),
    p2_label: $("#p2_label").val(),
    r1_mol: JSON.parse(
      JSON.stringify($("#r1_JSON").val())
        .replace(/(?:\\[rn])+/g, "")
        .replace(/\s+/g, "")
    ),
    r2_mol: JSON.parse(
      JSON.stringify($("#r2_JSON").val())
        .replace(/(?:\\[rn])+/g, "")
        .replace(/\s+/g, "")
    ),
    p1_mol: JSON.parse(
      JSON.stringify($("#p1_JSON").val())
        .replace(/(?:\\[rn])+/g, "")
        .replace(/\s+/g, "")
    ),
    p2_mol: JSON.parse(
      JSON.stringify($("#p2_JSON").val())
        .replace(/(?:\\[rn])+/g, "")
        .replace(/\s+/g, "")
    ),
  };
  console.log(reactionObj);
  push_to_DB(
    reactionObj,
    () => {},
    () => {}
  );
};
$("#AddReactionBtn").on("click", AddReactionFn);
