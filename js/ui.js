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
    async preencherFormulario(pensamentoId) {

        const pensamento = await api.buscarPensamentoPorId(pensamentoId);
        document.getElementById("pensamento-id").value = pensamento.id;
        document.getElementById("pensamento-conteudo").value = pensamento.conteudo;
        document.getElementById("pensamento-autoria").value = pensamento.autoria;

    },

    adicionarPensamento(pensamento) {
        
        const listaPensamentos = document.getElementById("lista-pensamentos");
        const liPensamento = document.createElement("li");
        const iconeAspas = document.createElement("img");
        const pensamentoConteudo = document.createElement("div");
        const pensamentoAutoria = document.createElement("div");

        const botaoEditar = document.createElement("button");
        const iconeEditar = document.createElement("img");

        const botaoExcluir = document.createElement("button");
        const iconeExcluir = document.createElement("img");

        const containerBotoes= document.createElement("div");



        liPensamento.setAttribute("data-id", pensamento.id);
        liPensamento.classList.add("li-pensamento");

        iconeAspas.src = "assets/imagens/aspas-azuis.png";
        iconeAspas.classList.add("icone-aspas");

        pensamentoConteudo.classList.add("pensamento-conteudo");
        pensamentoConteudo.textContent = pensamento.conteudo;

        pensamentoAutoria.classList.add("pensamento-autoria");
        pensamentoAutoria.textContent = pensamento.autoria;

        botaoEditar.classList.add("botao-editar");
        botaoEditar.onclick = () => ui.preencherFormulario(pensamento.id);

        iconeEditar.classList.add("icone-editar");
        iconeEditar.src = "assets/imagens/icone-editar.png";

        botaoEditar.appendChild(iconeEditar);

        botaoExcluir.classList.add("botao-excluir");
        botaoExcluir.onclick = async () => {
            try {
                await api.excluirPensamento(pensamento.id);
                ui.renderizarPesamentos();
            } catch (error) {
                alert("Erro ao excluir pensamento");
            }
           
        };

        iconeExcluir.classList.add("icone-excluir");
        iconeExcluir.src = "assets/imagens/icone-excluir.png";

        botaoExcluir.appendChild(iconeExcluir);


        containerBotoes.classList.add("icones");
        containerBotoes.appendChild(botaoEditar);
        containerBotoes.appendChild(botaoExcluir);

        liPensamento.appendChild(iconeAspas);
        liPensamento.appendChild(pensamentoConteudo);
        liPensamento.appendChild(pensamentoAutoria);
        liPensamento.appendChild(containerBotoes);

        listaPensamentos.appendChild(liPensamento);
    }
}

export default ui;