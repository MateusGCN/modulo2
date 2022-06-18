function calcular(){
    let texto1 = document.getElementById("texto1").value
    let texto2 = document.getElementById("texto2").value
    let texto3 = document.getElementById("texto3").value
    let lista = [texto1, texto2, texto3]
    let bubbleSort = (lista) => {
        let len = lista.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (lista[j] > lista[j + 1]) {
                    let tmp = lista[j];
                    lista[j] = lista[j + 1];
                    lista[j + 1] = tmp;
                }
            }
        }
        return lista;
    };
    bubbleSort(lista)
    document.getElementById("resultado").innerHTML=lista
}