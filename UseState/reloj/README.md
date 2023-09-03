# HOOK USESTATE
## RELOJ: Construye un reloj digital que muestre la hora actualizada en tiempo real.
Mejor opción: usando useState y useEffect con setInterval, new Date(), toLocaleString() .split()

```javascript
    const [hora, setHora] = useState()

    useEffect(() => {
      const interval = setInterval(() => {
        const fecha = new Date();
        // console.log(fecha.toLocaleString().split(",")[1])
        setHora((fecha.toLocaleString().split(",")[1]))

      }, 1000)

      return()=>clearInterval(interval);
    }, [])
```

Otras dos opciones:
**COMPONENTE RELOJ**

1. Crea componente nuevo e importa y llama en la página principal.
2. Crear useState que guarde la variable hora e importalo.
``const [hora, setHora] = useState("No se ha cargado la hora")``
3. Crear useEffect para especificar que se recargue en un intervalo de un segundo: (no olvides improtarlo)
``setInterval(()=>setHora(new Date().toLocaleTimeString()),1000``
En total:
```javascript
    useEffect(() => {
            const actionPerSecond =  setInterval(()=>setHora(new Date().toLocaleTimeString()),1000)
            return ()=> clearInterval(actionPerSecond)
            }, [])
```
4. En el return se llama a la variable {hora}

```javascript
const Reloj = () => {
    
    const [hora, setHora] = useState("No se ha cargado la hora")
    
    useEffect(() => {
     const actionPerSecond =  setInterval(()=>setHora(new Date().toLocaleTimeString()),1000)
     return ()=> clearInterval(actionPerSecond)
    }, [])

  return (<>{hora}</> )
}
```


**COMPONENTE RELOJ PRIMITIVO**

1. Crea componente nuevo e importa y llama en la página principal.
2. Crear una cosntante para almacenar new Date();
``const fecha = new Date();``
3. Crear useState que por defecto sea la llamada a new Date con .getHours() con .getMinutes() y con .getSeconds()
`` const [horaActual, setHoraActual] = useState(fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds())``
4. Llamar en el return a {horaActual}

```javascript
    const RelojPrimitivo = () => {

        const fecha = new Date();

        const [horaActual, setHoraActual] = useState(fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds())
    return ( 
        <>
        {horaActual}
        </>
    )
    }
```
   

**RELOJ QUE SE RECARGA SOLO AL PULSAR EL BOTÓN**
1. Crear useState.
``const [horaActual, setHoraActual] = useState()``
2. Crear función handleHour que luego llamaremos en el onClick del botón. Esta función guarda en una constante new Date();
Y también dirá que el modificador es igual a la constante anterior (new Date()) con .getHours() con .getMinutes() y con .getSeconds()
```javascript
    const handleFecha = () => {
            const fecha2 = new Date();;
            setHoraActual(fecha2.getHours() + ":" + fecha2.getMinutes() + ":" + fecha2.getSeconds())
        }
```
3. Crear botón en el return y meter funciópn OnClick
4. En la función OnClick se llama a la función de la parte lógica handleHour()
``<button onClick={()=>{handleFecha()}}>refresca la hora</button>``

```javascript
 const RelojPrimitivo = () => {

    const [horaActual, setHoraActual] = useState()

    const handleFecha = () => {
        const fecha2 = new Date();;
        setHoraActual(fecha2.getHours() + ":" + fecha2.getMinutes() + ":" + fecha2.getSeconds())
    }

  return ( 
    <>
    <button onClick={()=>{handleFecha()}}>refresca la hora</button>
    </>
  )
}

```
