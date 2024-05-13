let cont_os = 0;
let cont_ls = 0;
let cont_cp = 0;
const check_os = document.getElementById('check-os');
const check_ls = document.getElementById('check-ls');
const check_cp = document.getElementById('check-cp');
let periodo = 0;
let arc = 0;
let adv = 0;
let pro = 0;
let total = 0;
let erro = 0;
const campos = document.querySelectorAll('.required');


function cliqueArcade() {
    voltaPlans();
    document.getElementById('arc').style.borderColor = 'hsl(243, 100%, 62%)';
    document.getElementById('adv').style.borderColor = '#ebebeb';
    document.getElementById('pro').style.borderColor = '#ebebeb';
    valoresArcade();
    arc = 1;
    adv = 0;
    pro = 0;
}

function cliqueAdvanced() {
    voltaPlans();
    document.getElementById('adv').style.borderColor = 'hsl(243, 100%, 62%)';
    document.getElementById('arc').style.borderColor = '#ebebeb';
    document.getElementById('pro').style.borderColor = '#ebebeb';
    valoresAdvanced();
    arc = 0;
    adv = 1;
    pro = 0;
}

function cliquePro() {
    voltaPlans();
    document.getElementById('pro').style.borderColor = 'hsl(243, 100%, 62%)';
    document.getElementById('adv').style.borderColor = '#ebebeb';
    document.getElementById('arc').style.borderColor = '#ebebeb';
    valoresPro();
    arc = 0;
    adv = 0;
    pro = 1;
}

function voltarTela1() {
    document.getElementById('personal-info').style.display = 'flex';
    document.getElementById('select-plan').style.display = 'none';

    const step2 = document.getElementById('step2-left');
    step2.style.background = 'none';
    step2.style.border = '1px solid white';
    step2.style.color = 'white';

    const step1 = document.getElementById('step1-left');
    step1.style.backgroundColor = 'hsl(206, 94%, 87%)';
    step1.style.border = 'none';
    step1.style.color = 'hsl(213, 96%, 18%)';
}

function irTela2() {
    erro = 0;
    nomeValidate();
    emailValidate();
    phoneValidate();


    if (erro == 0) {
        document.getElementById('personal-info').style.display = 'none';
        document.getElementById('select-plan').style.display = 'flex';

        const step1 = document.getElementById('step1-left');
        step1.style.background = 'none';
        step1.style.border = '1px solid white';
        step1.style.color = 'white';

        const step2 = document.getElementById('step2-left');
        step2.style.backgroundColor = 'hsl(206, 94%, 87%)';
        step2.style.border = 'none';
        step2.style.color = 'hsl(213, 96%, 18%)';
    }
}

function trocarTempo() {
    if (periodo == 0) {
        const month = document.getElementById('middle-plan-monthly');
        const year = document.getElementById('middle-plan-yearly');
        month.style.color = '#cecece';
        year.style.color = 'hsl(243, 100%, 62%)';

        trocaYear();
        periodo = 1;
    } else {
        const month = document.getElementById('middle-plan-monthly');
        const year = document.getElementById('middle-plan-yearly');
        year.style.color = '#cecece';
        month.style.color = 'hsl(213, 96%, 18%)';

        trocaMonth();
        periodo = 0;
    }
}

function irTela3() {
    erro = 0;
    planValidate();

    if (erro == 0) {
        document.getElementById('add-ons').style.display = 'flex';
        document.getElementById('select-plan').style.display = 'none';

        const step2 = document.getElementById('step2-left');
        step2.style.background = 'none';
        step2.style.border = '1px solid white';
        step2.style.color = 'white';

        const step3 = document.getElementById('step3-left');
        step3.style.backgroundColor = 'hsl(206, 94%, 87%)';
        step3.style.border = 'none';
        step3.style.color = 'hsl(213, 96%, 18%)';
    }
}

