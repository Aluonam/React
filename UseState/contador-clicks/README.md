# HOOK USESTATE
## Implementa un contador de clics que muestre el número de veces que se ha hecho clic en un botón.

1. Crear e importar componente
2. Crear useState que empiece en 0
    ``const [num, setNum] = useState(0)``
3. Llamar a la variable en el return
4. Crear un botón dentro de la función onClick habrá que poner que el modificador es igual a la variable + 1
    ``<button onClick={()=>{setNum(num+1)}}>Click</button>``
5. También se puede añadir boton para poner el contador a 0. En su función debemos poner que el modificador es igual a 0.
    ``<button onClick={()=>{setNum(0)}}>Poner a 0</button>``

```javascript
    const ContadorClicks = () => {

            const [num, setNum] = useState(0)

    return (
        <>
            {num}
            <button onClick={()=>{setNum(num+1)}}>Click</button>
            <button onClick={()=>{setNum(0)}}>Poner a 0</button>
        </>
    )
    }
```