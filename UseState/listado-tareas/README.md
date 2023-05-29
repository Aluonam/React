# HOOK USESTATE
## Crea una lista de tareas pendientes que permita agregar y eliminar elementos.

1. Crear componente Listado
2. Crear useState con un array vacio
``const [tarea, setTarea] = useState([])``
3. Crear otro useState que almacene el valor escrito en pantalla 
``const [textoPantalla, setTextoPantalla] = useState()``
4. Hacer caja para meter texto 
``<input type= “text”>``
5. Dentro del input pongo **onChange={}** para guardar el valor del texto que ponga
6. La lógica dentro del onChange es: el modificador del texto en pantalla coge la info de la variable tarea con **.target.value**
Además, tiene que recibir por parámetro los datos que almacena la variable tarea para poder usarla al hacer el .target.value 
Debemos especificar también que el **valor del input** será lo que haya en la variable textoPantalla
`` onChange={(tarea)=>{setTextoPantalla(tarea.target.value)}} value={textoPantalla}``
En total el input queda así:
``<input placeholder='Escribe tarea' onChange={(tarea)=>{setTextoPantalla(tarea.target.value)}} value={textoPantalla}/>``
7. Crear función para añadir lo escrito en pantalla (mejor si la función está arriba y en el return solo el botón).
En la función se coge el array vacio (la variable inicial) se hace .push(con la variable del texto en pantalla).
Y además poner a cero el modificador del texto en pantalla. Es decir, decirle que no tenga caracteres ("")
<code>
    const handleAddArray = ()=>{
        tarea.push(textoPantalla)
        setTextoPantalla("") 
    }
</code>

8. Crear un botón para que se envíe lo escrito en pantalla y llamar a la función (en el return) 
``<button onClick={()=>{handleAddArray()}}>Añadir</button>``
9. Crear otra función para que elimine las tareas
<code>
 const handleDelArray = ()=>{
      setTarea(tarea.slice(0,-1))
      setTextoPantalla("")
    }
</code>

10. Crear otro botón para eliminar que llame a la función eliminar
``<button onClick={()=>{handleDelArray()}}>Borrar</button>``
11. Mostrar en pantalla el listado.
Para ello dentro de una lista (<ul>) se llama a la tarea, entre {} porque es JS. 
se recorre el array tarea con un .map() donde se especifica que se le va a pasar un objeto y lo tiene que devolver como un lista (<li>) de objetos
<code>
    <ul>
      {tarea.map((objTarea)=><li>{objTarea}</li>)}
    </ul>
</code>







4. Hacer .push de la info que se escribe en el input al modificador ej: setLista(lista.push('texto de la tarea'))