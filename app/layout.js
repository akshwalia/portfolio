
import './globals.css'
import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Aksh Walia',
  description: 'Aksh Walia is a web developer based in India.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-primary-yellow`}>
        {children}
      </body>
    </html>
  )
}
