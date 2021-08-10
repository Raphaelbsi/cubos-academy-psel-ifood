function solucao(primeiraLetra, segundaLetra, palavras) {
  var aux2 = [];
  for (var i = 0; i < palavras.length; i++) {
    var aux = palavras[i];
    if (aux[0] === primeiraLetra && aux[1] === segundaLetra) {
      console.log(palavras[i]);
      aux2.push(aux);
    }
  }
  if (aux2.length == 0) {
    console.log("NENHUMA");
  }
}
