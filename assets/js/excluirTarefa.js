const listaTarefas = document.getElementById("lista-tarefas");
const listaConcluidos = document.getElementById("lista-concluidos");

const excluirTarefa = (element) => {
  let confirmacao = confirm("Tem certeza que deseja excluir esse item?");

  if (confirmacao) {
    element.remove();
  }
};

export { excluirTarefa };
