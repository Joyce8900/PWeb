export async function GET(request) {
  const searchParams = request.nextUrl.searchParams

  // Obtém parâmetros da query
  const titleSearchKey = searchParams.get("titleSearchKey")
  const yearSearchKey = searchParams.get("yearSearchKey")

  
  // URL da API PocketBase
  const baseUrl = "http://127.0.0.1:8090/api/collections/movies/records"

  // Filtro opcional baseado nos parâmetros
  const filter = []
  if (titleSearchKey) filter.push(`title~"${titleSearchKey}"`)
  

  const queryString = filter.length
    ? `?filter=${encodeURIComponent(filter.join(" && "))}`
    : ""

  try {
    // Busca dados na API PocketBase
    const httpRes = await fetch(`${baseUrl}${queryString}`)
    if (!httpRes.ok) {
      throw new Error("Erro ao buscar dados da API PocketBase")
    }

    const jsonRes = await httpRes.json()

    // Retorna os dados no formato JSON
    return Response.json(jsonRes)
  } catch (error) {
    return Response.json(
      { error: error.message },
      {
        status: 500,
      }
    )
  }
}
