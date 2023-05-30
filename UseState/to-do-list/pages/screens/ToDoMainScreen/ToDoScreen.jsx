import React from 'react'
import ToDoMainScreen from './ToDoMainScreen.module.css'
import InputAdd from '@/pages/components/InputAdd/InputAdd'
import { useState } from 'react'

export const ToDoScreen = () =>{ 
    const [tareasPorHacer, setTareasPorHacer] = useState([])
    console.log(tareasPorHacer)

  return (
    <div className={ToDoMainScreen.mainBoxContent}>
        <section className={`${ToDoMainScreen.mainBoxContent_titleInputAdd}`}>
            <InputAdd setTareaPorHacer={setTareasPorHacer}></InputAdd>
        </section>
        <section className={ToDoMainScreen.mainBoxContent_taskBoxes}></section>
        <section className={ToDoMainScreen.mainBoxContent_deleteTask}></section>
    </div>
  )
}
