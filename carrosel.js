function solucao(sequencia) {
  var indice = [0, 1, 2, 3, 4, 5, 6];
  var direita = ">";
  var esquerda = "<";
  var imagem = 0;
  var fim = sequencia.length;

  for (var i = 0; i < sequencia.length; i++) {
    if (imagem == 7 && sequencia[i] == direita) {
      imagem = 0;
    }
    if (imagem == 0 && sequencia[i] == esquerda) {
      imagem = 7;
    }
    if (sequencia[i] == direita) {
      imagem += 1;
      if (imagem == 7) {
        imagem = 0;
      }
    }
    if (sequencia[i] == esquerda) {
      imagem -= 1;
      if (imagem == 0) {
        imagem = 7;
      }
    }
  }
  console.log(indice[imagem]);
}
