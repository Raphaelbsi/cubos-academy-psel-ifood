function solucao(precos) {
  var total = 0;
  var valor = 0;
  for (var i = 0; i < precos.length; i++) {
    total += precos[i];
    if (precos[i] > 200) {
      valor += 1;
    }
  }
  if (total > 1000 && valor >= 1) {
    console.log("PREMIUM");
  } else if (total > 1000) {
    console.log("VIP");
  } else if (total < 1000) {
    console.log("NORMAL");
  }
}
