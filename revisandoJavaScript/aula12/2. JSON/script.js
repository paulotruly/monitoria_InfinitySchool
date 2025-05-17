// A função adicionarNome adiciona um nome ao localStorage, primeiro ela atribui o valor do input a uma variável.

// Depois de colocar o nomeInput em uma variável, ela cria mais uma variável chamada nome, que recebe o valor do input. Em seguida, mais uma variável chamada nomes, que recebe o JSON.parse do localStorage, que tem a função de transformar o JSON em uma array, porque o localStorage só aceita strings. Em seguida, usa o getItem para pegar o que está no localStorage, e o || [] é para caso não tenha nada no localStorage, ele retorna uma array vazia. 

// Em seguida, o nomes.push(nome) adiciona o nome que foi digitado no input à array nomes. Depois disso, o localStorage.setItem é usado para adicionar o nome ao localStorage, e o JSON.stringify transforma a array em uma string novamente.

// Por último, o input.value é limpo e um alert é exibido para avisar que o nome foi adicionado.

function adicionarNome() {
  const input = document.getElementById("nomeInput"); // Pega o input pelo ID
  const nome = input.value; // Atribui o valor do input a variável nome

  let nomes = JSON.parse(localStorage.getItem("nomes")) || []; // Pega o que está no localStorage e transforma em array, ou retorna uma array vazia caso não tenha nada

  nomes.push(nome); // Adiciona o nome à array nomes pra adicionar ao locaLStorage

  localStorage.setItem("nomes", JSON.stringify(nomes)); // Adiciona o nome ao localStorage, transformando a array em string novamente

  input.value = ""; // Limpa o input
  alert("Nome adicionado!"); // Exibe um alert]
  
  // Caso a pergunta seja se dá pra adiciona mais de um nome, a resposta é sim, você pode adicionar quantos nomes quiser, só precisa repetir o processo de adicionar o nome e clicar no botão "Adicionar nome". 
}

// A função mostrarNomes primeiro cria a variável listaElement, o que pega o elemento da lista pelo ID. Em seguida, cria o listaElement.innerHTML, que limpa a lista. 
// O const nomes = JSON.parse(localStorage.getItem("nome")) || []; é o mesmo processo do anterior, só que aqui ele pega o que está no localStorage e transforma em array, pra retornar os nomes que foram adicionados a seguir.
// A função forEach percorre a array nomes, e para cada nome, ela cria um elemento li, que é um item da lista, igualmente ao HTML, no textContent, ela coloca o nome, e depois adiciona a li ao elemento listaElement, que é uma lista que foi criada anteriormente, caso você adicione muitos nomes, eles vão aparecer na lista. 

function mostrarNomes() {
  const listaElement = document.getElementById("listaNomes"); 
  listaElement.innerHTML = ""; 

  const nomes = JSON.parse(localStorage.getItem("nomes")) || []; 

  nomes.forEach((nome) => { // Para cada nome na array nomes
    const li = document.createElement("li"); 
    li.textContent = nome; // Adiciona o nome ao elemento li
    listaElement.appendChild(li); // Adiciona o elemento li à lista
  });
}
