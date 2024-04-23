//resgatar informações do html (tipo de ingresso, quantidade, quantidade disponível)
//subtrair a quantidade comprada da quantidade disponível
//limpar campo quantidade após a "compra"
function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;

    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Insira uma quantidade válida.');
        return;
    }

    if (tipoIngresso == 'pista') {
        comprarPista(quantidade)
    }

    if (tipoIngresso == 'superior') {
        comprarSuperior(quantidade)
    }

    if (tipoIngresso == 'inferior') {
        comprarInferior(quantidade)
    }

    document.getElementById('qtd').value = '';
}

function comprarPista(quantidade) {
    let disponivelPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidade <= disponivelPista) {
        disponivelPista = disponivelPista - quantidade;
        document.getElementById('qtd-pista').textContent = disponivelPista;
        alert('Compra realizada com sucesso!');
    } else {
        alert('A quantidade selecionada precisa estar disponível!');
    }
}

function comprarSuperior(quantidade) {
    let disponivelSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidade <= disponivelSuperior) {
        disponivelSuperior = disponivelSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = disponivelSuperior;
        alert('Compra realizada com sucesso!');
    } else {
        alert('A quantidade selecionada precisa estar disponível!');
    }
}

function comprarInferior(quantidade) {
    let disponivelInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidade <= disponivelInferior) {
        disponivelInferior = disponivelInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = disponivelInferior;
        alert('Compra realizada com sucesso!');
    } else {
        alert('A quantidade selecionada precisa estar disponível!');
    }
}