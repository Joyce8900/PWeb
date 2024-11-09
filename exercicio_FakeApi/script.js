let saveData = [];
let page = 1;

const filtrar = () => {
  const numeroDeElementos = parseInt(document.getElementById("numeroDeItens").value) || 1;
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  fetch(`https://fakerapi.it/api/v2/products?_quantity=${numeroDeElementos}&_price_max=100.00`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
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

      // Salva os dados e renderiza as linhas da tabela
      saveData = data.data.map((item) => ({
        name: item.name,
        price: parseFloat(item.price),
        description: item.description,
      }));

      saveData.forEach((item) => {
        let row = document.createElement("tr");
        row.innerHTML = `
          <td>${item.name}</td>
          <td>$${item.price.toFixed(2)}</td>
          <td>${item.description}</td>
        `;
        tbody.appendChild(row);
      });

      table.appendChild(tbody);
      resultado.appendChild(table);
    })
    .catch((error) => {
      console.error("Erro ao buscar dados:", error);
      resultado.innerHTML = "Erro ao buscar dados.";
    });
};

const carregarMaisConteudo = () => {
  const resultado = document.getElementById("resultado");
  const numeroDeElementos = 5; // Número de itens por página

  fetch(`https://fakerapi.it/api/v2/products?_quantity=${numeroDeElementos}&_page=${page}`, {
    method: "GET",
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);

      const tbody = document.querySelector("#resultado table tbody");

      data.data.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${item.name}</td>
          <td>$${item.price.toFixed(2)}</td>
          <td>${item.description}</td>
        `;
        tbody.appendChild(row);

        saveData.push({
          name: item.name,
          price: parseFloat(item.price),
          description: item.description,
        });
      });

      page++;
    })
    .catch(error => {
      console.error("Erro ao carregar mais conteúdo:", error);
    });
};

const pesquisar = () => {
  const priceMax = parseFloat(document.getElementById("price").value) || 0;
  console.log("Preço máximo:", priceMax);
  const rows = document.querySelectorAll("#resultado table tbody tr");
  saveData.forEach((item, index) => {
    const row = rows[index]; 
    if (row && item.price <= priceMax) {
      row.querySelectorAll("td").forEach((cell) => {
        cell.style.backgroundColor = "#FF4C4C"; 
        cell.style.color = "#FFFFFF"; 
      });
      console.log(`Linha ${index} com preço ${item.price} alterada para vermelho escuro.`);
    } else if (row) {
      row.querySelectorAll("td").forEach((cell) => {
        cell.style.backgroundColor = ""; 
        cell.style.color = ""; 
      });
    }
  });
};

