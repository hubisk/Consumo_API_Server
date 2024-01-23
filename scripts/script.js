async function getSeries() {

    const url = "https://json-server-vercel-seven-neon.vercel.app/series"

    const response = await fetch(url);
    console.log(response);

    const dados = await response.json();
    console.log(dados);

    const listaSeries = document.getElementById("listaSeries")    
    dados.forEach(series => {
        
        
        const tr = document.createElement("tr");
        const div =document.createElement("div")
        
        // criando células da tabela no HTML

        const tdNomeSerie = document.createElement("td")
        tdNomeSerie.textContent = series.nomeSerie

        const tdNumTemp = document.createElement("td")
        tdNumTemp.textContent = series.temporadas

        const tdAnoLancamento = document.createElement("td")
        tdAnoLancamento.textContent = series.anoLancamento

        const tdProdutora = document.createElement("td")
        tdProdutora.textContent = series.produtora

        const tdEdit = document.createElement("img")
        tdEdit.src = "./assets/icons/pencil.svg"
        
        const tdDelete = document.createElement("img")
        tdDelete.src = "./assets/icons/trash.svg"

        // adicionando o nosso td dentro do nosso tr

        tr.appendChild(tdNomeSerie)
        tr.appendChild(tdNumTemp)
        tr.appendChild(tdAnoLancamento)
        tr.appendChild(tdProdutora)
        tr.appendChild(div)
        div.appendChild(tdEdit)
        div.appendChild(tdDelete)

        listaSeries.appendChild(tr)
    });
}

getSeries()