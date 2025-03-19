//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Seleciona o campo de entrada e o botão de adicionar
const inputNome = document.getElementById('amigo');
const btnAdicionar = document.getElementById('adicionar');

let amigos = [];

function adicionarAmigo() {
    const nome = inputNome.value;

    if(nome === ''){
       alert('Por favor, insira um nome.');
       return;
    }

    amigos.push(nome);

    inputNome.value = "";

    console.log(amigos);

    exibirListaAmigos();
}

function exibirListaAmigos() {
    // Seleciona o elemento da lista HTML
    const listaAmigos = document.getElementById('listaAmigos');
  
    // Limpa a lista antes de adicionar novos elementos
    listaAmigos.innerHTML = '';
  
    // Percorre o array de amigos e adiciona cada nome como um item da lista
    for (let i = 0; i < amigos.length; i++) { 
      const nomeAmigo = amigos[i];
      const novoItemLista = document.createElement('li');
      novoItemLista.textContent = nomeAmigo;
      listaAmigos.appendChild(novoItemLista);
    }
  }

  function sortearAmigo() {
    // 1. Validar se há amigos disponíveis
    if (amigos.length === 0) {
      alert("Não há amigos na lista para sortear.");
      return;
    }
  
    // 2. Gerar um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  
    // 3. Obter o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];
  
    // 4. Mostrar o resultado
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;
  }



