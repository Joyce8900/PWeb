"use server"

export async function searchMovies(formData) {
  const titleSearchKey = formData.get("titleSearchKey")

  if (!titleSearchKey || titleSearchKey == "") return { Search: [] }

  try {
    const httpRes = await fetch(
      `http://www.omdbapi.com/?apikey=ME_SUBSTITUA&s=${e8261d7b}`
    )

    const jsonRes = await httpRes.json()

    return jsonRes
  } catch (err) {
    return { error: `Erro na requisição ${err}` }
  }
}
