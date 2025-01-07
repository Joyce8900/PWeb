import React from "react"

const  page = async({searchParams}) => {
 const { titleSearchKey = "bagdad" } = await searchParams

  const res = await fetch(
    `http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}`
  )

    const data = await res.json()



    return (

        <div>

            <div>

            {data.Search.map( (m) => <div key={m.imdbID}>{m.Title} --- {m.Year}</div>  )}               

            </div>

        </div>

    )
}

export default page
