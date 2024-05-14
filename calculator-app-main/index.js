let valorTela = '';
let operacao = 0;
let num1 = 0;
let num2 = 0;
let result = 0;
let calc = 0;

function addZero() {
    valorTela = valorTela + '0';
    document.getElementById('screen').innerText = valorTela;
}

function addOne() {
    valorTela = valorTela + '1';
    document.getElementById('screen').innerText = valorTela;
}

function addTwo() {
    valorTela = valorTela + '2';
    document.getElementById('screen').innerText = valorTela;
}

function addThree() {
    valorTela = valorTela + '3';
    document.getElementById('screen').innerText = valorTela;
}

function addFour() {
    valorTela = valorTela + '4';
    document.getElementById('screen').innerText = valorTela;
}

function addFive() {
    valorTela = valorTela + '5';
    document.getElementById('screen').innerText = valorTela;
}

function addSix() {
    valorTela = valorTela + '6';
    document.getElementById('screen').innerText = valorTela;
}

function addSeven() {
    valorTela = valorTela + '7';
    document.getElementById('screen').innerText = valorTela;
}

function addEight() {
    valorTela = valorTela + '8';
    document.getElementById('screen').innerText = valorTela;
}

function addNine() {
    valorTela = valorTela + '9';
    document.getElementById('screen').innerText = valorTela;
}

function addPoint() {
    valorTela = valorTela + '.';
    document.getElementById('screen').innerText = valorTela;
}

function reset() {
    valorTela = '';
    document.getElementById('screen').innerText = valorTela;
    calc = 0;
    result = 0;
}

function Delete() {
    let novoValorTela = '';
    for (let i = 0; i < (valorTela.length) - 1; i++) {
        novoValorTela = novoValorTela + valorTela[i];
    }
    valorTela = novoValorTela;
    document.getElementById('screen').innerText = valorTela;
}

function adicao() {
    operacao = 1;
    num1 = Number(valorTela);
    valorTela = '';
}

function subtracao() {
    operacao = 2;
    num1 = Number(valorTela);
    valorTela = '';
}

function multiplicacao() {
    operacao = 3;
    num1 = Number(valorTela);
    valorTela = '';
}

function divisao() {
    operacao = 4;
    num1 = Number(valorTela);
    valorTela = '';
}

function calculate() {
    if (calc == 0) {
        calculate1();
    } else {
        calculate2();
    }
}

function calculate1() {
    num2 = Number(valorTela);
    valorTela = '';
    if (operacao == 1) {
        result = num1 + num2;
        valorTela = String(result);
        document.getElementById('screen').innerText = valorTela;
    } else if (operacao == 2) {
        result = num1 - num2;
        valorTela = String(result);
        document.getElementById('screen').innerText = valorTela;
    } else if (operacao == 3) {
        result = num1 * num2;
        valorTela = String(result);
        document.getElementById('screen').innerText = valorTela;
    } else if (operacao == 4) {
        result = num1 / num2;
        valorTela = String(result);
        document.getElementById('screen').innerText = valorTela;
    } else {
        valorTela = 'erro';
        valorTela = String(result);
        document.getElementById('screen').innerText = valorTela;
    }
    calc = 1;
    num1 = 0;
    num2 = 0;
}

function calculate2() {
    num1 = result;
    num2 = Number(valorTela);
    if (operacao == 1) {
        result = num1 + num2;
        valorTela = String(result);
        document.getElementById('screen').innerText = valorTela;
    } else if (operacao == 2) {
        result = num1 - num2;
        valorTela = String(result);
        document.getElementById('screen').innerText = valorTela;
    } else if (operacao == 3) {
        result = num1 * num2;
        valorTela = String(result);
        document.getElementById('screen').innerText = valorTela;
    } else if (operacao == 4) {
        result = num1 / num2;
        valorTela = String(result);
        document.getElementById('screen').innerText = valorTela;
    } else {
        valorTela = 'erro';
        valorTela = String(result);
        document.getElementById('screen').innerText = valorTela;
    }
}


// Mudanças de tema do app

