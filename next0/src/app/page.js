import Link from 'next/link'
import { Button } from './Button'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home(){

    return (
      <div>
        <div>
          <h1 className="h4">Viva Santana!</h1>
          <Button />
          <Link href="/Next1">Next1</Link> <br></br>
          <a href="/Next2">Next2</a>
          <br></br>
          <a href="/movies"> Data fetching #1</a>
          <br></br>
          <a href="/clienteMovies1">Data Fetching e Client Components</a>
          <a href="/clientComponent">Implementação de API</a>
        </div>
      </div>
    )


  }