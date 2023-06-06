import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Fondo from './components/Fondo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <Fondo></Fondo>
      </main>
    </>
  )
}
