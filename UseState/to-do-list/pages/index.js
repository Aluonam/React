import styles from '@/styles/Home.module.css'
import { ToDoScreen } from './screens/ToDoMainScreen/ToDoScreen'


export default function Home() {
  return (
    <>
     
      <main className={styles.main}>
        <ToDoScreen></ToDoScreen>
      </main>
    </>
  )
}
