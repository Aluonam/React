import React from 'react'
import SearchHeader from '../components/molecules/SearchHeader'
import screenCSS from './WeatherApp.module.css'

const WeatherAppScreen = () => {
  return (
    <main className={screenCSS.main}>
    <h1 className={screenCSS.title}>App del tiempo</h1>
    <div className={screenCSS.searchBox}><SearchHeader></SearchHeader></div>
    <div className={screenCSS.resultBox}>caja tiempo</div>
    </main>
  )
}

export default WeatherAppScreen