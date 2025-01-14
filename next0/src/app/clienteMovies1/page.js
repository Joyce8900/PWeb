"use client"

import Form from "next/form"

export default function Home() {
  return (
    <div>
      <MovieForm />

      <MovieTable movies={[]} />
    </div>
  )
}

export function MovieForm() {
  function handleAction(formData) {
    console.log(formData.get("titleSearchKey"))
  }

  return (
    <Form action={handleAction}>
      <label htmlFor="idTitleSearchKey">Título</label>

      <input id="idTitleSearchKey" name="titleSearchKey" />

      <button type="submit">Pesquisar</button>
    </Form>
  )
}

export function MovieTable({ movies }) {
  return (
    <div>
      <div>
        {movies.map((m) => (
          <div key={m.imdbID}>
            {m.Title} --- {m.Year}
          </div>
        ))}
      </div>
    </div>
  )
}
