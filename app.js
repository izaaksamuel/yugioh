/**
 * Sorteio de uma carta
 * @author papiro
 */

// Array de cartas com objetos
const cartas = [
    { nome: "Dragão Alado", atributos: "ATK/135 DEF/220", imagem: "./img/dragaoAlado.jpg" },
    { nome: "Dragao Branco", atributos: "ATK/340 DEF/410", imagem: "./img/dragaoBranco.jpg" },
    { nome: "Dragao Negro", atributos: "ATK/235 DEF/390", imagem: "./img/dragaoNegro.jpg" },
    { nome: "Exodia", atributos: "ATK/460 DEF/330", imagem: "./img/exodia.jpg" },
    { nome: "kuriboh", atributos: "ATK/590 DEF/490", imagem: "./img/kuriboh.jpg" },
    { nome: "Maga Negra", atributos: "ATK/725 DEF/280", imagem: "./img/magaNegra.jpg" },
    { nome: "Mago Do Tempo", atributos: "ATK/810 DEF/625", imagem: "./img/magoTempo.jpg" },
    { nome: "Mago Negro", atributos: "ATK/150 DEF/780", imagem: "./img/magoNegro.jpg" },
    { nome: "obelisco", atributos: "ATK/210 DEF/590", imagem: "./img/obelisco.jpg" },
    { nome: "slifer", atributos: "ATK/900 DEF/750", imagem: "./img/slifer.jpg" }
];

function sortear() {
    // Lógica principal do sorteio da carta
    const indice = Math.floor(Math.random() * cartas.length);
    const carta = cartas[indice]; // Obtém a carta sorteada

    // Renderizar o canto superior esquerdo da carta
    document.getElementById('sup').innerHTML = `<div class="nome">${carta.nome}</div>`;

    // Renderizar o centro da carta
    const cc = document.getElementById('centro');
    cc.innerHTML = `<img src="${carta.imagem}">`;

    // Renderizar lado inferior da carta
    document.getElementById('inf').innerHTML = `<div class="card">${carta.atributos}</div>`;
}