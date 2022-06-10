const url = "http://127.0.0.1:5555"

const getDados = () => {
    axios
        .get(url + "/api")
        .then((res) => {
            console.log(res.data)
            const dadosAluno = []
            res.data.map(i => dadosAluno.push(i))
            console.log(dadosAluno)

            dadosAluno.map(aluno => {
                document.getElementById("resultado").innerHTML += `
            <tr>
             <td>
             ${aluno.id}
             </td>
             <td>
             ${aluno.name}
             </td>
             <td>
             ${aluno.age}
             </td>
             <td>
             ${aluno.modulo}
             </td>
             <td>
             ${aluno.modulodate}
             </td>
             </tr>
            `
            })
        })


}

getDados()

function adicionar() {
    let nameAluno = document.getElementById("name")
    let ageAluno = document.getElementById("age")
    let moduloAluno = document.getElementById("modulo")
    let moduloDateAluno = document.getElementById("modulodate")

    const postDados = () => {
        let dadoaluno = {
            name: nameAluno.value,
            age: ageAluno.value,
            modulo: moduloAluno.value,
            modulodate: moduloDateAluno.value,
        };
        axios.post(url + "/api", dadoaluno).then((i) => {
            window.location.reload()
        })
    }
    postDados()
    console.log(nameAluno.value)

}