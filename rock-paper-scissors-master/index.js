let escolha = 0;
let score = 0;


function rules() {
    document.getElementById('tela').style.display = 'none';
    document.getElementById('rules').style.display = 'flex';
}

function exitRules() {
    document.getElementById('tela').style.display = 'flex';
    document.getElementById('rules').style.display = 'none';
}

function escolhaPapel() {
    document.getElementById('middle').style.display = 'none';
    document.getElementById('middle2').style.display = 'flex';
    document.getElementById('back-you').style.backgroundColor = 'hsl(230, 89%, 62%)';
    document.getElementById('back-you').style.borderBottom = 'hsl(230, 58%, 43%) 8px solid';
    document.getElementById('front-you').style.backgroundImage = 'url(images/icon-paper.svg)';
    document.getElementById('front-you').style.borderTop = 'solid #cecece 8px';

    escolha = 1;
    roleta();
}

function escolhaTesoura() {
    document.getElementById('middle').style.display = 'none';
    document.getElementById('middle2').style.display = 'flex';
    document.getElementById('back-you').style.backgroundColor = 'hsl(39, 89%, 49%)';
    document.getElementById('back-you').style.borderBottom = 'hsl(39, 79%, 40%) 8px solid';
    document.getElementById('front-you').style.backgroundImage = 'url(images/icon-scissors.svg)';
    document.getElementById('front-you').style.borderTop = 'solid #cecece 8px';

    escolha = 2;
    roleta();
}

function escolhaPedra() {
    document.getElementById('middle').style.display = 'none';
    document.getElementById('middle2').style.display = 'flex';
    document.getElementById('back-you').style.backgroundColor = 'hsl(349, 71%, 52%)';
    document.getElementById('back-you').style.borderBottom = 'hsl(349, 72%, 25%) 8px solid';
    document.getElementById('front-you').style.backgroundImage = 'url(images/icon-rock.svg)';
    document.getElementById('front-you').style.borderTop = 'solid #cecece 8px';

    escolha = 3;
    roleta();
}

function escolhaHouse() {
    let randomNum = 0;
    randomNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (randomNum == 1) {    //papel
        document.getElementById('back-house').style.backgroundColor = 'hsl(230, 89%, 62%)';
        document.getElementById('back-house').style.borderBottom = 'hsl(230, 58%, 43%) 8px solid';
        document.getElementById('front-house').style.backgroundImage = 'url(images/icon-paper.svg)';
        document.getElementById('front-house').style.borderTop = 'solid #cecece 8px';
        document.getElementById('front-house').style.backgroundColor = 'white';

        if (escolha == 1) {
            document.getElementById('result').style.display = 'flex';
            document.getElementById('result-title').innerText = 'DRAW';
            document.getElementById('play-again').style.color = 'black';
        } else if (escolha == 2) {
            document.getElementById('result').style.display = 'flex';
            document.getElementById('result-title').innerText = 'YOU WIN';
            document.getElementById('play-again').style.color = 'blue';
            score += 1;
        } else {
            document.getElementById('result').style.display = 'flex';
            document.getElementById('result-title').innerText = 'YOU LOSE';
            document.getElementById('play-again').style.color = 'red';
            score -= 1;
        }

    } else if (randomNum == 2) {   //tesoura
        document.getElementById('back-house').style.backgroundColor = 'hsl(39, 89%, 49%)';
        document.getElementById('back-house').style.borderBottom = 'hsl(39, 79%, 40%) 8px solid';
        document.getElementById('front-house').style.backgroundImage = 'url(images/icon-scissors.svg)';
        document.getElementById('front-house').style.borderTop = 'solid #cecece 8px';
        document.getElementById('front-house').style.backgroundColor = 'white';

        if (escolha == 1) {    
            document.getElementById('result').style.display = 'flex';
            document.getElementById('result-title').innerText = 'YOU LOSE';
            document.getElementById('play-again').style.color = 'red';
            score -= 1;
        } else if (escolha == 2) {
            document.getElementById('result').style.display = 'flex';
            document.getElementById('result-title').innerText = 'DRAW';
            document.getElementById('play-again').style.color = 'black';
        } else {
            document.getElementById('result').style.display = 'flex';
            document.getElementById('result-title').innerText = 'YOU WIN';
            document.getElementById('play-again').style.color = 'blue';
            score += 1;
        }

    } else {                          //pedra
        document.getElementById('back-house').style.backgroundColor = 'hsl(349, 71%, 52%)';
        document.getElementById('back-house').style.borderBottom = 'hsl(349, 72%, 25%) 8px solid';
        document.getElementById('front-house').style.backgroundImage = 'url(images/icon-rock.svg)';
        document.getElementById('front-house').style.borderTop = 'solid #cecece 8px';
        document.getElementById('front-house').style.backgroundColor = 'white';

        if (escolha == 1) {
            document.getElementById('result').style.display = 'flex';
            document.getElementById('result-title').innerText = 'YOU WIN';
            document.getElementById('play-again').style.color = 'blue';
            score += 1;
        } else if (escolha == 2) {
            document.getElementById('result').style.display = 'flex';
            document.getElementById('result-title').innerText = 'YOU LOSE';
            document.getElementById('play-again').style.color = 'red';
            score -= 1;
        } else {
            document.getElementById('result').style.display = 'flex';
            document.getElementById('result-title').innerText = 'DRAW';
            document.getElementById('play-again').style.color = 'black';
        }
    }
}

