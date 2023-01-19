const idSpan = document.getElementById("id");
const adviceSpan = document.getElementById("advice");
const botao = document.getElementById("botao");

async function fetchApi() {
  const conexao = await fetch("https://api.adviceslip.com/advice", {
    cache: "no-cache"
  });
  const conexaoConvertida = await conexao.json();

  idSpan.textContent = conexaoConvertida.slip.id;
  adviceSpan.textContent = conexaoConvertida.slip.advice;
}

fetchApi();

botao.addEventListener("click", fetchApi);
