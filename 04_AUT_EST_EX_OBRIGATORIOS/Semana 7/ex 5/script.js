function criar(){
var nalunos = document.getElementById("alunos").value
var lista = ""
var nprova=[]
var ntrabalho=[]
for (let i = 1 ; i <= nlunos ; i++){
lista+='<input type ="number" placeholder ="prova" id="p'+i + '"></input><input type ="number" placeholder ="trabalho" id="t'+i + '"></input> <br>'
nprova.push(document.getElementById("p"+i).value)
ntrabalho.push(document.getElementById("t"+i).value)
}
document.getElementById("1").innerHTML=lista
}

fun