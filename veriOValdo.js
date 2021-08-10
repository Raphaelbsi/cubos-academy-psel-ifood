function solucao(obras) {
  var atual = 0;
  var maior = 0;

  for (var i = 0; i < obras.length; i++) {
    atual = obras[i].valor;
    if (atual >= maior) {
      maior = atual;
    }
  }
  for (var j = 0; j < obras.length; j++) {
    if (obras[j].valor == maior) {
      console.log(obras[j].nome);
      break;
    }
  }
}
