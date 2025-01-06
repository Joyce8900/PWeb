
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <div>
        <h1>Viva Santana!</h1>
        <Link href="/Next1">Rota1</Link> <br />
        <br />
        <a href="/Next1">Rota 1, jeito antigo</a>
      </div>
    </div>
  )
}
