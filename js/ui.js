import api from "./api.js";

const ui = {

    async renderizarPesamentos() {

        const listaPensamentos = document.getElementById("lista-pensamentos");

        try {
            const pensamentos = await api.buscarPensamentos()

            pensamentos.forEach(ui.adicionarPensamento);

        } catch (error) {
            alert(`Erro ao renderizar pensamento, ${error}`);
        }
    },

    adicionarPensamento(pensamento) {
        
        const listaPensamentos = document.getElementById("lista-pensamentos");
        
        const liPensamento = document.createElement("li");
        liPensamento.setAttribute("data-id", pensamento.id);
        liPensamento.classList.add("li-pensamento");

        const iconeAspas = document.createElement("img");
        iconeAspas.src = "assets/imagens/aspas-azuis.png";
        iconeAspas.classList.add("icone-aspas");

        const pensamentoConteudo = document.createElement("div");
        pensamentoConteudo.classList.add("pensamento-conteudo");
        pensamentoConteudo.textContent = pensamento.conteudo;

        const pensamentoAutoria= document.createElement("div");
        pensamentoAutoria.classList.add("pensamento-autoria");
        pensamentoAutoria.textContent = pensamento.autoria;

        liPensamento.appendChild(iconeAspas);
        liPensamento.appendChild(pensamentoConteudo);
        liPensamento.appendChild(pensamentoAutoria);

        listaPensamentos.appendChild(liPensamento);
    }
}

export default ui;