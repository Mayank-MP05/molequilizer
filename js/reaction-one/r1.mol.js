export var r1 = {
  nodes: [
    {
      id: 0,
      atom: "Fe",
      charge: "",
      size: 26,
    }
  ],
  links: [],
};

export var options = {
  domElement: "#container",
  uniqueId: 1,
  width: 200,
  height: 200,
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
