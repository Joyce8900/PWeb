let saveData = []

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
        saveData = []
        data.data.slice(0, numeroDeElementos).forEach((item) => {
          saveData.push({
            name: item.name,
            price: item.price,
            description: item.description
          });
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
  for ()
  
}
//Scoll infinito
let page = 1;

function carregarMaisConteudo() {
  const resultado = document.getElementById("resultado");
  const numeroDeElementos = 5; // Número de itens por página

  fetch(`https://fakerapi.it/api/v2/products?_quantity=${numeroDeElementos}&_page=${page}`, {
    method: "GET",
  })
    .then(response => response.json())
    .then(data => {
      data.data.forEach(item => {
        const row = document.createElement("div");
        row.classList.add("item", "mb-3", "p-2", "border");
        row.innerHTML = `
          <strong>Produto:</strong> ${item.name} <br>
          <strong>Preço:</strong> $${item.price} <br>
          <strong>Descrição:</strong> ${item.description}
        `;
        resultado.appendChild(row);
      });
      page++;
    })
    .catch(error => {
      console.error("Erro ao carregar mais conteúdo:", error);
    });
}

function detectarScroll() {
  
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    console.log("Scroll detectado", scrollTop, windowHeight, fullHeight);

    if (scrollTop + windowHeight >= fullHeight - 10) {
      carregarMaisConteudo();
    }
  

}

// Carregar conteúdo inicial e configurar o scroll infinito
window.addEventListener("load", () => {
  filtrar();
  carregarMaisConteudo();
  window.addEventListener("scroll", detectarScroll);
});

console.log(saveData)