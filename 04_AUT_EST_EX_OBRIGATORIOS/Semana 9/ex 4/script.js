function calcular(){
    let numero = document.getElementById("numero").value 
    console.log(numero)
    let lista= [0,1]
    for (let i=2; i <= numero; i++){
        lista[i] = lista[i-2]+lista[i-1]
    }
    document.getElementById("resultado").innerHTML=`A sequência até ${numero} é: ${lista}`

}