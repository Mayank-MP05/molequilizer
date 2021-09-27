const bohrModelUpdator = () => {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  var atomConfig = {
    //All atoms share this base-config
    nucleusRadius: isMobile ? 10 : 14,
    electronRadius: isMobile ? 1.2 : 1.5,
    symbolOffset: 7,
    animationTime: 600,
    orbitalColor: "rgba(24, 255, 255, 0.3)",
    orbitalWidth: 0.5,
    nucleusColor: "rgba(3, 169, 244, 0.2)",
    electronColor: "rgba(24, 255, 255, 0.6)",
  };
  var rotationalPatterns = [
    "parabolaUp",
    "parabolaDown",
    "linearPositive",
    "linearNegative",
    "cubedPositive",
    "cubedNegative",
    "random",
    "uniform",
  ];
  var orbitalRotationConfig = { pattern: { preset: "" } },
    alternate = [true, false];
  // TODO: Add info button about animation; modals with atomic info
  function getRandomInt(min, max) {
    // to randomly assign rotational pattern and alternating bool
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var glow = function ($el) {
    $el.addClass("box-glow");
    setTimeout(function () {
      $el.removeClass("box-glow");
    }, 500);
  };

  var speed = 180, // how fast the atoms come into existence
    myAtoms = [];
  // Check for mobile

  let arr = PeriodicGameState.atomicNoArr;

  // if (!isMobile) {
  $("#periodic-container").html("");
  for (var i = 1; i <= arr.length; i++) {
    // iterate over all existing atoms
    (function (i) {
      setTimeout(function () {
        $("#periodic-container").append(
          !isMobile
            ? `<div class=\'col-md-2 element-container\' id='bohr-container-${i}'></div>`
            : `<div class=\'col-12 element-container\' id='bohr-container-${i}'></div>`
        );
        atomConfig.numElectrons = arr[i - 1];
        atomConfig.idNumber = i;
        atomConfig.containerId = `#bohr-container-${i}`;
        var $container = $(`#bohr-container-${i}`);
        var newAtom = new Atom(atomConfig);
        var $atom = $(`#atom-${i}`);
        $atom.addClass("clickable-atom");
        var rotateConfig = { speed: 300, clockwise: true };
        newAtom.rotate(rotateConfig);
        myAtoms.push(newAtom);
      }, i * speed);
    })(i);
  }
};

bohrModelUpdator();
