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
    } finally {
      setCarregando(false)
      setTitleSearchKey("")
    }
  }

  return (
    <div className="container my-5">
      <h1 className="text-center text-primary mb-4">Pesquise Filmes no OMDB</h1>
      <MovieForm
        handleAction={handleAction}
        titleSearchKey={titleSearchKey}
        setTitleSearchKey={setTitleSearchKey}
        carregando={carregando}
      />
      {carregando ? (
        <div className="text-center my-3 text-info">Carregando...</div>
      ) : (
        <MovieTable movies={resultMovies} />
      )}
    </div>
  )
}

export function MovieForm({
  handleAction,
  titleSearchKey,
  setTitleSearchKey,
  carregando,
}) {
  return (
    <form
      onSubmit={handleAction}
      className="mb-4 p-4 border rounded bg-light shadow"
    >
      <div className="mb-3 container bg-">
        <label htmlFor="idTitleSearchKey" className="form-label fw-bold">
          Digite o título do filme:
        </label>
        <input
          id="idTitleSearchKey"
          name="titleSearchKey"
          value={titleSearchKey}
          onChange={(e) => setTitleSearchKey(e.target.value)}
          className="form-control"
          placeholder="Exemplo: Batman"
          required
        />
      </div>
      <button
        type="submit"
        className={`btn ${carregando ? "btn-secondary" : "btn-primary"}`}
        disabled={carregando}
      >
        {carregando ? "Pesquisando..." : "Pesquisar"}
      </button>
    </form>
  )
}

export function MovieTable({ movies }) {
  return (
    <div>
      {movies.length > 0 ? (
        <table className="table table-striped table-bordered shadow">
          <thead className="table-dark">
            <tr>
              <th scope="col" className="text-center">Título</th>
              <th scope="col">Ano</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((m) => (
              <tr key={m.imdbID}>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center text-danger">Nenhum filme encontrado.</div>
      )}
    </div>
  )
}
