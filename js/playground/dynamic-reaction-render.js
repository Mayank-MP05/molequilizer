// Question : Fe+ Cl2 −−→ FeCl3
// Answer : 2 Fe+3 Cl2 −−→ 2 FeCl3

// console.log(GiantDB);
let r1 = "Fe",
  r2 = "Cl<sub>2<sub>";
let p1 = "FeCl<sub>3</sub>"; //p2 = 'Cl<sub>2<sub>';
let isR2There = true;
let isP2There = false;
// if(p2 exists and p2 exists){
//     then only render //:TODO
// }

const elR1 = $("#r1");
const elR2 = $("#r2");
const elP1 = $("#p1");
const elP2 = $("#p2");

let cr1 = $("#cr1");
let cr2 = $("#cr2");
let cp1 = $("#cp1");
let cp2 = $("#cp2");

let tempWidth = window.innerHeight * 0.95;
var options = {
  domElement: "#rmol",
  uniqueId: 1,
  width: tempWidth,
  height: 500,
  borderThickness: 1,
  borderColor: "#ffffff",
  background: "#ffffff",
  charge: -1000,
  friction: 0.9,
  alpha: 0.1,
  theta: 0.8,
  linkStrength: 1,
  gravity: 0.1,
  maxAtomRadius: 6,
  colorScheme: ["#2AA9CC", "#FCF78A"],
  bondThickness: 2,
  bondColor: "#000000",
  atomBorderThickness: 2,
  atomBorderColor: "#000000",
  atomTextColor: "#000000",
  atomSizeBasis: "Atomic Radius",
  boundingBox: true,
  borderRadiusX: 5,
  borderRadiusY: 5,
  detailedTooltips: true,
};
let r1_mol, r2_mol, p1_mol, p2_mol, r1_label, r2_label, p1_label, p2_label;

var moleculeObj = {
  r1_mol,
  r2_mol,
  p2_mol,
  p1_mol,
  isR2There,
  isP2There,
  r1_label,
  r2_label,
  p1_label,
  p2_label,
};
const constReactionSelectUIUpdator = () => {
  // Molecules Labels Updator
  elR1.html(moleculeObj.r1_label);
  elR2.html(moleculeObj.r2_label);
  elP1.html(moleculeObj.p1_label);
  elP2.html(moleculeObj.p2_label);

  if (!moleculeObj.isR2There) {
    elR2.hide();
    cr2.hide();
    $("#r2plus").hide();
  } else {
    elR2.show();
    cr2.show();
    $("#r2plus").show();
  }
  if (!moleculeObj.isP2There) {
    elP2.hide();
    cp2.hide();
    $("#p2plus").hide();
  } else {
    elP2.show();
    cp2.show();
    $("#p2plus").show();
  }
};
const getThroughDB = (ReactionIndex) => {
  let i = ReactionIndex;
  //   { r1_mol, r2_mol, p2_mol, p1_mol } = moleculeObj;
  moleculeObj.r1_mol = GiantDB[i].r1_mol;
  moleculeObj.r1_label = GiantDB[i].r1_label;
  moleculeObj.isP2There = GiantDB[i].isP2There;
  moleculeObj.isR2There = GiantDB[i].isR2There;

  if (GiantDB[i].isR2There) {
    moleculeObj.r2_mol = GiantDB[i].r2_mol;
    moleculeObj.r2_label = GiantDB[i].r2_label;
  }

  moleculeObj.p1_mol = GiantDB[i].p1_mol;
  moleculeObj.p1_label = GiantDB[i].p1_label;

  if (GiantDB[i].isP2There) {
    moleculeObj.p2_mol = GiantDB[i].p2_mol;
    moleculeObj.p2_label = GiantDB[i].p2_label;
  }
  constReactionSelectUIUpdator();
};

getThroughDB(2, moleculeObj);

let reactants = {
  nodes: [],
  links: [],
};
let products = {
  nodes: [],
  links: [],
};

// Reactant Changed

// Product Changed

