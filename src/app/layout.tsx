import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Minha Loja',
  description: 'Criando minha loja',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <header>
          <h1>Minha Loja</h1>
        </header>
        {children}
<footer>
<h1>Minha Loja</h1>
</footer>
        </body>
    </html>
  )
}
