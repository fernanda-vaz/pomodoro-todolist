import { criarTarefa } from "./criarTarefa.js";

const tarefa = document.getElementById("nova-tarefa");
const listaTarefas = document.getElementById("lista-tarefas");

export function adicionarTarefa(event) {
    event.preventDefault();

    if (tarefa.value === "") {
        alert("Por favor, insira uma tarefa.");
        return;
    }

    const itemDaLista = criarTarefa(tarefa.value);
    listaTarefas.appendChild(itemDaLista);
    tarefa.value = "";
}