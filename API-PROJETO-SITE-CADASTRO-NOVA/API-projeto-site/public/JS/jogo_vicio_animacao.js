/*INICIO DO JOGO  DO VICIO ANIMACAO*/


function calcular() {

    var horas = Number(inpt_horas_dias.value);
    var idade = Number(inpt_anos.value);
    var horas_totais = horas * 7 * 4 * 12 * idade;
    var maximo_horas = 12 * 7 * 4 * 12 * idade;


    mensagem.innerHTML = "";



    if (horas == "" || idade == "") {
        alert('Preencha todos os campos!');
    } else {
        mensagem.innerHTML += `Você já assitiu aproximadamente ${horas_totais} horas de animação em sua vida!<br>`;

        if (horas_totais >= maximo_horas * 0.25) {
            mensagem.innerHTML += `Você é um viciado em animação!<br>`;
            retrato.src = '../IMGS/bob.gif';

        } else if (horas_totais < maximo_horas * 0.25 && horas_totais > maximo_horas * 0.10) {

            mensagem.innerHTML += `Você gosta bastante de animações, mas ainda não é um viciado!<br>`;
            retrato.src = '../IMGS/anim.gif';
        } else {
            mensagem.innerHTML += `Você precisa assistir mais animações!<br>`;
            retrato.src = '../IMGS/triste.gif';
        }

    }
}

/*FIM DO JOGO  DO VICIO ANIMACAO*/