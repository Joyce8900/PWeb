import React from "react"

// Função para obter dados do lado do servidor
export async function teste() {
  const res = await fetch(`https://www.omdbapi.com/?apikey=e8261d7b&s=bagdad`)
  const data = await res.json()
  console.log((data)) // Adicione esta linha para verificar a resposta da API
  
  return (
    <div>
    {data}
   </div>
  )
}

// Componente para exibir os filmes
function Movies({data }) {

  const  [dados, setDados] = React.useState([])
  React.useEffect(async()=>{
    const date = await teste()
    setDados(date)
  },[])

  if (!data || !data.Search) {
    return <div>Filmes não encontrados ou erro na API.</div>
  }
  return (
    <div>
      <h1>Lista de Filmes</h1>
        {dados.Search.map((m) => (
          <div key={m.imdbID}>
            <h2>
              {m.Title} ({m.Year})
            </h2>
          </div>
      ))} 
      dados
    </div>
  )
}

export  {Movies}
