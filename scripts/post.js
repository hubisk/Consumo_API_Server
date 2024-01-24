function validarParametros() {
    const validarNomeSerie = document.getElementById("nomeSerie").value != '';
    const validartemporadas = document.getElementById("temporadas").value != '';
    const validarProdutora = document.getElementById("produtora").value != '';
    const validarAnoLancamento = document.getElementById("anoLancamento").value != '';

    const botaoCadastroValidar = document.getElementById('btnCadastrar')

    if (validarNomeSerie || validartemporadas |validarProdutora || validarAnoLancamento) {
        document.getElementById("btnCadastrar").removeAttribute("disabled")
    } else {
        alert("Todos os campos devem ser preenchidos!")
    }
}

document.addEventListener("input", () => {
    validarParametros()
})
// Realizar método POST p/ cadastrar uma nova série

document.getElementById("btnCadastrar").addEventListener("click", async (e) => {
    e.preventDefault()
    // Responsável por chamar a API

    // Endpoint da API
    const url = "https://json-server-vercel-git-main-hubisks-projects.vercel.app/series"

    // Capturar os valores do formulario
    const dadosEnviados = {
        "id": null, //valor autoincremental
        "nomeSerie": document.getElementById("nomeSerie").value,
        "temporadas": document.getElementById("temporadas").value,
        "anoLancamento": document.getElementById("anoLancamento").value,
        "produtora": document.getElementById("produtora").value
    }
    
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

        // remover o evento de click após cadastro
        document.getElementById('btnCadastrar').removeEventListener('click', arguments.callee);
        // se faz referencia para a propia função

        location.reload()

    } catch (error) {
        console.log(`O consumo via Post Não funcionou, ${error}`);
    }
})