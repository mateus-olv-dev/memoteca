import api from "./api.js";

const ui = {
    async renderizarPesamentos() {
        const listaPensamentos = document.getElementById("lista-pensamentos");

        try {
            const pensamentos = await api.buscarPensamentos()

            pensamentos.forEach(pensamento => {
                
                listaPensamentos.innerHTML += `
                <li class = "li-pensamento" data-id"${pensamento.id}>
                    <img class="icone-aspas" src="assets/imagens/aspas-azuis.png">
                    <div class="pensamento-conteudo">${pensamento.conteudo}</div>
                    <div class="pensamento-autoria">${pensamento.autoria}</div> 
                </li>
                `
            });
        } catch (error) {
            alert(`Erro ao renderizar pensamento, erro: ${error}`);
        }
    }
}

export default ui;