





var anterior = undefined
function cliclou(numero,cor){
 let res = window.document.getElementById("resultado")
 res.style.background=cor
 res.innerHTML=""
 res.style.border="none"


 if(anterior === numero){
   res.style.background="none"
    anterior= undefined
    return
 } 


 for ( let i = 0 ; i < 11 ; i ++){
    let resultado = `${numero} X ${i} = ${numero * i}`;
    res.innerHTML += `<li type=none> ${resultado}</li> `;
    res.style.border="solid 3px black"
    res.style.padding="10px"
 }

 anterior = numero 

 
 




}