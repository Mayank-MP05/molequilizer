class PeriodicTableInfoBox {
  constructor(periodictable, infoboxbackgroundid, infoboxid) {
    this._periodictable = periodictable;
    this._infoboxid = infoboxid;
    this._infoboxbackgroundid = infoboxbackgroundid;

    document.onkeyup = (event) => {
      if (
        event.key === "Escape" &&
        document.getElementById(this._infoboxid).style.visibility === "visible"
      ) {
        this.Hide();
      }
    };

    document.getElementById("btnCloseInfoBox").onclick = () => {
      this.Hide();
      bohrModelUpdator(1, true);
    };
  }

  Hide() {
    document.getElementById(this._infoboxid).style.visibility = "hidden";
    document.getElementById(this._infoboxbackgroundid).style.visibility =
      "hidden";
  }

  Show(atomicnumber) {
    const element = this._periodictable.GetElement(atomicnumber);
    let [extraEl] = extraDB.filter((el2) => el2.symbol === element.symbol);
    console.log(extraEl);
    document.getElementById("infoName").innerHTML = element.name;
    document.getElementById("infoAtomicNumber").innerHTML =
      element.atomicnumber;
    document.getElementById("infoChemicalSymbol").innerHTML = element.symbol;
    document.getElementById("infoCategory").innerHTML = element.category;
    document.getElementById("infoAtomicWeightConventional").innerHTML =
      element.atomicweight;
    document.getElementById("infoAtomicWeightStandard").innerHTML =
      element.atomicweightfull;
    document.getElementById("infoOccurrence").innerHTML = element.occurrence;
    document.getElementById("infoStateOfMatter").innerHTML =
      element.stateofmatter;
    document.getElementById("infoGroup").innerHTML = element.group;
    document.getElementById("infoPeriod").innerHTML = element.period;
    document.getElementById("infoBlock").innerHTML = element.block;

    document.getElementById(this._infoboxbackgroundid).style.visibility =
      "visible";
    document.getElementById(this._infoboxid).style.visibility = "visible";

    /* UI UPdates for Both elctronic configs and summary also the link */
    $("#elementDetailsModalLabel").html(`Details : ${element.name}`);
    $("#ElectronicConfig").html(
      `<span class="badge badge-success">Electronic Configuration : </span>${extraEl.electron_configuration}`
    );
    $("#ECSemantics").html(
      `<span class="badge badge-primary">EC Semantics : </span>${extraEl.electron_configuration_semantic}`
    );
    $("#BriefSummary").html(extraEl.summary);
    $("#readMoreLink").attr("href", extraEl.source);

    bohrModelUpdator(element.atomicnumber);
  }
}
