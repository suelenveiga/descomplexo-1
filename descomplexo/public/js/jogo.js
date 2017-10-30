var questao = document.getElementById('questao');
var button = document.getElementById('b1');
var parag = document.getElementsByClassName('parag');

var pergunta = ["pefu","lafu"];
var resposta = [["jfisdfi","ofoerjg","hfiwhfiw","dhifihf","fhisfh"],["546546","6876","546546","998","suelen"]];
var gabarito = ["jfisdfi","6876"];

var aux = 0;
var ctd = 0;
var pontos = 0;
document.getElementById('parag').innerHTML = "PONTOS: "+pontos;
for (var i = 1; i <= 5; i++) {
    document.getElementById('questao').innerHTML = pergunta[aux];
    button = document.getElementById('b'+i);
    button.textContent = resposta[aux][i-1];
}
function clicou() {
    console.log(event.target.textContent);
    console.log(gabarito[ctd]);
    if (event.target.textContent == gabarito[ctd]) {
        pontos++;
        aux++;
        document.getElementById('parag').innerHTML = "PONTOS: "+pontos;
        if (aux == pergunta.length) {
            return fim();
        }
        for (var i = 1; i <= 5; i++) {
            var button = document.getElementById('b'+i);
            button.textContent = resposta[aux][i-1];
            document.getElementById('questao').innerHTML = pergunta[aux];
        }   
        ctd++;
        console.log(aux);
        console.log(pergunta.length)
        }
        else{
            fim();
        }
}

function fim(){
    alert("FIM DE JOGO\n VOCE é BURROOO\nvoce fez "+pontos+" pontos");
}
