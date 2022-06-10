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
             ${aluno.project}
             </td>
             <td>
             ${aluno.partner}
             </td>
             <td>
             ${aluno.modulo}
             </td>
             <td>
             ${aluno.projectstart}
             </td>
             <td>
             ${aluno.projectend}
             </td>
             </tr>
            `
            })
        })


}

getDados()

function adicionar() {
    let projectAluno = document.getElementById("project")
    let partnerAluno = document.getElementById("partner")
    let moduloAluno = document.getElementById("modulo")
    let projectstartAluno = document.getElementById("start")
    let projectendAluno = document.getElementById("end")

    const postDados = () => {
        let dadoaluno = {
            project: projectAluno.value,
            partner: partnerAluno.value,
            modulo: moduloAluno.value,
            projectend: projectendAluno.value,
            projectstart: projectstartAluno.value,
        };
        console.log(dadoaluno)
        axios.post(url + "/api", dadoaluno).then((i) => {
            window.location.reload()
        })
    }
    postDados()
}