function theme2() {
    document.body.style.backgroundColor = 'hsl(0, 0%, 90%)';
    document.getElementById('calc').style.color = 'black';
    document.getElementById('theme-').style.color = 'black';
    document.getElementById('nums').style.color = 'black';
    document.getElementById('screen').style.color = 'black';
    document.getElementById('span1').style.display = 'none';
    document.getElementById('span2').style.display = 'flex';
    document.getElementById('span3').style.display = 'none';
    document.getElementById('botao1').style.backgroundColor = 'hsl(0, 5%, 81%)';
    document.getElementById('botao2').style.backgroundColor = 'hsl(0, 5%, 81%)';
    document.getElementById('botao3').style.backgroundColor = 'hsl(0, 5%, 81%)';
    document.getElementById('theme-bottom').style.backgroundColor = 'hsl(0, 5%, 81%)';
    document.getElementById('middle-calculator').style.backgroundColor = 'hsl(0, 0%, 93%)';
    document.getElementById('bottom-calculator').style.backgroundColor = 'hsl(0, 5%, 81%)';
    document.getElementById('del').style.backgroundColor = 'hsl(185, 69%, 42%)';
    document.getElementById('reset').style.backgroundColor = 'hsl(185, 69%, 42%)';
    document.getElementById('igual').style.backgroundColor = 'hsl(29, 100%, 50%)';
    document.getElementById('atb').style.color = 'black';
}

function theme1() {
    document.body.style.backgroundColor = 'hsl(222, 26%, 31%)';
    document.getElementById('calc').style.color = 'white';
    document.getElementById('theme-').style.color = 'white';
    document.getElementById('nums').style.color = 'white';
    document.getElementById('screen').style.color = 'white';
    document.getElementById('span1').style.display = 'flex';
    document.getElementById('span2').style.display = 'none';
    document.getElementById('span3').style.display = 'none';
    document.getElementById('botao1').style.backgroundColor = 'hsl(223, 31%, 20%)';
    document.getElementById('botao2').style.backgroundColor = 'hsl(223, 31%, 20%)';
    document.getElementById('botao3').style.backgroundColor = 'hsl(223, 31%, 20%)';
    document.getElementById('theme-bottom').style.backgroundColor = 'hsl(223, 31%, 20%)';
    document.getElementById('middle-calculator').style.backgroundColor = 'hsl(224, 36%, 15%)';
    document.getElementById('bottom-calculator').style.backgroundColor = 'hsl(223, 31%, 20%)';
    document.getElementById('del').style.backgroundColor = 'hsl(225, 21%, 49%)';
    document.getElementById('reset').style.backgroundColor = 'hsl(225, 21%, 49%)';
    document.getElementById('igual').style.backgroundColor = 'hsl(6, 63%, 50%)';
    document.getElementById('atb').style.color = 'white';
}

function theme3() {
    document.body.style.backgroundColor = 'hsl(268, 75%, 9%)';
    document.getElementById('calc').style.color = 'hsl(52, 100%, 62%)';
    document.getElementById('theme-').style.color = 'hsl(52, 100%, 62%)';
    document.getElementById('nums').style.color = 'hsl(52, 100%, 62%)';
    document.getElementById('screen').style.color = 'hsl(52, 100%, 62%)';
    document.getElementById('span1').style.display = 'none';
    document.getElementById('span2').style.display = 'none';
    document.getElementById('span3').style.display = 'flex';
    document.getElementById('botao1').style.backgroundColor = 'hsl(268, 71%, 12%)';
    document.getElementById('botao2').style.backgroundColor = 'hsl(268, 71%, 12%)';
    document.getElementById('botao3').style.backgroundColor = 'hsl(268, 71%, 12%)';
    document.getElementById('theme-bottom').style.backgroundColor = 'hsl(268, 71%, 12%)';
    document.getElementById('middle-calculator').style.backgroundColor = 'hsl(268, 71%, 12%)';
    document.getElementById('bottom-calculator').style.backgroundColor = 'hsl(268, 71%, 12%)';
    document.getElementById('del').style.backgroundColor = 'hsl(281, 89%, 26%)';
    document.getElementById('reset').style.backgroundColor = 'hsl(281, 89%, 26%)';
    document.getElementById('igual').style.backgroundColor = 'hsl(52, 74%, 38%)';
    document.getElementById('atb').style.color = 'hsl(52, 100%, 62%)';
}