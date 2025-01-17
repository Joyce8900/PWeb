import React from "react"
import MovieForm from "../movieSearch/page"

const page = async ({ searchParams }) => {
  const { titleSearchKey = "Batman", yearSearchKey = "2018" } = searchParams

  
    const res = await fetch(
    `http://localhost:3000/api/searchMovies?titleSearchKey=${titleSearchKey}&y=${yearSearchKey}`
  )
    if(!res.ok){
      throw new Error('Erro ao buscar filmes')
    }
    
  

  const data = await res.json()

  if (!data.Search) {
    return <div>Erro: Nenhum filme encontrado.</div>
  }

  return (
    <div>
      <MovieForm />
      {data.Search.length === 1 ? (
        <div>
          <h1>{data.Search[0].Title}</h1>
          <h2>{data.Search[0].Year}</h2>
          <img
            src={data.Search[0].Poster}
            alt={data.Search[0].Title}
            width={200}
          />
        </div>
      ) : (
        data.Search.map((m) => (
          <div key={m.imdbID}>
            <h1>{m.Title}</h1>
            <h2>{m.Year}</h2>
            <img src={m.Poster} alt={m.Title} width={200} />
          </div>
        ))
      )}
    </div>
  )
}

export default page
