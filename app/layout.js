
import './globals.css'
import { Nunito } from 'next/font/google';
import localFont from 'next/font/local'
import { GoogleAnalytics } from '@next/third-parties/google'

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
      <GoogleAnalytics gaId="G-2M77D3LYY1" />
    </html>
  )
}
