
import './globals.css'
import { Nunito } from 'next/font/google';
import localFont from 'next/font/local'

const nunito = Nunito({ subsets: ['latin'] });

const gt = localFont({ src: './fonts/gt.ttf' });

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
