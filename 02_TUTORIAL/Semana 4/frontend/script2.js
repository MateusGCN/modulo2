function numero(){
    let numero1 = parseFloat(document.getElementById("1").value)
    let numero2 = parseFloat(document.getElementById("2").value)
    let resultado = document.getElementById("resultado")
    resultado.innerHTML=`${numero1} + ${numero2} = ${numero1+numero2}`
}