const UIupdater = () => {
  let cr1 = $("#cr1").val();
  let cr2 = $("#cr2").val();
  let cp1 = $("#cp1").val();
  let cp2 = $("#cp2").val();
  // console.log(cr1, cr2, cp1, cp2);
  reactants.nodes = [];
  reactants.links = [];
  // console.log(moleculeObj);

  for (let i = 0; i < cr1; i++) {
    //reactants.nodes = reactants.nodes.concat(r1_mol.nodes);
    let n = reactants.nodes.length;
    for (let j = 0; j < moleculeObj.r1_mol.nodes.length; j++) {
      reactants.nodes.push({
        id: n + j,
        atom: moleculeObj.r1_mol.nodes[j].atom,
        charge: moleculeObj.r1_mol.nodes[j].charge,
        size: moleculeObj.r1_mol.nodes[j].size,
      });
    }
    //reactants.links = reactants.nodes.concat(moleculeObj.r1_mol.nodes);
    let m = reactants.links.length;
    for (let j = 0; j < moleculeObj.r1_mol.links.length; j++) {
      reactants.links.push({
        source: n + moleculeObj.r1_mol.links[j].source,
        target: n + moleculeObj.r1_mol.links[j].target,
        bond: moleculeObj.r1_mol.links[j].bond,
      });
    }
  }
  if (moleculeObj.isR2There) {
    for (let i = 0; i < cr2; i++) {
      //reactants.nodes = reactants.nodes.concat(moleculeObj.r1_mol.nodes);
      let n = reactants.nodes.length;
      for (let j = 0; j < moleculeObj.r2_mol.nodes.length; j++) {
        reactants.nodes.push({
          id: n + j,
          atom: moleculeObj.r2_mol.nodes[j].atom,
          charge: moleculeObj.r2_mol.nodes[j].charge,
          size: moleculeObj.r2_mol.nodes[j].size,
        });
      }
      //reactants.links = reactants.nodes.concat(moleculeObj.r2_mol.nodes);
      let m = reactants.links.length;
      for (let j = 0; j < moleculeObj.r2_mol.links.length; j++) {
        reactants.links.push({
          source: n + moleculeObj.r2_mol.links[j].source,
          target: n + moleculeObj.r2_mol.links[j].target,
          bond: moleculeObj.r2_mol.links[j].bond,
        });
        //console.log(n, m, r2_mol.links[j].target);
      }
    }
  }
  options.domElement = "#rmol";
  var moleculeR = new Molecule(reactants, options);
  moleculeR.render();
  //For Product Side
  products.nodes = [];
  products.links = [];
  for (let i = 0; i < cp1; i++) {
    let n = products.nodes.length;
    for (let j = 0; j < moleculeObj.p1_mol.nodes.length; j++) {
      products.nodes.push({
        id: n + j,
        atom: moleculeObj.p1_mol.nodes[j].atom,
        charge: moleculeObj.p1_mol.nodes[j].charge,
        size: moleculeObj.p1_mol.nodes[j].size,
      });
    }
    //reactants.links = reactants.nodes.concat(moleculeObj.p1_mol.nodes);
    let m = products.links.length;
    for (let j = 0; j < moleculeObj.p1_mol.links.length; j++) {
      products.links.push({
        source: n + moleculeObj.p1_mol.links[j].source,
        target: n + moleculeObj.p1_mol.links[j].target,
        bond: moleculeObj.p1_mol.links[j].bond,
      });
    }
  }
  if (moleculeObj.isP2There) {
    for (let i = 0; i < cp2; i++) {
      //products.nodes = products.nodes.concat(moleculeObj.r1_mol.nodes);
      let n = products.nodes.length;
      for (let j = 0; j < moleculeObj.p2_mol.nodes.length; j++) {
        products.nodes.push({
          id: n + j,
          atom: moleculeObj.p2_mol.nodes[j].atom,
          charge: moleculeObj.p2_mol.nodes[j].charge,
          size: moleculeObj.p2_mol.nodes[j].size,
        });
      }
      //products.links = products.nodes.concat(moleculeObj.p2_mol.nodes);
      let m = products.links.length;
      for (let j = 0; j < moleculeObj.p2_mol.links.length; j++) {
        products.links.push({
          source: n + moleculeObj.p2_mol.links[j].source,
          target: n + moleculeObj.p2_mol.links[j].target,
          bond: moleculeObj.p2_mol.links[j].bond,
        });
        // console.log(n, m, moleculeObj.p2_mol.links[j].target);
      }
    }
  }
  //   console.log(reactants, products);

  options.domElement = "#pmol";
  var moleculeP = new Molecule(products, options);

  moleculeP.render();
};

$("#cr1,#cr2,#cp1,#cp2").on("change", UIupdater);

UIupdater();

const fetchReactions = () => {
  let reactionList = "",
    label;
  for (let [index, reaction] of GiantDB.entries()) {
    label = `${reaction.r1_label} `;
    if (reaction.isR2There) {
      label += `+ ${reaction.r2_label} `;
    }
    label += ` --> `;
    label += `${reaction.p1_label} `;
    if (reaction.isP2There) {
      label += `+ ${reaction.p2_label} `;
    }
    reactionList += `<button class="btn reactionBtn font-weight-bold w-100 m-2 p-1" onclick="setReaction(${index})"><img src="./img/playground/test-tube.png" style="float:left" width="30"/>${label}</button>`;
  }
  $("#reactionRenderedHere").html(reactionList);
};

fetchReactions();
const setReaction = (index) => {
  // console.log("setreaction");
  // console.log(index);
  getThroughDB(index);
  UIupdater();
  closeNav();
};
console.log(moleculeObj);
