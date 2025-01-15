"use client"

import { useState } from "react"

export default function Home() {
  const [resultMovies, setResultMovies] = useState([])
  const [titleSearchKey, setTitleSearchKey] = useState("")
  const [carregando, setCarregando] = useState(false)

  async function handleAction(event) {
    setCarregando(true)
    event.preventDefault() 

    try {
      const httpRes = await fetch(
        `http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}`
      )

      const jsonRes = await httpRes.json()
      setResultMovies(jsonRes.Search || [])
      
      
    } catch (error) {
      console.error(error)
      setResultMovies([])
    }finally {
      setCarregando(false)
      setTitleSearchKey("")
    }
     
  }

  return (
    <div>
      <MovieForm
        handleAction={handleAction}
        titleSearchKey={titleSearchKey}
        setTitleSearchKey={setTitleSearchKey}
      />
      {carregando ? (
        <div>Carregando...</div>
      ) : (
        <MovieTable movies={resultMovies} />
      )}
    </div>
  )
}

export function MovieForm({ handleAction, titleSearchKey, setTitleSearchKey , carregando}) {
  return (
    <form onSubmit={handleAction}>
      <label htmlFor="idTitleSearchKey">Título</label>
      <input
        id="idTitleSearchKey"
        name="titleSearchKey"
        value={titleSearchKey} 
        onChange={(e) => setTitleSearchKey(e.target.value)} 
        required
      />
      <button type="submit" disabled={carregando}>{carregando ? "Carregando..." : "Pesquisar"}</button>
    </form>
  )
}

export function MovieTable({ movies }) {
  return (
    <div>
      {movies.length > 0 ? (
        movies.map((m) => (
          <div key={m.imdbID}>
            {m.Title} --- {m.Year}
          </div>
        ))
      ) : (
        <div>Nenhum filme encontrado.</div>
      )}
    </div>
  )
}
