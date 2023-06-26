## APP TIEMPO
----------------------ATOMIC DESIGN and FILE TYPE----------------------------------
----------------Estrcutura atómica y diseño por tipo de archivo--------------------
--> Crear carpetas: atoms, molecules, organisms. 
De esta forma quedan separados los componentes más pequeños y se van llamando según se suman entre ellos para crear un componente mayor.
--> Además crear carpetas: screens, hooks.
Así se especificará el tipo de función que cumplen.
En este proyecto se usan ambas: *atomic design y file type*




-----------------------------------API---------------------------------------------
1. Pegamos la ruta API en el navegador.
<code>
        https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/talavera%20de%20la%20reina?unitGroup=metric&key=AHAMXWB8MTZMJ5Y2CRE3PKRJP&contentType=json
</code>

2. Analizamos cosas que tendremos que sustituir despues. Por ejemplo: los espacio deberan ser sustituidos por %20
3. También vemos qué tendremos que llamar para conseguir cada dato.
```json
        "queryCost": 1,
        "latitude": 39.9585,
        "longitude": -4.83256,
        "resolvedAddress": "Talavera de la Reina, Castilla-La Mancha, España",
        "address": "talavera de la reina",
        "timezone": "Europe/Madrid",
        "tzoffset": 2,
        "description": "Similar temperatures continuing with no rain expected.",
```

ruta API:
https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/talavera%20de%20la%20reina?unitGroup=metric&key=AHAMXWB8MTZMJ5Y2CRE3PKRJP&contentType=json

AHAMXWB8MTZMJ5Y2CRE3PKRJP

_________________________________PROCESO________________________________________
1. Crear carpeta screens y dentro el componente jsx WeatherApp, esta será la pantalla principal.
2. Dentro de este componente pantalla principal creamos la estructura html (main que incluye h1 y divs). 
3. Dar estilos creando archivo module.css, importando y poniendo clasName={ NombreCSSImportado.nombreDentroDeArchivoCSS } en cada etiqueta del return del componente pantalla principal.
4. Llamar a la molécula (o archivo jsx pertinente) que corresponda al contenido que aparecerá dentro de la etiqueta de la pantalla principal.
```javascript
    const WeatherAppScreen = () => {
  return (
    <main className={screenCSS.main}>
    <h1 className={screenCSS.title}>App del tiempo</h1>
    <div className={screenCSS.searchBox}><SearchHeader></SearchHeader></div>
    <div className={screenCSS.resultBox}>caja tiempo</div>
    </main>
  )
}
```
5. Crear los componentes átomos y especificar su contenido:

En este caso un input y un botón

**En el jsx input:**
1. Crear useState pra guardar el texto que introduzca el usuario.
```javascript
    const [inputDataUser, setInputDataUser] = useState("aun no ha escrito nada")

    console.log(inputDataUser)

```
2. Crear input en el return, dentro especificamos que será de tipo texto y la función que tiene.
La función recibe un valor y la variable del useState se modifica cogiendo ese valor y añadiendolo. Para eso hay que poner **.target.value**.
```javascript
  return (
    <>
    <input 
        type='text' 
        onChange={(valor)=>{setInputDataUser(valor.target.value)}}
    ></input>
    </>
  )
  ```

  3. En el componente botón creo botón.
  (Más tarde recibirá por props la información. Para comprobar su funcionamiento puedo crear useState y pasarle la variable a imprimir en consola en la función onClick del botón).

  ```javascript
    const SendButton = () => {
  return (
    <>
    <button onClick={()=>{}}>Buscar tiempo</button>
    </>
  )}
  ```
4. En el componente padre (en este caso la molécula) crear useState.
5. En el return del componente padre se pasa por parámetro la variable del useState para que la use el botón. Y el modificador del useState para que lo use el input.
```javascript
const SearchHeader = () => {

  const [dataInputUser, setDataInputUser] = useState("")

  return (
    <>
    {/* el input utiliza el valor */}
    <InputLocation setDataInputUser={setDataInputUser}></InputLocation>
    {/* el botón utiliza el modificador */}
    <SendButton dataInputUser={dataInputUser}></SendButton>
    </>
  )
}
```

5. Pasar por props lo que le acabamos de permitir recibir desde el padre. Y además especificarlo dentro de sus respectivas funciones.
```javascript
    const InputLocation = ({setDataInputUser}) => {
    return (
        <>
        {/* <div>InputLocation</div> */}
        <input 
            type='text' 
            onChange={(valor)=>{setDataInputUser(valor.target.value)}}
        ></input>
        </>
    )
    }
```
y
```javascript
    const SendButton = ({dataInputUser}) => {
    return (
        <>
        <button onClick={()=>{console.log(dataInputUser)}}>Buscar tiempo</button>
        </>
    )
    }

```
6. Crear el componente caja donde aparecerá lo que devuelve la API.

