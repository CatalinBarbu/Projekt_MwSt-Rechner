const submite = document.getElementById("submite");
const textZu = document.getElementsByClassName("replace")[0];
submite.addEventListener("click", () => {
  nettoZuBrutto = document.getElementById("nettoZuBrutto").checked;
  bruttoZuNetto = document.getElementById("bruttoZuNetto").checked;
  mwst19 = document.getElementById("mwst19").checked;
  mwst7 = document.getElementById("mwst7").checked;
  outPutMwst = document.getElementById("outPutValueBetrag");
  inPut = parseFloat(document.getElementById("inPut").value);
  if (nettoZuBrutto && mwst19 && inPut) {
    outPut = (inPut * 1.19).toFixed(2);
    document.getElementById("outPutValue").innerHTML = outPut;
    outPutMwst.innerHTML = parseFloat(outPut - inPut).toFixed(2);
  } else if (nettoZuBrutto && mwst7 && inPut) {
    outPut = (inPut * 1.07).toFixed(2);
    document.getElementById("outPutValue").innerHTML = outPut;
    outPutMwst.innerHTML = parseFloat(outPut - inPut).toFixed(2);
  } else if (bruttoZuNetto && mwst19 && inPut) {
    outPut = (inPut / 1.19).toFixed(2);
    document.getElementById("outPutValue").innerHTML = outPut;
    outPutMwst.innerHTML = parseFloat(inPut - outPut).toFixed(2);
    textZu.innerHTML = "Netto Betrag";
  } else if (bruttoZuNetto && mwst7 && inPut) {
    outPut = (inPut / 1.07).toFixed(2);
    document.getElementById("outPutValue").innerHTML = outPut;
    outPutMwst.innerHTML = parseFloat(inPut - outPut).toFixed(2);
    textZu.innerHTML = "Netto Betrag";
  }
});
