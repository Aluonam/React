import React, { useState } from 'react'
import TaskBoxesCSS from './TaskBoxes.module.css'

//COMPONENTE HIJO para checkbox (hijo 2)
const TaskBoxes = ({tareasPorHacer,setTareasPorHacer,tareasHechas, setTareasHechas}) => {
    
    //useState que guarda en array vacio los chechbox que se han seleccionado
    const [indexMarcadosTPH, setIndexMarcadosTPH] = useState([])
    //useState de marcados en caja de la derecha (hechos)
    const [indexMarcadosH, setIndexMarcadosH] = useState([])



//---------------------------------------------------- GESTION DE CHECKS MARCADOS Y CONTROL DE ELLOS EN EL ARRAY
    const handleShowListOfTasks = ()=>{
        return tareasPorHacer.map((valorActual,index)=>{
            return(
                <>
                <div className={TaskBoxesCSS.mainBoxContent_taskBoxes__BoxList_CheckBox}>
                    <input 
                        type="checkbox"
                        checked={indexMarcadosTPH.some((valorActual)=>valorActual===index)} 
                        onClick={()=>{handleAddOrDeletTaskPH(index)}}>
                    </input>
                    <label for="horns">{valorActual}</label>
                </div>
                </>
            )
            
        })
    }

    const handleShowListOfTasksDone = ()=>{
        return tareasHechas.map((valorActual,index)=>{
            return(
                <>
                <div className={TaskBoxesCSS.mainBoxContent_taskBoxes__BoxList_CheckBox}>
                    <input 
                        type="checkbox" 
                        checked={indexMarcadosH.some((valorActual)=>valorActual===index)} 
                        onClick={()=>{handleAddOrDeletTaskH(index)}}>
                    </input>
                    <label for="horns">{valorActual}</label>
                </div>
                </>
            )
            
        })
    }


    const handleAddOrDeletTaskPH = (posicionArray)=>{
        let newArrayValue 
        const existePosicion =  indexMarcadosTPH.some((elementoArray)=>elementoArray === posicionArray)
        if(existePosicion){ newArrayValue = indexMarcadosTPH.filter((valAct)=>valAct!==posicionArray) }
        else{newArrayValue = [...indexMarcadosTPH,posicionArray]}
        setIndexMarcadosTPH(newArrayValue)
    }

    const handleAddOrDeletTaskH = (posicionArray)=>{
        let newArrayValue 
        const existePosicion =  indexMarcadosH.some((elementoArray)=>elementoArray === posicionArray)
        if(existePosicion){ newArrayValue = indexMarcadosH.filter((valAct)=>valAct!==posicionArray) }
        else{newArrayValue = [...indexMarcadosH,posicionArray]}
        setIndexMarcadosH(newArrayValue)
    }

//___________________________________________________________________________________________________________________________



    const handlePasarTareasPorHacer = ()=>{
        let newTareasPH = []
        let newTareasH = tareasHechas

        tareasPorHacer.map((vlrAct,index)=>{
            if(indexMarcadosTPH.indexOf(index) !== -1){
                newTareasH.push(vlrAct)
            }else{
                newTareasPH.push(vlrAct)
            }
        })

        setTareasPorHacer(newTareasPH)
        setTareasHechas(newTareasH)
        setIndexMarcadosTPH([]) //Dejar vacio el listado de index marcados
    }


    const handlePasarTareasHechas = ()=>{
        let newTareasPH = tareasPorHacer
        let newTareasH = []

        tareasHechas.map((vlrAct,index)=>{
            if(indexMarcadosH.indexOf(index) !== -1){
                newTareasPH.push(vlrAct)
            }else{
                newTareasH.push(vlrAct)
            }
        })

        setTareasPorHacer(newTareasPH)
        setTareasHechas(newTareasH)
        setIndexMarcadosH([]) //Dejar vacio el listado de index marcados
    }







 //----------------------------- MAIN RETURN   
  return (
    <>
    {/* Se divide en tres partes una caja, flechas, otra caja (las cajas comparten el mismo estilo) */}
    <div className={TaskBoxesCSS.mainBoxContent_taskBoxes__BoxList}>
        {handleShowListOfTasks()}
    </div>
    <div className={TaskBoxesCSS.mainBoxContent_taskBoxes__Buttons}>
        <div className={TaskBoxesCSS.taskBoxes__Buttons_arrow} onClick={()=>{handlePasarTareasPorHacer()}}> {">"} </div>
        <div className={TaskBoxesCSS.taskBoxes__Buttons_arrow} onClick={()=>{handlePasarTareasHechas()}}> {"<"} </div>
    </div>
    <div className={TaskBoxesCSS.mainBoxContent_taskBoxes__BoxList}>
        {handleShowListOfTasksDone()}
    </div>
    </>

  )
}

export default TaskBoxes