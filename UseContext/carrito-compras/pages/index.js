import styles from '@/styles/Home.module.css'
import Carrito from '@/components/Carrito'
import Productos from '@/components/Productos'
import { ContextAppProvider } from '@/context/CartContextApp'


export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>

        <div className={styles.title}>
          App carrito de compra
        </div>

        <div className={styles.container}>
        <ContextAppProvider>
          <Productos></Productos>
          <Carrito></Carrito>
        </ContextAppProvider>
        </div>

      </main>
    </>
  )
}
