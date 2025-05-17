// Aqui ele usa o setItem para salvar o nome no localStorage através da variável nome

function salvarNome() {
  const nome = document.getElementById("nomeInput").value;
  localStorage.setItem("nome", nome);
  alert("Nome salvo no localStorage!");
}

// Aqui ele usa o getItem para recuperar o nome do localStorage e se o nomeSalvo existir, ele mostra na tela, mas se não existir, ele mostra uma mensagem dizendo que não existe
// Ele cria a variável nomeSalvo para armazenar o nome que foi salvo no localStorage e a variável resultado para armazenar o elemento HTML onde o nome será exibido
// Logo, o resultado.textContent é o que  vai aparecer na tela, ou seja, o nome que foi salvo no localStorage que está na variável nomeSalvo

function mostrarNome() {
  const nomeSalvo = localStorage.getItem("nome");
  const resultado = document.getElementById("resultado");

  if (nomeSalvo) {
    resultado.textContent = "Nome salvo: " + nomeSalvo;
  } else {
    resultado.textContent = "Nenhum nome salvo.";
  }
}

// Aqui ele usa o removeItem para remover o nome do localStorage e mostra uma mensagem dizendo que foi removido
// Ele utiliza o document.getElementById para pegar o elemento HTML onde o resultado será exibido e deia o textContent vazio para não mostrar nada na tela

function removerNome() {
  localStorage.removeItem("nome");
  alert("Nome removido do localStorage.");
  document.getElementById("resultado").textContent = "";
}

// Aqui ele usa o clear para remover tudo do locaLStorage e mostra uma mensagem dizendo que foi removido
// Ele utiliza o document.getElementById para pegar o elemento HTML onde o resultado será exibido e deia o textContent vazio para não mostrar nada na tela, isso poderia não ser necessário, mas é uma boa prática para não deixar nada na tela

function limparTudo() {
  localStorage.clear();
  alert("Tudo removido do localStorage.");
  document.getElementById("resultado").textContent = "";
}
