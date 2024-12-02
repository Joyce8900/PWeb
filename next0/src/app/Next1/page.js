import React from "react"
import { MariaPrea } from "./MariaPrea"
import { Separado } from "./Separado/page"
import { Mensagens } from "./Mensagens"
export default function Rota() {
  return (
    <>
      <Separado/>
      <MariaPrea/>
      <Mensagens texto="Exibindo por Props"/>
    </>
  )
}
