import ui from "./ui.js";
import api from "./api.js";


document.addEventListener("DOMContentLoaded", () => {
    ui.renderizarPesamentos();

    const formularioPensamento = document.getElementById("pensamento-form");

    formularioPensamento.addEventListener("submit", manipularSubmissaoForm);
})

async function manipularSubmissaoForm (event) {

    event.preventDefault();

    const id = document.getElementById("pensamento-id").value;
    const conteudo = document.getElementById("pensamento-conteudo").value;
    const autoria = document.getElementById("pensamento-autoria").value;


    try {

        await api.cadastrarPensamento({ conteudo, autoria });
        ui.renderizarPesamentos();

    } catch (error) {
        alert(`Erro ao cadastrar pensamento, {error}`);
    }
}


const btCancelar = document.getElementById("botao-cancelar");
    btCancelar.addEventListener("click", () => {
       const formulario = document.querySelector("form");
       formulario.reset();
    })