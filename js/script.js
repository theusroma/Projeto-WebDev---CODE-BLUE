   /* BOTOES */
   let env = document.getElementById("botaoEnviar");
   let doe = document.getElementById("botaoDoar");

   doe.addEventListener("click", doar);

   function doar(){
       let chavePix = prompt("Por favor, insira sua chave Pix: ");
       if(chavePix){
           const quantidade = prompt("Por favor, insira a quantidade que deseja doar:");
           if (quantidade) {
               alert("Doação enviada com sucesso! Muito obrigado.");
           } else {
               alert("Doação cancelada.");
           }
       } else {
           alert("Doação cancelada.");
       }
   }