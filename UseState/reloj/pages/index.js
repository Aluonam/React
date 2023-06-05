import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Reloj from './components/Reloj'
import RelojPrimitivo from './components/RelojPrimitivo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Reloj></Reloj>
        <RelojPrimitivo></RelojPrimitivo>
      </main>
    </>
  )
}
