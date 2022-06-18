function calcular(){
    let numero =document.getElementById("number").value
    let lista = numero.split('')
    let soma = 0
    for (let i = 0; i <= lista.length -1; i++){
         soma += parseInt(lista[i])
    }
    document.getElementById("resultado").innerHTML=`A soma dos números é de: ${soma}`
}