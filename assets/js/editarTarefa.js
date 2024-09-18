const editarTarefa = (element) => {
  let novaTarefa = prompt("Digite a nova tarefa:");

  if (novaTarefa !== null && novaTarefa.trim() !== "") {
    const tarefaAtualizada = element.querySelector("#item-titulo");
    tarefaAtualizada.textContent = novaTarefa;

    const concluido = element.querySelector(".input-checkbox").checked;

    if (concluido) {
      element.querySelector(".input-checkbox").checked = true;
      element.querySelector(".checkbox-customizado").classList.add("checked");
      tarefaAtualizada.style.textDecoration = "line-through";
    }
  }
};

export { editarTarefa };