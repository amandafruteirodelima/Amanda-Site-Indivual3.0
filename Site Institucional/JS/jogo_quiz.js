/*INICIO DO JOGO DO QUIZ*/

function perguntar() {

acertou = false;

mensagem_quiz.innerHTML = "";

var numero_pergunta = parseInt(Math.random() * (10 - 0) + 0)

mensagem_quiz.innerHTML = `${perguntas[numero_pergunta]}<br>`

if (perguntas[numero_pergunta] == "Qual o nome da primeira animação existente no mundo?") {
    div_pergunta_0.style.display = 'block';
    div_pergunta_1.style.display = 'none';
    div_pergunta_2.style.display = 'none';
    div_pergunta_3.style.display = 'none';
    div_pergunta_4.style.display = 'none';
    div_pergunta_5.style.display = 'none';
    div_pergunta_6.style.display = 'none';
    div_pergunta_7.style.display = 'none';
    div_pergunta_8.style.display = 'none';
    div_pergunta_9.style.display = 'none';
}

else if (perguntas[numero_pergunta] == "Qual dos desenhos abaixo não é um filme da Disney?") {
    div_pergunta_1.style.display = 'block';
    div_pergunta_0.style.display = 'none';
    div_pergunta_2.style.display = 'none';
    div_pergunta_3.style.display = 'none';
    div_pergunta_4.style.display = 'none';
    div_pergunta_5.style.display = 'none';
    div_pergunta_6.style.display = 'none';
    div_pergunta_7.style.display = 'none';
    div_pergunta_8.style.display = 'none';
    div_pergunta_9.style.display = 'none';
}

else if (perguntas[numero_pergunta] == "Qual dos filmes abaixo não tem sequência?") {
    div_pergunta_2.style.display = 'block';
    div_pergunta_1.style.display = 'none';
    div_pergunta_0.style.display = 'none';
    div_pergunta_3.style.display = 'none';
    div_pergunta_4.style.display = 'none';
    div_pergunta_5.style.display = 'none';
    div_pergunta_6.style.display = 'none';
    div_pergunta_7.style.display = 'none';
    div_pergunta_8.style.display = 'none';
    div_pergunta_9.style.display = 'none';
}

else if (perguntas[numero_pergunta] == "Uma coisa incomum em filmes de animação é a existência de trilogias. Qual dos filmes abaixo não faz parte de uma trilogia?") {
    div_pergunta_3.style.display = 'block';
    div_pergunta_1.style.display = 'none';
    div_pergunta_2.style.display = 'none';
    div_pergunta_0.style.display = 'none';
    div_pergunta_4.style.display = 'none';
    div_pergunta_5.style.display = 'none';
    div_pergunta_6.style.display = 'none';
    div_pergunta_7.style.display = 'none';
    div_pergunta_8.style.display = 'none';
    div_pergunta_9.style.display = 'none';
}

else if (perguntas[numero_pergunta] == "Apesar de não ser oficialmente uma princesa, ela foi incluída na galeria devido ao seu sucesso entre as crianças. Quem é essa personagem?") {
    div_pergunta_4.style.display = 'block';
    div_pergunta_1.style.display = 'none';
    div_pergunta_2.style.display = 'none';
    div_pergunta_3.style.display = 'none';
    div_pergunta_0.style.display = 'none';
    div_pergunta_5.style.display = 'none';
    div_pergunta_6.style.display = 'none';
    div_pergunta_7.style.display = 'none';
    div_pergunta_8.style.display = 'none';
    div_pergunta_9.style.display = 'none';
}

else if (perguntas[numero_pergunta] == "Em qual das animações abaixo os animais não falam como pessoas?") {
    div_pergunta_5.style.display = 'block';
    div_pergunta_1.style.display = 'none';
    div_pergunta_2.style.display = 'none';
    div_pergunta_3.style.display = 'none';
    div_pergunta_4.style.display = 'none';
    div_pergunta_0.style.display = 'none';
    div_pergunta_6.style.display = 'none';
    div_pergunta_7.style.display = 'none';
    div_pergunta_8.style.display = 'none';
    div_pergunta_9.style.display = 'none';
}

else if (perguntas[numero_pergunta] == "Qual foi o primeiro importante personagem da animação à ter sua morte exibida explicitamente ao público infantil?") {
    div_pergunta_6.style.display = 'block';
    div_pergunta_1.style.display = 'none';
    div_pergunta_2.style.display = 'none';
    div_pergunta_3.style.display = 'none';
    div_pergunta_4.style.display = 'none';
    div_pergunta_5.style.display = 'none';
    div_pergunta_0.style.display = 'none';
    div_pergunta_7.style.display = 'none';
    div_pergunta_8.style.display = 'none';
    div_pergunta_9.style.display = 'none';
}

else if (perguntas[numero_pergunta] == "Em 2004, a Disney disse que lançaria seu último filme em 2D, porém quebrou a promessa ao lançar outro com essa tecnologia em 2009. Qual seria o último filme em 2D, segundo a própria Disney?") {
    div_pergunta_7.style.display = 'block';
    div_pergunta_1.style.display = 'none';
    div_pergunta_2.style.display = 'none';
    div_pergunta_3.style.display = 'none';
    div_pergunta_4.style.display = 'none';
    div_pergunta_5.style.display = 'none';
    div_pergunta_6.style.display = 'none';
    div_pergunta_0.style.display = 'none';
    div_pergunta_8.style.display = 'none';
    div_pergunta_9.style.display = 'none';
}

else if (perguntas[numero_pergunta] == "Toy Story é considerado o primeiro filme de animação 100% digital do mundo. Porém, outro filme, também feito em sua totalidade com tecnologia digital, foi lançado meses antes, sendo esse último o primeiro 100% digital. Que filme é esse?") {
    div_pergunta_8.style.display = 'block';
    div_pergunta_1.style.display = 'none';
    div_pergunta_2.style.display = 'none';
    div_pergunta_3.style.display = 'none';
    div_pergunta_4.style.display = 'none';
    div_pergunta_5.style.display = 'none';
    div_pergunta_6.style.display = 'none';
    div_pergunta_7.style.display = 'none';
    div_pergunta_0.style.display = 'none';
    div_pergunta_9.style.display = 'none';
}

else if (perguntas[numero_pergunta] == "Qual filme da DreamWorks tinha como cenário principal uma colônia de formigas?") {
    div_pergunta_9.style.display = 'block';
    div_pergunta_1.style.display = 'none';
    div_pergunta_2.style.display = 'none';
    div_pergunta_3.style.display = 'none';
    div_pergunta_4.style.display = 'none';
    div_pergunta_5.style.display = 'none';
    div_pergunta_6.style.display = 'none';
    div_pergunta_7.style.display = 'none';
    div_pergunta_8.style.display = 'none';
    div_pergunta_0.style.display = 'none';
}


}

