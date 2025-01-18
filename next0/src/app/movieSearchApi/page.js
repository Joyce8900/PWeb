import Form from "next/form"

export default async function MovieFormApi() {
  return (
    <Form action="/clientComponent">
      <label htmlFor="idTitleSearchKey">Título</label>

      <input id="idTitleSearchKey" name="titleSearchKey" />
      {/* <label htmlFor="idYearSearchKey">Ano</label>
      <input id="idYearSearchKey" name="yearSearchKey" /> */}
      <button type="submit">Pesquisar</button>
    </Form>
  )
}
