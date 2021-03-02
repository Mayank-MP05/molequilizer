let GiantDB = [
  {
    REACTION_LABEL: "<h2>hi chemical reaction here ... <sub>2</sub></h2>",
    DIFFICULTY: 1,
    isR2There: true,
    isP2There: false,
    r1_label: "Fe",
    r2_label: "Cl<sub>2</sub>",
    p1_label: "FeCl<sub>3</sub>",
    r1_mol: {
      nodes: [
        {
          id: 0,
          atom: "Fe",
          charge: "",
          size: 26,
        },
      ],
      links: [],
    },
    r2_mol: {
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
    },
    p1_mol: {
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
    },
  },
  {
    REACTION_LABEL:
      "<h2>hi chemical reaction here ...FE2 o 3  <sub>2</sub></h2>",
    DIFFICULTY: 1,
    isR2There: true,
    isP2There: false,
    r1_label: "Fe",
    r2_label: "O<sub>2</sub>",
    p1_label: "Fe<sub>2</sub>O<sub>3</sub>",
    r1_mol: {
      nodes: [
        {
          id: 0,
          atom: "Fe",
          charge: "",
          size: 26,
        },
      ],
      links: [],
    },
    r2_mol: {
      nodes: [
        {
          id: 0,
          atom: "O",
          charge: "",
          size: 32,
        },
        {
          id: 1,
          atom: "O",
          charge: "",
          size: 32,
        },
      ],
      links: [
        {
          source: 0,
          target: 1,
          bond: 2,
        },
      ],
    },
    p1_mol: {
      nodes: [
        {
          id: 0,
          atom: "Fe",
          charge: "",
          size: 24,
        },
        {
          id: 1,
          atom: "Fe",
          charge: "",
          size: 24,
        },
        {
          id: 2,
          atom: "O",
          charge: "",
          size: 32,
        },
        {
          id: 3,
          atom: "O",
          charge: "",
          size: 32,
        },
        {
          id: 4,
          atom: "O",
          charge: "",
          size: 32,
        },
      ],
      links: [
        {
          source: 0,
          target: 2,
          bond: 2,
        },
        {
          source: 0,
          target: 3,
          bond: 1,
        },
        {
          source: 1,
          target: 3,
          bond: 1,
        },
        {
          source: 1,
          target: 4,
          bond: 2,
        },
      ],
    },
  },
  {
    REACTION_LABEL:
      "<h2>hi chemical reaction here ...FE2 o 3  <sub>2</sub></h2>",
    DIFFICULTY: 3,
    isR2There: true,
    isP2There: true,
    r1_label: "C<sub>2</sub>H<sub>6</sub>",
    r2_label: "O<sub>2</sub>",
    p1_label: "H<sub>2</sub>O",
    p2_label: "CO<sub>2</sub>",
    r1_mol: {
      nodes: [
        {
          id: 0,
          atom: "C",
          charge: "",
          size: 12,
        },
        {
          id: 1,
          atom: "C",
          charge: "",
          size: 12,
        },
        {
          id: 2,
          atom: "H",
          charge: "",
          size: 1,
        },
        {
          id: 3,
          atom: "H",
          charge: "",
          size: 1,
        },
        {
          id: 4,
          atom: "H",
          charge: "",
          size: 1,
        },
        {
          id: 5,
          atom: "H",
          charge: "",
          size: 1,
        },
        {
          id: 6,
          atom: "H",
          charge: "",
          size: 1,
        },
        {
          id: 7,
          atom: "H",
          charge: "",
          size: 1,
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
        {
          source: 0,
          target: 4,
          bond: 1,
        },
        {
          source: 1,
          target: 5,
          bond: 1,
        },
        {
          source: 1,
          target: 6,
          bond: 1,
        },
        {
          source: 1,
          target: 7,
          bond: 1,
        },
      ],
    },
    r2_mol: {
      nodes: [
        {
          id: 0,
          atom: "O",
          charge: "",
          size: 32,
        },
        {
          id: 1,
          atom: "O",
          charge: "",
          size: 32,
        },
      ],
      links: [
        {
          source: 0,
          target: 1,
          bond: 2,
        },
      ],
    },
    p1_mol: {
      nodes: [
        {
          id: 0,
          atom: "H",
          charge: "",
          size: 1,
        },
        {
          id: 1,
          atom: "H",
          charge: "",
          size: 1,
        },
        {
          id: 2,
          atom: "O",
          charge: "",
          size: 32,
        },
      ],
      links: [
        {
          source: 0,
          target: 2,
          bond: 1,
        },
        {
          source: 1,
          target: 2,
          bond: 1,
        },
      ],
    },
    p2_mol: {
      nodes: [
        {
          id: 0,
          atom: "C",
          charge: "",
          size: 12,
        },
        {
          id: 1,
          atom: "O",
          charge: "",
          size: 32,
        },
        {
          id: 2,
          atom: "O",
          charge: "",
          size: 32,
        },
      ],
      links: [
        {
          source: 0,
          target: 1,
          bond: 2,
        },
        {
          source: 0,
          target: 2,
          bond: 2,
        },
      ],
    },
  },
  {
    REACTION_LABEL:
      "<h2>hi chemical reaction here ...FE2 o 3  <sub>2</sub></h2>",
    DIFFICULTY: 1,
    isR2There: true,
    isP2There: true,
    r1_label: "CH<sub>4</sub>",
    r2_label: "O<sub>2</sub>",
    p1_label: "H<sub>2</sub>O",
    p2_label: "CO<sub>2</sub>",
    r1_mol: {
      nodes: [
        {
          id: 0,
          atom: "C",
          charge: "",
          size: 12,
        },
        {
          id: 1,
          atom: "H",
          charge: "",
          size: 1,
        },
        {
          id: 2,
          atom: "H",
          charge: "",
          size: 1,
        },
        {
          id: 3,
          atom: "H",
          charge: "",
          size: 1,
        },
        {
          id: 4,
          atom: "H",
          charge: "",
          size: 1,
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
        {
          source: 0,
          target: 4,
          bond: 1,
        },
      ],
    },
    r2_mol: {
      nodes: [
        {
          id: 0,
          atom: "O",
          charge: "",
          size: 32,
        },
        {
          id: 1,
          atom: "O",
          charge: "",
          size: 32,
        },
      ],
      links: [
        {
          source: 0,
          target: 1,
          bond: 2,
        },
      ],
    },
    p1_mol: {
      nodes: [
        {
          id: 0,
          atom: "H",
          charge: "",
          size: 1,
        },
        {
          id: 1,
          atom: "H",
          charge: "",
          size: 1,
        },
        {
          id: 2,
          atom: "O",
          charge: "",
          size: 32,
        },
      ],
      links: [
        {
          source: 0,
          target: 2,
          bond: 1,
        },
        {
          source: 1,
          target: 2,
          bond: 1,
        },
      ],
    },
    p2_mol: {
      nodes: [
        {
          id: 0,
          atom: "C",
          charge: "",
          size: 12,
        },
        {
          id: 1,
          atom: "O",
          charge: "",
          size: 32,
        },
        {
          id: 2,
          atom: "O",
          charge: "",
          size: 32,
        },
      ],
      links: [
        {
          source: 0,
          target: 1,
          bond: 2,
        },
        {
          source: 0,
          target: 2,
          bond: 2,
        },
      ],
    },
  },
  {
    REACTION_LABEL:
      "<h2>hi chemical reaction here ...FE2 o 3  <sub>2</sub></h2>",
    DIFFICULTY: 1,
    isR2There: true,
    isP2There: true,
    r1_label: "SnO<sub>2</sub>",
    r2_label: "H<sub>2</sub>",
    p1_label: "Sn",
    p2_label: "H<sub>2</sub>O",
    r1_mol: {
      nodes: [
        {
          id: 0,
          atom: "Sn",
          charge: "",
          size: 118,
        },
        {
          id: 1,
          atom: "O",
          charge: "",
          size: 32,
        },
        {
          id: 2,
          atom: "O",
          charge: "",
          size: 32,
        },
      ],
      links: [
        {
          source: 0,
          target: 1,
          bond: 2,
        },
        {
          source: 0,
          target: 2,
          bond: 2,
        },
      ],
    },
    r2_mol: {
      nodes: [
        {
          id: 0,
          atom: "H",
          charge: "",
          size: 1,
        },
        {
          id: 1,
          atom: "H",
          charge: "",
          size: 1,
        },
      ],
      links: [
        {
          source: 0,
          target: 1,
          bond: 1,
        },
      ],
    },
    p1_mol: {
      nodes: [
        {
          id: 0,
          atom: "Sn",
          charge: "",
          size: 118,
        },
      ],
      links: [],
    },
    p2_mol: {
      nodes: [
        {
          id: 0,
          atom: "H",
          charge: "",
          size: 1,
        },
        {
          id: 1,
          atom: "H",
          charge: "",
          size: 1,
        },
        {
          id: 2,
          atom: "O",
          charge: "",
          size: 32,
        },
      ],
      links: [
        {
          source: 0,
          target: 2,
          bond: 1,
        },
        {
          source: 1,
          target: 2,
          bond: 1,
        },
      ],
    },
  },
  {
    REACTION_LABEL:
      "<h2>hi chemical reaction here ...FE2 o 3  <sub>2</sub></h2>",
    DIFFICULTY: 2,
    isR2There: true,
    isP2There: true,
    r1_label: "NH<sub>3</sub>",
    r2_label: "O<sub>2</sub>",
    p1_label: "NO",
    p2_label: "H<sub>2</sub>O",
    r1_mol: {
      nodes: [
        {
          id: 0,
          atom: "N",
          charge: "",
          size: 14,
        },
        {
          id: 1,
          atom: "H",
          charge: "",
          size: 1,
        },
        {
          id: 2,
          atom: "H",
          charge: "",
          size: 1,
        },
        {
          id: 3,
          atom: "H",
          charge: "",
          size: 1,
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
    },
    r2_mol: {
      nodes: [
        {
          id: 0,
          atom: "O",
          charge: "",
          size: 32,
        },
        {
          id: 1,
          atom: "O",
          charge: "",
          size: 32,
        },
      ],
      links: [
        {
          source: 0,
          target: 1,
          bond: 2,
        },
      ],
    },
    p1_mol: {
      nodes: [
        {
          id: 0,
          atom: "N",
          charge: "",
          size: 14,
        },
        {
          id: 1,
          atom: "O",
          charge: "",
          size: 32,
        },
      ],
      links: [
        {
          source: 0,
          target: 1,
          bond: 2,
        },
      ],
    },
    p2_mol: {
      nodes: [
        {
          id: 0,
          atom: "H",
          charge: "",
          size: 1,
        },
        {
          id: 1,
          atom: "H",
          charge: "",
          size: 1,
        },
        {
          id: 2,
          atom: "O",
          charge: "",
          size: 32,
        },
      ],
      links: [
        {
          source: 0,
          target: 2,
          bond: 1,
        },
        {
          source: 1,
          target: 2,
          bond: 1,
        },
      ],
    },
  },
  {
    REACTION_LABEL:
      "<h2>hi chemical reaction here ...FE2 o 3  <sub>2</sub></h2>",
    DIFFICULTY: 2,
    isR2There: true,
    isP2There: true,
    r1_label: "SeCl<sub>6</sub>",
    r2_label: "O<sub>2</sub>",
    p1_label: "SeO<sub>2</sub>",
    p2_label: "Cl<sub>2</sub>",
    r1_mol: {
      nodes: [
        {
          id: 0,
          atom: "Se",
          charge: "",
          size: 79,
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
        {
          id: 4,
          atom: "Cl",
          charge: "",
          size: 35,
        },
        {
          id: 5,
          atom: "Cl",
          charge: "",
          size: 35,
        },
        {
          id: 6,
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
        {
          source: 0,
          target: 4,
          bond: 1,
        },
        {
          source: 0,
          target: 5,
          bond: 1,
        },
        {
          source: 0,
          target: 6,
          bond: 1,
        },
      ],
    },
    r2_mol: {
      nodes: [
        {
          id: 0,
          atom: "O",
          charge: "",
          size: 32,
        },
        {
          id: 1,
          atom: "O",
          charge: "",
          size: 32,
        },
      ],
      links: [
        {
          source: 0,
          target: 1,
          bond: 2,
        },
      ],
    },
    p1_mol: {
      nodes: [
        {
          id: 0,
          atom: "Se",
          charge: "",
          size: 79,
        },
        {
          id: 1,
          atom: "O",
          charge: "",
          size: 32,
        },
        {
          id: 2,
          atom: "O",
          charge: "",
          size: 32,
        },
      ],
      links: [
        {
          source: 0,
          target: 1,
          bond: 2,
        },
        {
          source: 0,
          target: 2,
          bond: 2,
        },
      ],
    },
    p2_mol: {
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
    },
  },
];
