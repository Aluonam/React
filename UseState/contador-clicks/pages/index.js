import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ContadorClicks from './components/ContadorClicks'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <ContadorClicks></ContadorClicks>
      </main>
    </>
  )
}
