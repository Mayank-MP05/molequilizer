let mg = {
  nodes: [
    {
      id: 0,
      atom: "Mg",
      charge: "",
      size: 24,
    },
  ],
  links: [],
};

let cl2 = {
  nodes: [
    {
      id: 0,
      atom: "H",
      charge: "",
      size: 1,
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
let mgcl2 = {
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
