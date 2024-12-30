
import './globals.css'
import { Nunito } from 'next/font/google';
import localFont from 'next/font/local'
import { GoogleAnalytics } from '@next/third-parties/google'
import Chat from './components/chat';
import Navbar from './components/Navbar';

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
        <div className="gradient min-h-[100vh] min-w-[100vw] overflow-hidden" >
        </div>
        <Navbar />
        <Chat />
        {children}
      </body>
      <GoogleAnalytics gaId="G-2M77D3LYY1" />
    </html>
  )
}
