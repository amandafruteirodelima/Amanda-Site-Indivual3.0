    /*INICIO DO JOGO  DO AMOR*/

    function expressar() {

        contador = 0;
        var amor = inpt_ama.value;
        var qntd = Number(inpt_quanto.value);
        var qntd_inteiro = parseInt(qntd);

        mensagem_amor.innerHTML = "";

        if (qntd_inteiro > 30) {
            alert('Coloque um valor igual ou menor que 30!')
        } else {
         

            while (contador < qntd_inteiro) {

                mensagem_amor.innerHTML += `<b>${amor}</b>, eu te amo muito! Você é o melhor personagem de todos!<br>`
                contador++;


            }

        }

    }
    /*FIM DO JOGO  DO AMOR*/