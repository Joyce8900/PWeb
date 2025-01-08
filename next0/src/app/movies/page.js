import React from "react"

const  page = async({searchParams}) => {
 const { titleSearchKey = "Batman", yearSearchKey = "2018" } = await searchParams
//  https://www.omdbapi.com/?apikey=f1cbc41e&t=Batman&y=2018

  const res = await fetch(
    `https://www.omdbapi.com/?apikey=f1cbc41e&t=${titleSearchKey}&y=${yearSearchKey}`
  )

    const data = await res.json()

    console.log(data)

    return (
      <div>
        <div>
          <h1>{data.Title}</h1>
          <h2>{data.Year}</h2>
          <img src={data.Poster} alt={data.Title} />
        </div>
      </div>
    )
}

export default page
