//Pegando o texto da text área
function criptografarTexto(){
    
    //Aqui capturamos o texto digitado pelo usuário
    let textarea = document.getElementById('texto');
    let texto = textarea.value;

    //Vamos deixar o texto em minusculo somente
    texto = texto.toLowerCase();
   
    //chamando função para remover acentos
    texto = removerAcentos(texto);

    //Aqui estou pegando cada letra do texto e separando num array  
    let letrasArray = texto.split(''); 
    
    for (let i = 0; i < letrasArray.length; i++) {

        //Laços de condição
        letrasArray[i] = letrasArray[i] === 'a' ? "ai" : letrasArray[i];
        letrasArray[i] = letrasArray[i] === 'e' ? "enter" : letrasArray[i];
        letrasArray[i] = letrasArray[i] === 'i' ? "imes" : letrasArray[i];
        letrasArray[i] = letrasArray[i] === 'o' ? "ober" : letrasArray[i];
        letrasArray[i] = letrasArray[i] === 'u' ? "ufat" : letrasArray[i];
    }

    //Processo inverso do .split 
    letrasArray = letrasArray.join(''); 

    copiarTexto(letrasArray);
    verificarTextArea(letrasArray);
      
}


function descriptografarTexto(){
    //Aqui capturamos o texto digitado pelo usuário
    let textarea = document.getElementById('texto');
    let texto = textarea.value;
     
    //Vamos deixar o texto em minusculo somente
    texto = texto.toLowerCase();
 
    //chamando função para remover acentos
    texto = removerAcentos(texto);
    
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');
    
    copiarTexto(texto);
    //console.log(texto);
}

//Função para copiar o texto
function copiarTexto(textoCopiado){
    const inputElement = document.getElementById("meuInput");
    inputElement.value = textoCopiado;
}

//Função para remover acentos
function removerAcentos(textoComAcento){
    return textoComAcento.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function verificarTextArea(letrasArray) {
    let texto = letrasArray;
    if(texto.length > 0) {
        esconder();
    } else {
        mostrar();
    }
    console.log(letrasArray);
}

function esconder() {
    //Esconde a Imagem e mostra o texto digitado
    let imagem = document.getElementById("imagemHistorico");
    imagem.style.display = "none";

    let texto = document.getElementById("meuInput");
    texto.style.display = "block";

    //Esconde o titulo e o paragrafo
    let section = document.querySelector('section.principal__historico');
    let paragrafo = section.querySelector('p');
    paragrafo.style.display = "none";

    let titulo = section.querySelector('h2');
    titulo.style.display = "none";

    //Mostra o botão Copiar
    let botaoCopiar = section.querySelector('button');
    botaoCopiar.style.display = "block";
}

function mostrar() {
    //Esconde a Texto e mostra a imagem
    let imagem = document.getElementById("imagemHistorico");
    imagem.style.display = "block";

    let texto = document.getElementById("meuInput");
    texto.style.display = "none";

    //Mostra o titulo e o paragrafo
    let section = document.querySelector('section.principal__historico');
    let paragrafo = section.querySelector('p');
    paragrafo.style.display = "block";

    let titulo = section.querySelector('h2');
    titulo.style.display = "block";

    //Esconde o botão Copiar
    let botaoCopiar = section.querySelector('button');
    botaoCopiar.style.display = "none";
}

function botaoCopiar() {   
    let textoHistorico = document.getElementById("meuInput").value;
    document.getElementById('texto').value = textoHistorico;
}