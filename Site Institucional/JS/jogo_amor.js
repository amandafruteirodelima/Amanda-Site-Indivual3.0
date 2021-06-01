    

    /*INICIO DO JOGO  DO AMOR*/

    function expressar() {

        contador = 0;
        var amor = inpt_ama.value;
        var qntd = Number(inpt_quanto.value);
        var qntd_inteiro = parseInt(qntd);

        mensagem.innerHTML = "";


        while (contador < qntd_inteiro) {

            mensagem_amor.innerHTML += `<b>${amor}</b>, eu te amo muito! Você é o melhor personagem de todos!<br>`
            contador++;
        }

    }
    /*FIM DO JOGO  DO AMOR*/