const corpoDaPagina = document.body;
const botoesTema = document.querySelectorAll('input[name="cor_tema"]');
const botoesTamanho = document.querySelectorAll('input[name="tamanho_texto"]');

function aplicarTema(escolha) {
    if (escolha === 'escuro') {
        corpoDaPagina.classList.add('tema-escuro');
    } else if (escolha === 'claro') {
        corpoDaPagina.classList.remove('tema-escuro');
    } else if (escolha === 'automatico') {
        // Interroga o Sistema Operacional sobre a preferência de cor
        const sistemaEstaEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (sistemaEstaEscuro) {
            corpoDaPagina.classList.add('tema-escuro');
        } else {
            corpoDaPagina.classList.remove('tema-escuro');
        }
    }
}

function aplicarTamanho(escolha) {
    // Primeiro, removemos qualquer alteração anterior para garantir um estado limpo
    corpoDaPagina.classList.remove('texto-pequeno', 'texto-grande');
    
    // Adicionamos a classe correspondente (se for 'padrao', nenhuma classe é adicionada)
    if (escolha === 'pequeno') {
        corpoDaPagina.classList.add('texto-pequeno');
    } else if (escolha === 'grande') {
        corpoDaPagina.classList.add('texto-grande');
    }
}

botoesTema.forEach(botao => {
    botao.addEventListener('change', (evento) => {
        aplicarTema(evento.target.value);
    });
});

botoesTamanho.forEach(botao => {
    botao.addEventListener('change', (evento) => {
        aplicarTamanho(evento.target.value);
    });
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const botaoAuto = document.getElementById('cor-auto');
    // Só aplica a mudança automática se a bolinha 'Automático' estiver marcada
    if (botaoAuto && botaoAuto.checked) {
        aplicarTema('automatico');
    }
});

function inicializarAparencia() {
    const temaPadrao = document.getElementById('cor-auto');
    const tamanhoPadrao = document.getElementById('texto-padrao');

    // 1. Marca as "bolinhas" (radio buttons) como selecionadas na tela
    if (temaPadrao) {
        temaPadrao.checked = true;
        aplicarTema('automatico'); // Aplica o tema automático
    }
    
    if (tamanhoPadrao) {
        tamanhoPadrao.checked = true;
        aplicarTamanho('padrao'); // Aplica o tamanho de texto padrão
    }
}

inicializarAparencia();