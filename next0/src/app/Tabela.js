let eventos = [
  {
    day: "Domingo (07)",
    event: "Almoço de Sant'Ana",
    attractions: "Solange Silva",
  },
  {
    day: "Quarta-feira (17)",
    event: "Chegada dos Peregrinos e Festa dos Doces",
    attractions: "Chorões do Seridó",
  },
  {
    day: "Quinta-feira (18)",
    event: "Jantar de Sant'Ana",
    attractions: "Kanelinha e banda",
  },
  {
    day: "Sexta-feira (19)",
    event: "Noite do Samba",
    attractions: "Marcus Vinícius, Dodora Cardoso e Morada do Samba",
  },
  {
    day: "Sábado (20)",
    event: "Shows",
    attractions: "Uskaravelho e Luciana Souza, Jean Carlos & Banda",
  },
  {
    day: "Domingo (21)",
    event: "Forró Flor de Caroá e Escurinho",
    attractions: "Flor de Caroá, Escurinho",
  },
  {
    day: "Segunda-feira (22)",
    event: "Show Religioso",
    attractions: "William Sanfona",
  },
  {
    day: "Terça-feira (23)",
    event: "O Pantim e Seu Pereira",
    attractions: "O Pantim, Seu Pereira",
  },
  {
    day: "Quarta-feira (24)",
    event: "Shows",
    attractions: "Socorro Lima (ex-Cavalo de Pau), Wall Dutra",
  },
  {
    day: "Quinta-feira (25)",
    event: "Feirinha",
    attractions: "Evan, Rodolfo Lopes, Furiosa",
  },
  {
    day: "Sexta-feira (26)",
    event: "Noite do Rock",
    attractions:
      "Max Strellar e Banda Césio (participação sanfoneiro Geraldão)",
  },
  {
    day: "Sábado (27)",
    event: "Shows",
    attractions: "Luíz Fidelis e Nonato Costa",
  },
  {
    day: "Domingo (28)",
    event: "Padre Fábio de Melo (na Ilha de Sant'Ana)",
    attractions: "Padre Fábio de Melo",
  },
]
const Tabela = () => {
  return (
    <div>
      <table
        border="1"
        style={{ height: "100px", width: "90%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>Dia</th>
            <th>Evento</th>
            <th>Atrações</th>
          </tr>
        </thead>
        <tbody>
          {eventos.map(({ day, event, attractions }) => (
            <tr key={attractions}>
              <td>{day}</td>
              <td>{event}</td>
              <td>{attractions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export  {Tabela}