function voltarTela2() {
    document.getElementById('select-plan').style.display = 'flex';
    document.getElementById('add-ons').style.display = 'none';

    const step3 = document.getElementById('step3-left');
    step3.style.background = 'none';
    step3.style.border = '1px solid white';
    step3.style.color = 'white';

    const step2 = document.getElementById('step2-left');
    step2.style.backgroundColor = 'hsl(206, 94%, 87%)';
    step2.style.border = 'none';
    step2.style.color = 'hsl(213, 96%, 18%)';
}

function cliqueOS() {
    if (cont_os == 0) {
        document.getElementById('online-service').style.borderColor = 'hsl(243, 100%, 62%)';
        cont_os = 1;
        check_os.checked = true;
        document.getElementById('os-final').style.display = 'flex';
    } else {
        document.getElementById('online-service').style.borderColor = '#ebebeb';
        cont_os = 0;
        check_os.checked = false;
        document.getElementById('os-final').style.display = 'none';
    }
}

function cliqueLS() {
    if (cont_ls == 0) {
        document.getElementById('larger-storage').style.borderColor = 'hsl(243, 100%, 62%)';
        cont_ls = 1;
        check_ls.checked = true;
        document.getElementById('ls-final').style.display = 'flex';
    } else {
        document.getElementById('larger-storage').style.borderColor = '#ebebeb';
        cont_ls = 0;
        check_ls.checked = false;
        document.getElementById('ls-final').style.display = 'none';
    }
}

function cliqueCP() {
    if (cont_cp == 0) {
        document.getElementById('customizable-profile').style.borderColor = 'hsl(243, 100%, 62%)';
        cont_cp = 1;
        check_cp.checked = true;
        document.getElementById('cp-final').style.display = 'flex';
    } else {
        document.getElementById('customizable-profile').style.borderColor = '#ebebeb';
        cont_cp = 0;
        check_cp.checked = false;
        document.getElementById('cp-final').style.display = 'none';
    }
}

function voltarTela3() {
    document.getElementById('add-ons').style.display = 'flex';
    document.getElementById('summary').style.display = 'none';

    const step4 = document.getElementById('step4-left');
    step4.style.background = 'none';
    step4.style.border = '1px solid white';
    step4.style.color = 'white';

    const step3 = document.getElementById('step3-left');
    step3.style.backgroundColor = 'hsl(206, 94%, 87%)';
    step3.style.border = 'none';
    step3.style.color = 'hsl(213, 96%, 18%)';
}

function irTela4() {
    document.getElementById('summary').style.display = 'flex';
    document.getElementById('add-ons').style.display = 'none';

    const step3 = document.getElementById('step3-left');
    step3.style.background = 'none';
    step3.style.border = '1px solid white';
    step3.style.color = 'white';

    const step4 = document.getElementById('step4-left');
    step4.style.backgroundColor = 'hsl(206, 94%, 87%)';
    step4.style.border = 'none';
    step4.style.color = 'hsl(213, 96%, 18%)';

   acharTotal();
}

function irTelaFinal() {
    document.getElementById('finished').style.display = 'flex';
    document.getElementById('summary').style.display = 'none';
}

function trocaYear() {
    // tela2
    document.getElementById('preco-arc').innerText = '$90/yr';
    document.getElementById('preco-adv').innerText = '$120/yr';
    document.getElementById('preco-pro').innerText = '$150/yr';
    document.getElementById('mf1').style.display = 'flex';
    document.getElementById('mf2').style.display = 'flex';
    document.getElementById('mf3').style.display = 'flex';

    // tela3
    document.getElementById('os-preco').innerText = '+$10/yr';
    document.getElementById('ls-preco').innerText = '+$20/yr';
    document.getElementById('cp-preco').innerText = '+$20/yr';

    //tela4
    if (arc == 1) {
        document.getElementById('price-plan').innerText = '$90/yr';
        document.getElementById('price-os').innerText = '+$10/yr';
        document.getElementById('price-ls').innerText = '+$20/yr';
        document.getElementById('price-cp').innerText = '+$20/yr';
        document.getElementById('total-price').innerText = '$90/yr';
        document.getElementById('plan-type').innerText = 'Arcade (Yearly)';
    } else if (adv == 1) {
        document.getElementById('price-plan').innerText = '$120/yr';
        document.getElementById('price-os').innerText = '+$10/yr';
        document.getElementById('price-ls').innerText = '+$20/yr';
        document.getElementById('price-cp').innerText = '+$20/yr';
        document.getElementById('total-price').innerText = '$120/yr';
        document.getElementById('plan-type').innerText = 'Advanced (Yearly)';
    } else {
        document.getElementById('price-plan').innerText = '$150/yr';
        document.getElementById('price-os').innerText = '+$10/yr';
        document.getElementById('price-ls').innerText = '+$20/yr';
        document.getElementById('price-cp').innerText = '+$20/yr';
        document.getElementById('total-price').innerText = '$150/yr';
        document.getElementById('plan-type').innerText = 'Pro (Yearly)';
    }
    document.getElementById('total-bottom').innerText = 'Total (per year)';
}

