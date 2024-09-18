import { editarTarefa } from "./editarTarefa.js";
import { excluirTarefa } from "./excluirTarefa.js";

const listaTarefas = document.getElementById("lista-tarefas");
const listaConcluidos = document.getElementById("lista-concluidos");
let contador = 0;

export function criarTarefa(tarefa) {
  const itemDaLista = document.createElement("li");
  const containerItemLista = document.createElement("div");
  containerItemLista.classList.add("lista-item");

  const containerNomeDoItem = document.createElement("div");

  const containerCheckbox = document.createElement("div");
  containerCheckbox.classList.add("container-checkbox");

  const checkboxInput = document.createElement("input");
  checkboxInput.type = "checkbox";
  checkboxInput.classList.add("input-checkbox");
  checkboxInput.id = "checkbox-" + contador++;

  const checkboxLabel = document.createElement("label");
  checkboxLabel.setAttribute("for", checkboxInput.id);

  checkboxLabel.addEventListener("click", function (event) {
    const checkboxInput = event.currentTarget.querySelector(".input-checkbox");
    const checkboxCustomizado = event.currentTarget.querySelector(
      ".checkbox-customizado"
    );

    const itemTitulo = event.currentTarget
      .closest("li")
      .querySelector("#item-titulo");

    if (checkboxInput.checked) {
      checkboxCustomizado.classList.add("checked");
      itemTitulo.style.textDecoration = "line-through";
      listaConcluidos.appendChild(itemDaLista);
    } else {
      checkboxCustomizado.classList.remove("checked");
      itemTitulo.style.textDecoration = "none";
      listaTarefas.appendChild(itemDaLista);
    }
  });

  const checkboxCustomizado = document.createElement("div");
  checkboxCustomizado.classList.add("checkbox-customizado");

  checkboxLabel.appendChild(checkboxInput);
  checkboxLabel.appendChild(checkboxCustomizado);

  containerCheckbox.appendChild(checkboxLabel);
  containerNomeDoItem.appendChild(containerCheckbox);

  const nomeTarefa = document.createElement("p");
  nomeTarefa.id = "item-titulo";
  nomeTarefa.innerText = tarefa;
  containerNomeDoItem.appendChild(nomeTarefa);

  const containerBotoes = document.createElement("div");
  const botaoRemover = document.createElement("button");
  containerBotoes.classList.add("lista-icones");
  botaoRemover.classList.add("botao-acao");

  const botaoEditar = document.createElement("button");
  botaoEditar.classList.add("botao-acao");

  const imagemRemover = document.createElement("img");
  const imagemEditar = document.createElement("img");

  imagemRemover.src = "../assets/images/trash.svg";
  imagemRemover.alt = "Excluir tarefa";

  botaoRemover.addEventListener("click", function () {
    excluirTarefa(itemDaLista);
  });

  imagemEditar.src = "../assets/images/edit.svg";
  imagemEditar.alt = "Editar tarefa";

  botaoEditar.addEventListener("click", function () {
    editarTarefa(itemDaLista);
  });

  botaoRemover.appendChild(imagemRemover);
  containerBotoes.appendChild(botaoRemover);

  botaoEditar.appendChild(imagemEditar);
  containerBotoes.appendChild(botaoEditar);

  containerItemLista.appendChild(containerNomeDoItem);
  containerItemLista.appendChild(containerBotoes);

  itemDaLista.appendChild(containerItemLista);

  return itemDaLista;
}
