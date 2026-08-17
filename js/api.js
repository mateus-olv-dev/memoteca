const URL_BASE = "http://localhost:3000/pensamentos";

const api = {
    async buscarPensamentos() {
        try {
            // Busca os dados na api e obtem como retorno um JSON
            const response = await fetch(`${URL_BASE}`);
            // Converte o JSON em formato objeto JS
            return await response.json();
        
        } catch (error) {
            alert(`Não foi possivel acessar a aplicação, erro: ${error}`);
            throw error;
        }
    },
    async cadastrarPensamento(pensamento) {
        try {
            const response = await fetch(`${URL_BASE}`, {
                // Metodo p/ enviar dados p/ o back-end
                method: "POST",
                headers: {
                    // Define o tipo de conteudo que será enviado via API
                    "Content-Type": "application/json"
                },
                // Faz a conversão do dado a ser enviado, de objeto JS para JSON 
                body: JSON.stringify(pensamento)
            })
            return await response.json();

        } catch (error) {
            alert(`Não foi possivel cadastrar o pensamento, erro: ${error}`);
            throw error;
        }
    },
    async buscarPensamentoPorId(id) {
        try {
            const response = await fetch(`${URL_BASE}/${id}`);
            // Converte o JSON em formato objeto JS
            return await response.json();
        
        } catch (error) {
            alert(`Não foi possivel buscar o pensamento, ${error}`);
            throw error;
        }
    },
    async editarPensamento(pensamento) {

        try {
            const response = await fetch(`${URL_BASE}/${pensamento.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pensamento)
            })
            return await response.json();

        } catch (error) {
            alert(`Não foi possivel editar o pensamento, erro: ${error}`);
        }
    },
    async excluirPensamento(id) {
        try {
            const response = await fetch(`${URL_BASE}/${id}`, {
                method: "DELETE"
            })

        } catch (error) {
            alert(`Não foi possivel excluir o pensamento, erro: ${error}`);
        }
    }


}

export default api;

