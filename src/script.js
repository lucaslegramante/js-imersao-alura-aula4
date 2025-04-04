function jogar() {
  // Preciso criar uma lista com os 3 jogadores
  personagem = ["", "", ""];
  viloes = ["", "", ""];

  forcaPersonagem = 0;
  forcaViloes = 0;

  console.log("Inicio Viloes: " + viloes);
  console.log("Inicio Personagens: " + viloes);
  for (let i = 0; i < 3; i++) {
    escolhaPersonagem = prompt("Digite o nome do seu personagem " + (i + 1));
    personagem[i] = escolhaPersonagem;
    // calcular a força de cada jogador, e depois somar pra saber a força do time
    forcaPersonagem += Math.floor(Math.random() * 10) + 1;

    // viloes
    indiceAleatorio = Math.floor(Math.random() * 5);
    viloesPossiveis = [
      "Nazare Tedesco",
      "Odete Roitmann",
      "Flora",
      "Carminha",
      "Laura Prudente da Costa"
    ];
    viloes[i] = viloesPossiveis[indiceAleatorio];
    // calcular a forç de cada jogador do time do computador
    forcaViloes += Math.floor(Math.random() * 10) + 1;
  }
  console.log("Agora, o Array Personagem Contém: " + personagem);
  console.log("Agora o Array de Viloes Contém: " + viloes);

  // comparar os dois time para saber quem venceu
  if (forcaPersonagem > forcaViloes) {
    alert(
      "Seu time é muito forte! Voce ganhou a disputa de cabo de guerra! Sua força foi de: " +
        forcaPersonagem
    );
  } else {
    if (forcaPersonagem < forcaViloes) {
      alert(
        "Seu time é fraquinho. O Computador ganhou o cabo de guerra com a força de: " +
          forcaViloes
      );
    } else {
      alert("Os dois times tem a mesma força! Vocês empataram");
    }
  }
}
jogar();