function playAgain() {
    document.getElementById('middle2').style.display = 'none';
    document.getElementById('middle').style.display = 'flex';
    document.getElementById('score-number').innerText = `${score}`;

    document.getElementById('back-house').style.background = 'none';
    document.getElementById('front-house').style.backgroundColor = 'hsl(214, 55%, 15%)';
    document.getElementById('front-house').style.border = 'none';
    document.getElementById('back-house').style.border = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById('front-house').style.backgroundImage = '';
}

function pedraRoleta() {
    document.getElementById('back-house').style.backgroundColor = 'hsl(349, 71%, 52%)';
    document.getElementById('back-house').style.borderBottom = 'hsl(349, 72%, 25%) 8px solid';
    document.getElementById('front-house').style.backgroundImage = 'url(images/icon-rock.svg)';
    document.getElementById('front-house').style.borderTop = 'solid #cecece 8px';
    document.getElementById('front-house').style.backgroundColor = 'white';
}

function papelRoleta() {
    document.getElementById('back-house').style.backgroundColor = 'hsl(230, 89%, 62%)';
    document.getElementById('back-house').style.borderBottom = 'hsl(230, 58%, 43%) 8px solid';
    document.getElementById('front-house').style.backgroundImage = 'url(images/icon-paper.svg)';
    document.getElementById('front-house').style.borderTop = 'solid #cecece 8px';
    document.getElementById('front-house').style.backgroundColor = 'white';
}

function tesouraRoleta() {
    document.getElementById('back-house').style.backgroundColor = 'hsl(39, 89%, 49%)';
    document.getElementById('back-house').style.borderBottom = 'hsl(39, 79%, 40%) 8px solid';
    document.getElementById('front-house').style.backgroundImage = 'url(images/icon-scissors.svg)';
    document.getElementById('front-house').style.borderTop = 'solid #cecece 8px';
    document.getElementById('front-house').style.backgroundColor = 'white';
}

function roleta() {
    var interval_roleta = setInterval(function() {
        setTimeout(function() {
            pedraRoleta();
        }, 150);
        setTimeout(function() {
            papelRoleta();
        }, 300);
        setTimeout(function() {
            tesouraRoleta();
        }, 450);
    }, 450);

    setTimeout(function() {
        clearInterval(interval_roleta);
    },3000);
    setTimeout(function() {
        escolhaHouse();
    }, 3300);
}
