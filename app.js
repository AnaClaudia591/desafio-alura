alert(' Boas Vindas ao desafio' );
// 3. Sistema de pontuação para um jogo.
let pontuacao = prompt("Digite sua pontuação no jogo:");
pontuacao = parseInt(pontuacao); // Converte o texto para número inteiro
if (pontuacao >= 100) {

    alert("Parabéns, você venceu!");

} else {

    alert("Tente novamente para ganhar.");
}