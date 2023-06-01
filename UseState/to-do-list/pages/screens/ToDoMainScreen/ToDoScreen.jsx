import React, { useState }from 'react'
import ToDoMainScreen from './ToDoMainScreen.module.css'
import InputAdd from '@/pages/components/InputAdd/InputAdd'
import TaskBoxes from '@/pages/components/TaskBoxes/TaskBoxes'

//COMPONENTE PADRE (importado en pag principal)
export const ToDoScreen = () =>{ 
    const [tareasPorHacer, setTareasPorHacer] = useState([])
    const [tareasHechas, setTareasHechas] = useState([])


  return (
    //División de pantalla en tres secciones donde se irá llamando a cada hijo
    //Las llamadas al CSS deben hacerse especificando: clasName={nombreCSSarriba . nombreQueApareceEnCSS} se van añadiendo con _ las extensiones del CSS
    <div className={ToDoMainScreen.mainBoxContent}> 
        <section className={`${ToDoMainScreen.mainBoxContent_titleInputAdd}`}>
            <InputAdd setTareaPorHacer={setTareasPorHacer}></InputAdd>
        </section>
        <section className={ToDoMainScreen.mainBoxContent_taskBoxes}>
            <TaskBoxes tareasPorHacer={tareasPorHacer} setTareasPorHacer={setTareasPorHacer} tareasHechas={tareasHechas} setTareasHechas={setTareasHechas}></TaskBoxes>
        </section>
        <section className={ToDoMainScreen.mainBoxContent_deleteTask}></section>
    </div>
  )
}
