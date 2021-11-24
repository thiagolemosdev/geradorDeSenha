import geraSenha from "./geradores";

const senhaGerada = document.querySelector(".senha-gerada");
const qtdCaracteres = document.querySelector(".qtd-caracteres");
const chkMaiusculas = document.querySelector(".maiusculas");
const chkMinusculas = document.querySelector(".minusculas");
const chkNumeros = document.querySelector(".numeros");
const chkSimbolos = document.querySelector(".simbolos");
const gerarSenha = document.querySelector(".gerar-senha");

export default () => {
  gerarSenha.addEventListener("click", () => {
    senhaGerada.innerHTML = gera();
  });
};

function gera() {
  const senha = geraSenha(
    qtdCaracteres.value,
    chkMaiusculas.checked,
    chkMinusculas.checked,
    chkNumeros.checked,
    chkSimbolos.checked
  );
  return senha || 'NADA SELECIONADO.';
}