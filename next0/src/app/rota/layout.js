import React from "react"

const geistSans = {
  variable: "--font-geist-sans",
}

const geistMono = {
  variable: "--font-geist-mono",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Minha Aplicação</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header>
          <nav>
            <a href="/">Home</a>
            <a href="/sobre">Sobre</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2024 Minha Aplicação. Todos os direitos reservados.</p>
        </footer>
      </body>
    </html>
  )
}
