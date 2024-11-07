let contador = 0
const listar = () => {
  
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpa o conteúdo anterior

  fetch(`https://api.escuelajs.co/api/v1/products`, {
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

      // Corpo da tabela
      const tbody = document.createElement("tbody");
      data.forEach((item,index) => {
        
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${item.title}</td>
          <td>${item.price}</td>
          <td>${item.description}</td>
        `;
        tbody.appendChild(row);
      });

      table.appendChild(tbody);
  
      resultado.appendChild(table); // Adiciona a tabela ao elemento resultado
    
      })
    .catch((error) => {
      console.error("Erro ao buscar dados:", error);
      resultado.innerHTML = "Erro ao buscar dados.";
    });
};