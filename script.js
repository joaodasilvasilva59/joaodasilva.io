function verificarNome() {
    const nome = document.getElementById("nomeInput").value; // Pega o valor digitado
    const mensagem = document.getElementById("mensagem");
    const input = document.getElementById("nomeInput"); // Referência ao campo de texto

    if (nome === "livia da silva") {
        mensagem.textContent = "Nome correto!"; // Mensagem para nome correto
        mensagem.style.color = "green"; // Verde para sucesso
    } else {
        mensagem.textContent = "Nome incorreto. Tente novamente."; // Mensagem para nome incorreto
        mensagem.style.color = "red"; // Vermelho para erro

        // Limpa o campo de texto após nome incorreto
        input.value = "";
        input.focus(); // Coloca o foco de volta na caixa de texto para o próximo preenchimento
    }
}

// Função que verifica se a tecla pressionada foi Enter
function verificarTecla(event) {
    if (event.key === "Enter") { // Verifica se a tecla pressionada foi Enter
        verificarNome(); // Chama a função de verificação
    }
}


