import styles from './page.module.css'
import './globals.css'
import {Metadata} from 'next'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'


export const metadata: Metadata = {
  title : 'Adehenry : Home Page',
  description: 'e-Commerce Application with stripe'
}

export default function RootLayout({children}: {children: React.ReactNode}) {

  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <Navbar />
        </header>
        <main className={styles.main}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