function trocaMonth() {
    // tela2
    document.getElementById('preco-arc').innerText = '$9/mo';
    document.getElementById('preco-adv').innerText = '$12/mo';
    document.getElementById('preco-pro').innerText = '$15/mo';
    document.getElementById('mf1').style.display = 'none';
    document.getElementById('mf2').style.display = 'none';
    document.getElementById('mf3').style.display = 'none';

    // tela3
    document.getElementById('os-preco').innerText = '+$1/mo';
    document.getElementById('ls-preco').innerText = '+$2/mo';
    document.getElementById('cp-preco').innerText = '+$2/mo';

    //tela4
    if (arc == 1) {
        document.getElementById('price-plan').innerText = '$9/mo';
        document.getElementById('price-os').innerText = '+$1/mo';
        document.getElementById('price-ls').innerText = '+$2/mo';
        document.getElementById('price-cp').innerText = '+$2/mo';
        document.getElementById('total-price').innerText = '$9/mo';
        document.getElementById('plan-type').innerText = 'Arcade (Monthly)';
    } else if (adv == 1) {
        document.getElementById('price-plan').innerText = '$12/mo';
        document.getElementById('price-os').innerText = '+$1/mo';
        document.getElementById('price-ls').innerText = '+$2/mo';
        document.getElementById('price-cp').innerText = '+$2/mo';
        document.getElementById('total-price').innerText = '$12/mo';
        document.getElementById('plan-type').innerText = 'Advanced (Monthly)';
    } else {
        document.getElementById('price-plan').innerText = '$15/mo';
        document.getElementById('price-os').innerText = '+$1/mo';
        document.getElementById('price-ls').innerText = '+$2/mo';
        document.getElementById('price-cp').innerText = '+$2/mo';
        document.getElementById('total-price').innerText = '$15/mo';
        document.getElementById('plan-type').innerText = 'Pro (Monthly)';
    }
    document.getElementById('total-bottom').innerText = 'Total (per month)';
}

function valoresArcade() {
    if (periodo == 0) {
        //tela4
        document.getElementById('price-plan').innerText = '$9/mo';
        document.getElementById('price-os').innerText = '+$1/mo';
        document.getElementById('price-ls').innerText = '+$2/mo';
        document.getElementById('price-cp').innerText = '+$2/mo';
        document.getElementById('total-price').innerText = '$9/mo';
        document.getElementById('plan-type').innerText = 'Arcade (Monthly)';
        document.getElementById('total-bottom').innerText = 'Total (per month)';
    } else {
        //tela4
        document.getElementById('price-plan').innerText = '$90/yr';
        document.getElementById('price-os').innerText = '+$10/yr';
        document.getElementById('price-ls').innerText = '+$20/yr';
        document.getElementById('price-cp').innerText = '+$20/yr';
        document.getElementById('total-price').innerText = '$90/yr';
        document.getElementById('plan-type').innerText = 'Arcade (Yearly)';
        document.getElementById('total-bottom').innerText = 'Total (per year)';
    }
}

