const filtrar = () => {
  const numeroDeElementos = parseInt(document.getElementById
    ("numeroDeItens").value) || 1;
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  fetch(`https://fakerapi.it/api/v2/products?_quantity=${numeroDeElementos}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      const table = document.createElement("table");
      table.classList.add("table", "table-striped");
      const thead = document.createElement("thead");

      thead.innerHTML = `
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Descrição</th>
        </tr>
      `;
      table.appendChild(thead);


      const tbody = document.createElement("tbody");
      const renderTableRows = (data, numeroDeElementos, tbody) => {
        data.data.slice(0, numeroDeElementos).forEach((item) => {
          console.log(data)
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price}</td>
            <td>${item.description}</td>
          `;
                tbody.appendChild(row);
              });
            };
      renderTableRows(data, numeroDeElementos, tbody);
      table.appendChild(tbody);

      resultado.appendChild(table);

    })
    .catch((error) => {
      console.error("Erro ao buscar dados:", error);
      resultado.innerHTML = "Erro ao buscar dados.";
    });
};

const pesquisar = () => {
  const priceMax = (document.getElementById("price").value)
  
  fetch(`https://fakerapi.it/api/v2/products?_price_max=${priceMax}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data)
    }).catch((error)=>{
      console.log(`Erro: ${error}`)
    })
}