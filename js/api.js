const api = {
    async buscarPensamentos() {
        try {
            // Busca os dados na api e obtem como retorno um JSON
            const response = await fetch("http://localhost:3000/pensamentos");
            // Converte o JSON em formato objeto JS
            return await response.json();
        
        } catch (error) {
            alert(`Não foi possivel acessar a aplicação, erro: ${error}`);
            throw error;
        }
    },
    async cadastrarPensamento(pensamento) {
        try {
            const response = await fetch("http://localhost:3000/pensamentos", {
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
    }

}

export default api;

