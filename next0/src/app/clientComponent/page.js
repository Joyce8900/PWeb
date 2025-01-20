import React from "react"
import MovieFormApi from "../movieSearchApi/page"

const page = async ({ searchParams }) => {
  const { titleSearchKey  } = searchParams

  let movies = []
  let error = null

  try {
    const res = await fetch(
      `http://127.0.0.1:8090/api/collections/movies/records?filter=title~"${titleSearchKey}"`
    )
    if (!res.ok) {
      throw new Error("Erro ao buscar filmes")
    }

    const data = await res.json()
    movies = data.items || []
  } catch (err) {
    error = err.message
  }

  return (
    <div>
      <MovieFormApi />
      <a href="http://127.0.0.1:8090/api/collections/movies/records">Dados da api</a>
      {error && <div>Erro: {error}</div>}
      {
        movies.length === 0 && (
          <div>
            <h3>Erro: Nenhum filme encontrado.</h3>
            <p>Por favor, consulte os filmes cadastrados.</p>

          </div>
        )
      }
      {movies.length === 1 ? (
        <div>
          <h1>{movies[0].title}</h1>
          <h2>{movies[0].year}</h2>
          <img
            src={movies[0].poster}
            alt={movies[0].title}
            className="movie-poster"
          />
        </div>
      ) : (
        movies.map((movie) => (
          <div key={movie.id}>
            <h1>{movie.title}</h1>
            <h2>{movie.year}</h2>
            <img
              src={movie.poster}
              alt={movie.title}
              className="movie-poster"
            />
          </div>
        ))
      )}
    </div>
  )
}

export default page
