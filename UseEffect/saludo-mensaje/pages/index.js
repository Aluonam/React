import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Saludo from './components/Saludo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <Saludo></Saludo>
      </main>
    </>
  )
}