function responder() {




var resposta_0 = sel_pergunta_0.value;
var resposta_1 = sel_pergunta_1.value;
var resposta_2 = sel_pergunta_2.value;
var resposta_3 = sel_pergunta_3.value;
var resposta_4 = sel_pergunta_4.value;
var resposta_5 = sel_pergunta_5.value;
var resposta_6 = sel_pergunta_6.value;
var resposta_7 = sel_pergunta_7.value;
var resposta_8 = sel_pergunta_8.value;
var resposta_9 = sel_pergunta_9.value;




if (acertou == true) {
    alert('Você já selecionou a resposta correta!')
}

else {

    if (resposta_0 == "correta" || resposta_1 == "correta" || resposta_2 == "correta" || resposta_3 == "correta" || resposta_4 == "correta" || resposta_5 == "correta" || resposta_6 == "correta" || resposta_7 == "correta" || resposta_8 == "correta" || resposta_9 == "correta") {
        alert('PARABÉNS VOCÊ ACERTOU!!!');
        resposta_correta++;
        acertou = true;

    }

    else if (resposta_0 == "errada" || resposta_1 == "errada" || resposta_2 == "errada" || resposta_3 == "errada" || resposta_4 == "errada" || resposta_5 == "errada" || resposta_6 == "errada" || resposta_7 == "errada" || resposta_8 == "errada" || resposta_9 == "errada") {
        alert('Você errou tente novamente!');
    }

    else {
        alert('Selecione uma das opções!');
    }


    mensagem_2_quiz.innerHTML = "";
    mensagem_2_quiz.innerHTML += `<b>Respostas corretas:</b>${resposta_correta}`;


}
zerar();
}

function zerar() {



sel_pergunta_0.value = "";
sel_pergunta_1.value = "";
sel_pergunta_2.value = "";
sel_pergunta_3.value = "";
sel_pergunta_4.value = "";
sel_pergunta_5.value = "";
sel_pergunta_6.value = "";
sel_pergunta_7.value = "";
sel_pergunta_8.value = "";
sel_pergunta_9.value = "";

}


/*FIM DO JOGO  DO QUIZ*/