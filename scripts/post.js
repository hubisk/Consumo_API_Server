function validarParametros() {
    const validarNomeSerie = document.getElementById("nomeSerie").value
    const validartemporadas = document.getElementById("temporadas").value
    const validarProdutora = document.getElementById("produtora").value
    const validarAnoLancamento = document.getElementById("anoLancamento").value

    if (!validarNomeSerie || !validartemporadas || !validarProdutora || !validarAnoLancamento) {
        document.getElementById("btnCadastrar").removeAttribute("disabled")
    } else {
        alert("Todos os campos devem ser preenchidos!")
    }
}

document.addEventListener("input", () => {
    validarParametros()
})
// Realizar méto POST p/ cadastrar uma nova série

document.getElementById("btnCadastrar").addEventListener("click", async (e) => {
    e.preventDefault()
    // Responsável por chamar a API

    // Endpoint da API
    const url = "https://json-server-vercel-seven-neon.vercel.app/series"

    // Capturar os valores do formulario
    const dadosEnviados = {
        "id": null, //valor autoincremental
        "nomeSerie": document.getElementById("nomeSerie").value,
        "temporadas": document.getElementById("temporadas").value,
        "anoLancamento": document.getElementById("anoLancamento").value,
        "produtora": document.getElementById("produtora").value
    }

    // document.getElementById("btnCadastrar").disabled = true;
    // elements.dadosEnviados.addEventListener("input", function (liberado) {
    //     let camposPreenchidos = elements.dadosEnviados.value;

    //     if (elements.camposPreenchidos !==null && elements.camposPreenchidos !== "") {
    //         document.getElementById("btnCadastrar").disabled = false;
    //     } 
    //     else {
    //         document.getElementById("btnCadastrar").disabled = true;
    //     }
    // });
    
    try {
        await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dadosEnviados)
        })

        const resposta = await fetch(url)

        if (resposta.ok) {
            alert("Série cadastrada com sucesso!")
        }

        location.reload()
    } catch (error) {
        console.log(`O consumo via Post Não funcionou, ${error}`);
    }
})