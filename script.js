// Função para fazer os corações desaparecerem um por um
function desaparecerCoracoes() {
    const coracoes = document.querySelectorAll('.coracao');
    let i = 0;

    // Função que faz um coração desaparecer de cada vez
    const intervalo = setInterval(function() {
        if (i < coracoes.length) {
            coracoes[i].style.transition = "opacity 1s ease";
            coracoes[i].style.opacity = "0"; // Faz o coração desaparecer
            i++;
        } else {
            clearInterval(intervalo); // Quando todos os corações desaparecerem, para a animação
            mostrarCarta(); // Chama a função para mostrar a carta
        }
    }, 500); // A cada 500ms, um coração desaparecerá
}

// Função para exibir a carta com animação
function mostrarCarta() {
    const carta = document.createElement('div');
    carta.classList.add('carta');
    carta.innerHTML = `
        <p>oi livia piton
blablablablablablablablablablablablabla
blablablablablablablablablablablablabla
        <p><strong>joao da silva</strong></p>
    `;
    
    // Adiciona a carta ao corpo da página
    document.body.appendChild(carta);

    // Aplica a animação para mostrar a carta
    setTimeout(function() {
        carta.style.transition = "opacity 1s ease, transform 1s ease";
        carta.style.opacity = "1";
        carta.style.transform = "scale(1)";
    }, 500); // Inicia a animação 500ms após os corações desaparecerem
}

// Modifique a função verificarNome para chamar desaparecerCoracoes
function verificarNome() {
    const nome = document.getElementById("nomeInput").value; // Pega o valor digitado
    const mensagem = document.getElementById("mensagem");
    const input = document.getElementById("nomeInput"); // Referência ao campo de texto
    const quadrado = document.querySelector(".quadrado"); // O quadrado que contém o input e o botão de verificação

    if (nome.toLowerCase() === "livia da silva") {
        mensagem.textContent = "boa livia ivia vose acerto";
        mensagem.style.color = "green"; // Verde para sucesso

        // Exibe a mensagem por alguns segundos (2 segundos)
        setTimeout(function() {
            quadrado.style.transition = "opacity 1s ease, transform 1s ease"; // Animação do quadrado
            quadrado.style.opacity = "0"; // Fading out
            quadrado.style.transform = "scale(0)"; // Diminui o quadrado

            // Aguarda a animação do quadrado desaparecer e depois começa a sumir os corações
            setTimeout(function() {
                desaparecerCoracoes(); // Inicia o desaparecimento dos corações
            }, 1000); // Espera 1 segundo para o quadrado desaparecer antes de começar

        }, 2000); // 2000 milissegundos = 2 segundos de espera para a transição

    } else {
        mensagem.textContent = "Nome incorreto. Tente novamente.";
        mensagem.style.color = "red"; // Vermelho para erro
        input.value = ""; // Limpa o campo de texto
        input.focus(); // Coloca o foco de volta no campo de texto
    }
}

// Função que verifica se a tecla pressionada foi Enter
function verificarTecla(event) {
    if (event.key === "Enter") { // Verifica se a tecla pressionada foi Enter
        verificarNome(); // Chama a função de verificação
    }
}
