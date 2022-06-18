function calcular(){
    var numero1 = document.getElementById("numero1").value 
    var numero2 = document.getElementById("numero2").value 

    for (let i = numero1; i <= numero2; i++) { 
        let alert = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                alert += 1;
                break; 
            }
        }
        if (alert == 0 && i > 1) {
            document.getElementById("resultado").innerHTML += i + ', ';
        }
    }
}