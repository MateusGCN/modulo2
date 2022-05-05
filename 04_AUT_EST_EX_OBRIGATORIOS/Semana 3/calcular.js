function numero(){
    let numero1 = parseFloat(document.getElementById("1").value)
    let tempo = (numero1 / 10)
    let altura = (numero1 ** 2 / 20)
    let segundos = document.getElementById("tempo")
    segundos.innerHTML=`Tempo de subida do objeto é de ${tempo} segundo`
    let alturamax = document.getElementById("altura")
    alturamax.innerHTML=`A altura máxima é ${altura} metros`
}