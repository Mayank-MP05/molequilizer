// Question : Fe+ Cl2 −−→ FeCl3
// Answer : 2 Fe+3 Cl2 −−→ 2 FeCl3

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

if (!isR2There) {
  elR2.hide();
  cr2.hide();
  $("#r2plus").hide();
}
if (!isP2There) {
  elP2.hide();
  cp2.hide();
  $("#p2plus").hide();
}
elR1.html(r1);
elR2.html(r2);
elP1.html(p1);
elP2.html(p2);
let tempWidth = window.innerHeight * 0.95;
export var options = {
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
const r1_mol = {
  nodes: [
    {
      id: 0,
      atom: "Fe",
      charge: "",
      size: 26,
    },
  ],
  links: [],
};
var r2_mol = {
  nodes: [
    {
      id: 0,
      atom: "Cl",
      charge: "",
      size: 35,
    },
    {
      id: 1,
      atom: "Cl",
      charge: "",
      size: 35,
    },
  ],
  links: [
    {
      source: 0,
      target: 1,
      bond: 1,
    },
  ],
};
const p1_mol = {
  nodes: [
    {
      id: 0,
      atom: "Fe",
      charge: "",
      size: 24,
    },
    {
      id: 1,
      atom: "Cl",
      charge: "",
      size: 35,
    },
    {
      id: 2,
      atom: "Cl",
      charge: "",
      size: 35,
    },
    {
      id: 3,
      atom: "Cl",
      charge: "",
      size: 35,
    },
  ],
  links: [
    {
      source: 0,
      target: 1,
      bond: 1,
    },
    {
      source: 0,
      target: 2,
      bond: 1,
    },
    {
      source: 0,
      target: 3,
      bond: 1,
    },
  ],
};

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
  console.log(cr1, cr2, cp1, cp2);
  reactants.nodes = [];
  reactants.links = [];
  for (let i = 0; i < cr1; i++) {
    //reactants.nodes = reactants.nodes.concat(r1_mol.nodes);
    let n = reactants.nodes.length;
    for (let j = 0; j < r1_mol.nodes.length; j++) {
      reactants.nodes.push({
        id: n + j,
        atom: r1_mol.nodes[j].atom,
        charge: r1_mol.nodes[j].charge,
        size: r1_mol.nodes[j].size,
      });
    }
    //reactants.links = reactants.nodes.concat(r1_mol.nodes);
    let m = reactants.links.length;
    for (let j = 0; j < r1_mol.links.length; j++) {
      reactants.links.push({
        source: n + r1_mol.links[j].source,
        target: n + r1_mol.links[j].target,
        bond: r1_mol.links[j].bond,
      });
    }
  }
  if (isR2There) {
    for (let i = 0; i < cr2; i++) {
      //reactants.nodes = reactants.nodes.concat(r1_mol.nodes);
      let n = reactants.nodes.length;
      for (let j = 0; j < r2_mol.nodes.length; j++) {
        reactants.nodes.push({
          id: n + j,
          atom: r2_mol.nodes[j].atom,
          charge: r2_mol.nodes[j].charge,
          size: r2_mol.nodes[j].size,
        });
      }
      //reactants.links = reactants.nodes.concat(r2_mol.nodes);
      let m = reactants.links.length;
      for (let j = 0; j < r2_mol.links.length; j++) {
        reactants.links.push({
          source: n + r2_mol.links[j].source,
          target: n + r2_mol.links[j].target,
          bond: r2_mol.links[j].bond,
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
    for (let j = 0; j < p1_mol.nodes.length; j++) {
      products.nodes.push({
        id: n + j,
        atom: p1_mol.nodes[j].atom,
        charge: p1_mol.nodes[j].charge,
        size: p1_mol.nodes[j].size,
      });
    }
    //reactants.links = reactants.nodes.concat(p1_mol.nodes);
    let m = products.links.length;
    for (let j = 0; j < p1_mol.links.length; j++) {
      products.links.push({
        source: n + p1_mol.links[j].source,
        target: n + p1_mol.links[j].target,
        bond: p1_mol.links[j].bond,
      });
    }
  }
  if (isP2There) {
    for (let i = 0; i < cp2; i++) {
      //products.nodes = products.nodes.concat(r1_mol.nodes);
      let n = products.nodes.length;
      for (let j = 0; j < p2_mol.nodes.length; j++) {
        products.nodes.push({
          id: n + j,
          atom: p2_mol.nodes[j].atom,
          charge: p2_mol.nodes[j].charge,
          size: p2_mol.nodes[j].size,
        });
      }
      //products.links = products.nodes.concat(p2_mol.nodes);
      let m = products.links.length;
      for (let j = 0; j < p2_mol.links.length; j++) {
        products.links.push({
          source: n + p2_mol.links[j].source,
          target: n + p2_mol.links[j].target,
          bond: p2_mol.links[j].bond,
        });
        console.log(n, m, p2_mol.links[j].target);
      }
    }
  }
  console.log(reactants, products);

  options.domElement = "#pmol";
  var moleculeP = new Molecule(products, options);

  moleculeP.render();
};

$("#cr1,#cr2,#cp1,#cp2").on("change", UIupdater);

UIupdater();

let row = `
<tr>
<th scope="row">1</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
</tr>
`;

console.log("Calcilare balance", reactants, products);
let lhs = {},
  rhs = {};
for (let i = 0; i < reactants.nodes.length; i++) {
  if (lhs[reactants.nodes[i].atom] === undefined) {
    lhs[reactants.nodes[i].atom] = 1;
  } else {
    lhs[reactants.nodes[i].atom] = lhs[reactants.nodes[i].atom] + 1;
  }
}

for (let i = 0; i < products.nodes.length; i++) {
  if (rhs[products.nodes[i].atom] === undefined) {
    rhs[products.nodes[i].atom] = 1;
  } else {
    rhs[products.nodes[i].atom] = rhs[products.nodes[i].atom] + 1;
  }
}
console.log(lhs, rhs);

