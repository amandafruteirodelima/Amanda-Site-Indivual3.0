/*INICIO DO JOGO  DO VICIO ANIMACAO*/


function calcular() {

    var horas = Number(inpt_horas_dias.value);
    var idade = Number(inpt_anos.value);
    var horas_totais = horas * 7 * 4 * 12 * idade;
    var maximo_horas = 12 * 7 * 4 * 12 * idade;


    mensagem.innerHTML = "";

    mensagem.innerHTML += `Você já assitiu aproximadamente ${horas_totais} horas de animação em sua vida!<br>`;



    if (horas_totais >= maximo_horas * 0.25) {
        mensagem.innerHTML += `Você é um viciado em animação!<br>`;
        retrato.src = 'http://i.imgur.com/NtDD6mg.png';

    }

    else if (horas_totais < maximo_horas * 0.25 && horas_totais > maximo_horas * 0.10) {

        mensagem.innerHTML += `Você gosta bastante de animações, mas ainda não é um viciado!<br>`;
        retrato.src = 'http://blogclassapp.wpengine.com/wp-content/uploads/2015/12/crian%C3%A7a-TV1.jpg';
    }

    else {
        mensagem.innerHTML += `Você precisa assistir mais animações!<br>`;
        retrato.src = 'https://static.dw.com/image/18846725_101.jpg';
    }


}

/*FIM DO JOGO  DO VICIO ANIMACAO*/

