function calcular(){
    let numberinp=document.getElementById("numero").value 
    let array = numberinp.split('')
        if (array[0] % 2 == 0){
            var number = ("par")
        }
        else {
        var number = ("ímpar")
        }
    document.getElementById("saida").innerHTML=`O número ${array[0]}, que é o dígito da centena, é um número ${number} `
}