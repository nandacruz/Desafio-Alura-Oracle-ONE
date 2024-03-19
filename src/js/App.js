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

    //console.log(letrasArray);    
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
    console.log(texto);
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

function verificarTextArea() {
    var texto = document.getElementById("texto").value;
    if (texto.trim() !== "") {
        alert("A textarea possui texto digitado!");
    } else {
        alert("A textarea está vazia.");
    }
}