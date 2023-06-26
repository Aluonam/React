import { Inter } from 'next/font/google'
import WeatherAppScreen from './screens/WeatherAppScreen'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

        <WeatherAppScreen></WeatherAppScreen>

    </>
  )
}
