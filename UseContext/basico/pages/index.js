import styles from '@/styles/Home.module.css'
import BotonCambioColor from '@/components/BotonCambioColor'
import { ContextAppProvider } from '@/context/ContextApp'

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
      <ContextAppProvider>
        {/* Componente que accederá al context*/}
        <BotonCambioColor></BotonCambioColor>
      </ContextAppProvider>
      </main>
    </>
  )
}
