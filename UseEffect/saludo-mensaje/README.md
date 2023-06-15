# HOOK USEEFFECT
## Ejercicio más básico
## Saludo inicial: Crea un componente que muestre un saludo inicial utilizando useEffect para mostrar el mensaje después de que el componente se haya montado.

1. Crear componente
2. Crear useState donde guardar texto 
```javascript
    const [textoSaludo, setTextoSaludo] = useState("aaaaaaaaaaaaaaaaaaaaaaa")
```
3. Crear useEffect solo usando la primera parte (la parte lógica)
*Recuerda el useEffect se divide en *parte lógica* + *return* + *escucha*
4. Dentro del useEffect llamamos al modificador del useState y devuelve el texto que quiera. 
5. Para ver el uso del useEffect debo poner setTimeOut() dentro del useEffect. 
Hay que declarar dentro del useEffect que en el setTimeOut haya una constante función que devuelva el modificador con el texto y separado por una coma, el número de milisegundos que tarde en ejecutarse.
```javascript
   useEffect(() => {
      setTimeout( () => setTextoSaludo("Hola soy el componente con useEffect"), 3000)
    }, [])
```