function valoresAdvanced() {
    if (periodo == 0) {
        //tela4
        document.getElementById('price-plan').innerText = '$12/mo';
        document.getElementById('price-os').innerText = '+$1/mo';
        document.getElementById('price-ls').innerText = '+$2/mo';
        document.getElementById('price-cp').innerText = '+$2/mo';
        document.getElementById('total-price').innerText = '$12/mo';
        document.getElementById('plan-type').innerText = 'Advanced (Monthly)';
        document.getElementById('total-bottom').innerText = 'Total (per month)';
    } else {
        //tela4
        document.getElementById('price-plan').innerText = '$120/yr';
        document.getElementById('price-os').innerText = '+$10/yr';
        document.getElementById('price-ls').innerText = '+$20/yr';
        document.getElementById('price-cp').innerText = '+$20/yr';
        document.getElementById('total-price').innerText = '$120/yr';
        document.getElementById('plan-type').innerText = 'Advanced (Yearly)';
        document.getElementById('total-bottom').innerText = 'Total (per year)';
    }
}

function valoresPro() {
    if (periodo == 0) {
        //tela4
        document.getElementById('price-plan').innerText = '$15/mo';
        document.getElementById('price-os').innerText = '+$1/mo';
        document.getElementById('price-ls').innerText = '+$2/mo';
        document.getElementById('price-cp').innerText = '+$2/mo';
        document.getElementById('total-price').innerText = '$15/mo';
        document.getElementById('plan-type').innerText = 'Pro (Monthly)';
        document.getElementById('total-bottom').innerText = 'Total (per month)';
    } else {
        //tela4
        document.getElementById('price-plan').innerText = '$150/yr';
        document.getElementById('price-os').innerText = '+$10/yr';
        document.getElementById('price-ls').innerText = '+$20/yr';
        document.getElementById('price-cp').innerText = '+$20/yr';
        document.getElementById('total-price').innerText = '$150/yr';
        document.getElementById('plan-type').innerText = 'Pro (Yearly)';
        document.getElementById('total-bottom').innerText = 'Total (per year)';
    }
}

function acharTotal(){
    if (arc == 1) {
        total = 9;
    } else if (adv == 1) {
        total = 12;
    } else {
        total = 15;
    }

    if (cont_os == 1) {
        total += 1;
    }

    if (cont_ls == 1) {
        total += 2;
    }

    if (cont_cp == 1) {
        total += 2;
    }

    if (periodo == 1) {
        total *= 10;
        document.getElementById('total-price').innerText = `$${total}/yr`;
    } else {
        document.getElementById('total-price').innerText = `$${total}/mo`;
    }
}

function nomeValidate() {
    if (campos[0].value === '') {
        document.getElementById('nome').style.border = 'solid 2px red';
        document.getElementById('erroNome').innerText = 'Can\'t be blank';
        erro = 1;
    }
}

function emailValidate() {
    if (campos[1].value === '') {
        document.getElementById('email').style.border = 'solid 2px red';
        document.getElementById('erroEmail').innerText = 'Can\'t be blank';
        erro = 1;
    }
}

function phoneValidate() {
    if (campos[2].value === '') {
        document.getElementById('phone').style.border = 'solid 2px red';
        document.getElementById('erroPhone').innerText = 'Can\'t be blank';
        erro = 1;
    } else if (isNaN(campos[2].value.replace('-','').replace(' ',''))) {
        document.getElementById('phone').style.border = 'solid 2px red';
        document.getElementById('erroPhone').innerText = 'Wrong format, example: 31 94578-3257';
        erro = 1;
    }
}

function voltaNome() {
    document.getElementById('nome').style.border = 'solid 1px #dadada';
    document.getElementById('erroNome').innerText = '';
}

function voltaEmail() {
    document.getElementById('email').style.border = 'solid 1px #dadada';
    document.getElementById('erroEmail').innerText = '';
}

function voltaPhone() {
    document.getElementById('phone').style.border = 'solid 1px #dadada';
    document.getElementById('erroPhone').innerText = '';
}

function planValidate() {
    if (arc == 0 && adv == 0 && pro == 0) {
        document.getElementById('plan-options').style.border = '2px solid red';
        document.getElementById('erro-plans').style.visibility = 'visible';
        erro = 1;
    }
}

function voltaPlans() {
    document.getElementById('plan-options').style.border = 'none';
        document.getElementById('erro-plans').style.visibility = 'hidden';
}