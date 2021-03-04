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
          size: 16,
        },
        {
          id: 2,
          atom: "O",
          charge: "",
          size: 16,
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
  {
    REACTION_LABEL:
      "<h2>hi chemical reaction here ...FE2 o 3  <sub>2</sub></h2>",
    DIFFICULTY: 3,
    isR2There: true,
    isP2There: true,
    r1_label: "KOH",
    r2_label: "H<sub>3</sub>PO<sub>4</sub>",
    p1_label: "K<sub>3</sub>PO<sub>4</sub>",
    p2_label: "H<sub>2</sub>O",
    r1_mol: {
      nodes: [
        {
          id: 0,
          atom: "K",
          charge: "",
          size: 39,
        },
        {
          id: 1,
          atom: "O",
          charge: "",
          size: 16,
        },
        {
          id: 2,
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
          source: 1,
          target: 2,
          bond: 1,
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
        {
          id: 2,
          atom: "H",
          charge: "",
          size: 1,
        },
        {
          id: 3,
          atom: "P",
          charge: "",
          size: 31,
        },
        {
          id: 4,
          atom: "O",
          charge: "",
          size: 16,
        },
        {
          id: 5,
          atom: "O",
          charge: "",
          size: 16,
        },
        {
          id: 6,
          atom: "O",
          charge: "",
          size: 16,
        },
        {
          id: 7,
          atom: "O",
          charge: "",
          size: 16,
        },
      ],
      links: [
        {
          source: 3,
          target: 4,
          bond: 2,
        },
        {
          source: 3,
          target: 5,
          bond: 1,
        },
        {
          source: 3,
          target: 6,
          bond: 1,
        },
        {
          source: 3,
          target: 7,
          bond: 1,
        },
        {
          source: 5,
          target: 0,
          bond: 1,
        },
        {
          source: 6,
          target: 1,
          bond: 1,
        },
        {
          source: 7,
          target: 2,
          bond: 1,
        },
      ],
    },
    p1_mol: {
      nodes: [
        {
          id: 0,
          atom: "K",
          charge: "",
          size: 39,
        },
        {
          id: 1,
          atom: "K",
          charge: "",
          size: 39,
        },
        {
          id: 2,
          atom: "K",
          charge: "",
          size: 39,
        },
        {
          id: 3,
          atom: "P",
          charge: "",
          size: 31,
        },
        {
          id: 4,
          atom: "O",
          charge: "",
          size: 16,
        },
        {
          id: 5,
          atom: "O",
          charge: "",
          size: 16,
        },
        {
          id: 6,
          atom: "O",
          charge: "",
          size: 16,
        },
        {
          id: 7,
          atom: "O",
          charge: "",
          size: 16,
        },
      ],
      links: [
        {
          source: 3,
          target: 4,
          bond: 2,
        },
        {
          source: 3,
          target: 5,
          bond: 1,
        },
        {
          source: 3,
          target: 6,
          bond: 1,
        },
        {
          source: 3,
          target: 7,
          bond: 1,
        },
        {
          source: 5,
          target: 0,
          bond: 1,
        },
        {
          source: 6,
          target: 1,
          bond: 1,
        },
        {
          source: 7,
          target: 2,
          bond: 1,
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
    DIFFICULTY: 1,
    isR2There: true,
    isP2There: true,
    r1_label: "KNO<sub>3</sub>",
    r2_label: "H<sub>2</sub>CO<sub>3</sub>",
    p1_label: "K<sub>2</sub>CO<sub>3</sub>",
    p2_label: "HNO<sub>3</sub>",
    r1_mol: {
      nodes: [
        {
          id: 0,
          atom: "K",
          charge: "+",
          size: 39,
        },
        {
          id: 1,
          atom: "N",
          charge: "+",
          size: 14,
        },
        {
          id: 2,
          atom: "O",
          charge: "",
          size: 16,
        },
        {
          id: 3,
          atom: "O",
          charge: "-",
          size: 16,
        },
        {
          id: 4,
          atom: "O",
          charge: "-",
          size: 16,
        },
      ],
      links: [
        {
          source: 1,
          target: 2,
          bond: 2,
        },
        {
          source: 1,
          target: 3,
          bond: 1,
        },
        {
          source: 1,
          target: 4,
          bond: 1,
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
        {
          id: 2,
          atom: "C",
          charge: "",
          size: 12,
        },
        {
          id: 3,
          atom: "O",
          charge: "",
          size: 16,
        },
        {
          id: 4,
          atom: "O",
          charge: "",
          size: 16,
        },
        {
          id: 5,
          atom: "O",
          charge: "",
          size: 16,
        },
      ],
      links: [
        {
          source: 2,
          target: 3,
          bond: 2,
        },
        {
          source: 2,
          target: 4,
          bond: 1,
        },
        {
          source: 2,
          target: 5,
          bond: 1,
        },
        {
          source: 1,
          target: 5,
          bond: 1,
        },
        {
          source: 0,
          target: 4,
          bond: 1,
        },
      ],
    },
    p1_mol: {
      nodes: [
        {
          id: 0,
          atom: "K",
          charge: "+",
          size: 39,
        },
        {
          id: 1,
          atom: "K",
          charge: "+",
          size: 39,
        },
        {
          id: 2,
          atom: "C",
          charge: "",
          size: 12,
        },
        {
          id: 3,
          atom: "O",
          charge: "",
          size: 16,
        },
        {
          id: 4,
          atom: "O",
          charge: "-",
          size: 16,
        },
        {
          id: 5,
          atom: "O",
          charge: "-",
          size: 16,
        },
      ],
      links: [
        {
          source: 2,
          target: 3,
          bond: 2,
        },
        {
          source: 2,
          target: 4,
          bond: 1,
        },
        {
          source: 2,
          target: 5,
          bond: 1,
        },
        {
          source: 1,
          target: 5,
          bond: 1,
        },
        {
          source: 0,
          target: 4,
          bond: 1,
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
          atom: "N",
          charge: "+",
          size: 14,
        },
        {
          id: 2,
          atom: "O",
          charge: "",
          size: 16,
        },
        {
          id: 3,
          atom: "O",
          charge: "",
          size: 16,
        },
        {
          id: 4,
          atom: "O",
          charge: "-",
          size: 16,
        },
      ],
      links: [
        {
          source: 1,
          target: 2,
          bond: 2,
        },
        {
          source: 1,
          target: 3,
          bond: 1,
        },
        {
          source: 1,
          target: 4,
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
    r1_label: "Na<sup>+</sup>",
    r2_label: "Cl<sup>-</sup>",
    p1_label: "NaCl",
    r1_mol: {
      nodes: [
        {
          id: 0,
          atom: "Na",
          charge: "+",
          size: 23,
        },
      ],
      links: [],
    },
    r2_mol: {
      nodes: [
        {
          id: 0,
          atom: "Cl",
          charge: "-",
          size: 35,
        },
      ],
      links: [],
    },
    p1_mol: {
      nodes: [
        {
          id: 0,
          atom: "Na",
          charge: "",
          size: 23,
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
  {
    REACTION_LABEL:
      "<h2>hi chemical reaction here ...FE2 o 3  <sub>2</sub></h2>",
    DIFFICULTY: 2,
    isR2There: true,
    isP2There: false,
    r1_label: "Al",
    r2_label: "O<sub>2</sub>",
    p1_label: "Al<sub>2</sub>O<sub>3</sub>",
    r1_mol: {
      nodes: [
        {
          id: 0,
          atom: "Al",
          charge: "",
          size: 27,
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
          size: 16,
        },
        {
          id: 1,
          atom: "O",
          charge: "",
          size: 16,
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
          atom: "Al",
          charge: "",
          size: 27,
        },
        {
          id: 1,
          atom: "Al",
          charge: "",
          size: 27,
        },
        {
          id: 2,
          atom: "O",
          charge: "",
          size: 16,
        },
        {
          id: 3,
          atom: "O",
          charge: "",
          size: 16,
        },
        {
          id: 4,
          atom: "O",
          charge: "",
          size: 16,
        },
      ],
      links: [
        {
          source: 0,
          target: 2,
          bond: 2,
        },
        {
          source: 1,
          target: 3,
          bond: 2,
        },
        {
          source: 0,
          target: 4,
          bond: 1,
        },
        {
          source: 1,
          target: 4,
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
    r1_label: "Al",
    r2_label: "HCl",
    p1_label: "AlCl<sub>3</sub>",
    p2_label: "H<sub>2</sub>",
    r1_mol: {
      nodes: [
        {
          id: 0,
          atom: "Al",
          charge: "",
          size: 27,
        },
      ],
      links: [],
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
          atom: "Al",
          charge: "",
          size: 27,
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
  {
    REACTION_LABEL:
      "<h2>hi chemical reaction here ...FE2 o 3  <sub>2</sub></h2>",
    DIFFICULTY: 2,
    isR2There: true,
    isP2There: true,
    r1_label: "H<sub>3</sub>PO<sub>4</sub>",
    r2_label: "HCl",
    p1_label: "PCl<sub>5</sub>",
    p2_label: "H<sub>2</sub>O",
    r1_mol: {
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
          atom: "H",
          charge: "",
          size: 1,
        },
        {
          id: 3,
          atom: "P",
          charge: "",
          size: 31,
        },
        {
          id: 4,
          atom: "O",
          charge: "",
          size: 16,
        },
        {
          id: 5,
          atom: "O",
          charge: "",
          size: 16,
        },
        {
          id: 6,
          atom: "O",
          charge: "",
          size: 16,
        },
        {
          id: 7,
          atom: "O",
          charge: "",
          size: 16,
        },
      ],
      links: [
        {
          source: 3,
          target: 4,
          bond: 2,
        },
        {
          source: 3,
          target: 5,
          bond: 1,
        },
        {
          source: 3,
          target: 6,
          bond: 1,
        },
        {
          source: 3,
          target: 7,
          bond: 1,
        },
        {
          source: 5,
          target: 0,
          bond: 1,
        },
        {
          source: 6,
          target: 1,
          bond: 1,
        },
        {
          source: 7,
          target: 2,
          bond: 1,
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
          atom: "P",
          charge: "",
          size: 31,
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
          size: 16,
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
    DIFFICULTY: 3,
    isR2There: true,
    isP2There: true,
    r1_label: "SiCl<sub>4</sub>",
    r2_label: "H<sub>2</sub>O",
    p1_label: "SiO<sub>2</sub>",
    p2_label: "HCl",
    r1_mol: {
      nodes: [
        {
          id: 0,
          atom: "Si",
          charge: "",
          size: 28,
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
          size: 16,
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
    p1_mol: {
      nodes: [
        {
          id: 0,
          atom: "Si",
          charge: "",
          size: 28,
        },
        {
          id: 1,
          atom: "O",
          charge: "",
          size: 16,
        },
        {
          id: 2,
          atom: "O",
          charge: "",
          size: 16,
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
    },
  },
  {
    REACTION_LABEL:
      "<h2>hi chemical reaction here ...FE2 o 3  <sub>2</sub></h2>",
    DIFFICULTY: 2,
    isR2There: true,
    isP2There: true,
    r1_label: "As",
    r2_label: "NaOH",
    p1_label: "Na<sub>3</sub>AsO<sub>3</sub>",
    p2_label: "H<sub>2</sub>",
    r1_mol: {
      nodes: [
        {
          id: 0,
          atom: "As",
          charge: "",
          size: 75,
        },
      ],
      links: [],
    },
    r2_mol: {
      nodes: [
        {
          id: 0,
          atom: "Na",
          charge: "",
          size: 23,
        },
        {
          id: 1,
          atom: "O",
          charge: "",
          size: 16,
        },
        {
          id: 2,
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
          source: 1,
          target: 2,
          bond: 1,
        },
      ],
    },
    p1_mol: {
      nodes: [
        {
          id: 0,
          atom: "Na",
          charge: "+",
          size: 23,
        },
        {
          id: 1,
          atom: "Na",
          charge: "+",
          size: 23,
        },
        {
          id: 2,
          atom: "Na",
          charge: "+",
          size: 23,
        },
        {
          id: 3,
          atom: "As",
          charge: "",
          size: 75,
        },
        {
          id: 4,
          atom: "O",
          charge: "-",
          size: 16,
        },
        {
          id: 5,
          atom: "O",
          charge: "-",
          size: 16,
        },
        {
          id: 6,
          atom: "O",
          charge: "-",
          size: 16,
        },
      ],
      links: [
        {
          source: 3,
          target: 4,
          bond: 1,
        },
        {
          source: 3,
          target: 5,
          bond: 1,
        },
        {
          source: 3,
          target: 6,
          bond: 1,
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
  {
    REACTION_LABEL:
      "<h2>hi chemical reaction here ...FE2 o 3  <sub>2</sub></h2>",
    DIFFICULTY: 1,
    isR2There: true,
    isP2There: true,
    r1_label: "Au<sub>2</sub>S<sub>3</sub>",
    r2_label: "H<sub>2</sub>",
    p1_label: "Au",
    p2_label: "H<sub>2</sub>S",
    r1_mol: {
      nodes: [
        {
          id: 0,
          atom: "Au",
          charge: "",
          size: 197,
        },
        {
          id: 1,
          atom: "Au",
          charge: "",
          size: 197,
        },
        {
          id: 2,
          atom: "S",
          charge: "",
          size: 32,
        },
        {
          id: 3,
          atom: "S",
          charge: "",
          size: 32,
        },
        {
          id: 4,
          atom: "S",
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
        {
          source: 0,
          target: 3,
          bond: 2,
        },
        {
          source: 1,
          target: 4,
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
          atom: "Au",
          charge: "",
          size: 197,
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
          atom: "S",
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
    r1_label: "V<sub>2</sub>O<sub>5</sub>",
    r2_label: "HCl",
    p1_label: "VOCl<sub>3</sub>",
    p2_label: "H<sub>2</sub>O",
    r1_mol: {
      nodes: [
        {
          id: 0,
          atom: "V",
          charge: "",
          size: 51,
        },
        {
          id: 1,
          atom: "V",
          charge: "",
          size: 51,
        },
        {
          id: 2,
          atom: "O",
          charge: "",
          size: 16,
        },
        {
          id: 3,
          atom: "O",
          charge: "",
          size: 16,
        },
        {
          id: 4,
          atom: "O",
          charge: "",
          size: 16,
        },
        {
          id: 5,
          atom: "O",
          charge: "",
          size: 16,
        },
        {
          id: 6,
          atom: "O",
          charge: "",
          size: 16,
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
          source: 1,
          target: 3,
          bond: 2,
        },
        {
          source: 1,
          target: 4,
          bond: 2,
        },
        {
          source: 2,
          target: 5,
          bond: 2,
        },
        {
          source: 2,
          target: 6,
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
          atom: "V",
          charge: "",
          size: 51,
        },
        {
          id: 1,
          atom: "O",
          charge: "",
          size: 16,
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
          size: 16,
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
    DIFFICULTY: 3,
    isR2There: true,
    isP2There: true,
    r1_label: "SiO<sub>2</sub>",
    r2_label: "HF",
    p1_label: "SiF<sub>4</sub>",
    p2_label: "H<sub>2</sub>O",
    r1_mol: {
      nodes: [
        {
          id: 0,
          atom: "Si",
          charge: "",
          size: 28,
        },
        {
          id: 1,
          atom: "O",
          charge: "",
          size: 16,
        },
        {
          id: 2,
          atom: "O",
          charge: "",
          size: 16,
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
          atom: "F",
          charge: "",
          size: 19,
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
          atom: "Si",
          charge: "",
          size: 28,
        },
        {
          id: 1,
          atom: "F",
          charge: "",
          size: 19,
        },
        {
          id: 2,
          atom: "F",
          charge: "",
          size: 19,
        },
        {
          id: 3,
          atom: "F",
          charge: "",
          size: 19,
        },
        {
          id: 4,
          atom: "F",
          charge: "",
          size: 19,
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
          size: 16,
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
    r1_label: "Zn",
    r2_label: "HCl",
    p1_label: "Zncl<sub>2</sub>",
    p2_label: "H<sub>2</sub>",
    r1_mol: {
      nodes: [
        {
          id: 0,
          atom: "Zn",
          charge: "",
          size: 65,
        },
      ],
      links: [],
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
          atom: "Zn",
          charge: "",
          size: 65,
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
  {
    REACTION_LABEL:
      "<h2>hi chemical reaction here ...FE2 o 3  <sub>2</sub></h2>",
    DIFFICULTY: 1,
    isR2There: true,
    isP2There: true,
    r1_label: "AgI",
    r2_label: "Na<sub>2</sub>S",
    p1_label: "Ag<sub>2</sub>S",
    p2_label: "NaI",
    r1_mol: {
      nodes: [
        {
          id: 0,
          atom: "Ag",
          charge: "",
          size: 108,
        },
        {
          id: 1,
          atom: "I",
          charge: "",
          size: 127,
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
    r2_mol: {
      nodes: [
        {
          id: 0,
          atom: "Na",
          charge: "",
          size: 23,
        },
        {
          id: 1,
          atom: "Na",
          charge: "",
          size: 23,
        },
        {
          id: 2,
          atom: "S",
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
    p1_mol: {
      nodes: [
        {
          id: 0,
          atom: "Ag",
          charge: "",
          size: 108,
        },
        {
          id: 1,
          atom: "Ag",
          charge: "",
          size: 108,
        },
        {
          id: 2,
          atom: "S",
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
          atom: "Na",
          charge: "",
          size: 23,
        },
        {
          id: 1,
          atom: "I",
          charge: "",
          size: 127,
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
