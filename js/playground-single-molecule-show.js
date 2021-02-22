var data = {
  nodes: [
    {
      id: 0,
      atom: "Mg",
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
  ],
};

var options = {
  domElement: "#mag",
  uniqueId: 1,
  width: 500,
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

var molecule = new Molecule(data, options);
molecule.render();
