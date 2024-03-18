//alert('Olá inimigos!');


//Pegando o texto da text área
function criptografarTexto(){
    
    //Aqui capturamos o texto digitado pelo usuário
    let textarea = document.getElementById('texto');
    let texto = textarea.value;

    //Vamos deixar o texto em minusculo somente
    texto = texto.toLowerCase();

    //Removendo acentos
    texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    //chamando função para remover acentos
    texto = removerAcentos(texto);

    copiarTexto(texto);

    //Aqui estou pegando cada letra do texto e separando num array  
    let letrasArray = texto.split(''); 
    
    for (let i = 0; i < letrasArray.length; i++) {

        //Laços de condição
        letrasArray[i] = letrasArray[i] === 'a' ? "ai" : letrasArray[i];
        letrasArray[i] = letrasArray[i] === 'e' ? "enter" : letrasArray[i];
        letrasArray[i] = letrasArray[i] === 'i' ? "imes" : letrasArray[i];
        letrasArray[i] = letrasArray[i] === 'o' ? "ober" : letrasArray[i];
        letrasArray[i] = letrasArray[i] === 'u' ? "ufat" : letrasArray[i];
        console.log(letrasArray[i]);
    }

    //console.log(texto);
    
}


function descriptografarTexto(){
     //Aqui capturamos o texto digitado pelo usuário
     let textarea = document.getElementById('texto');
     let texto = textarea.value;
 
     //Vamos deixar o texto em minusculo somente
     texto = texto.toLowerCase();
 
     //Removendo acentos
     texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
 
     //chamando função para remover acentos
     texto = removerAcentos(texto);
 
     //Aqui estou pegando cada letra do texto e separando num array  
     let letrasArray = texto.split(''); 
     
     for (let i = 0; i < letrasArray.length; i++) {
 
         //Laços de condição
         letrasArray[i] = letrasArray[i] === 'ai' ? "a" : letrasArray[i];
         letrasArray[i] = letrasArray[i] === 'enter' ? "e" : letrasArray[i];
         letrasArray[i] = letrasArray[i] === 'imes' ? "i" : letrasArray[i];
         letrasArray[i] = letrasArray[i] === 'ober' ? "o" : letrasArray[i];
         letrasArray[i] = letrasArray[i] === 'ufat' ? "u" : letrasArray[i];
         console.log(letrasArray[i]);
     }
 
     //console.log(texto);   
}


function copiarTexto(textoCopiado){
    const inputElement = document.getElementById("meuInput");
    inputElement.value = textoCopiado;
    console.log(inputElement);
    
}

//Função para remover acentos
function removerAcentos(textoComAcento){
    return textoComAcento.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

