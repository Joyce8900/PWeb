"use client"

import React, { useState } from "react"
import Tabela from "./Tabela"

const Button = () => {
 
  const [exibir, setExibir] = useState(false) 

  return (
    <div>
      <button onClick={() => setExibir(!exibir)}>
        Horários da Programação
      </button>
      {exibir && (
        <Tabela />
      )}
    </div>
  )
}

export default Button
