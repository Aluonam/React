
# HOOK USESTATE
## Construye un formulario simple de inicio de sesión con campos para nombre de usuario y contraseña.

1. Crear campo usuario y contraseña y botón enviar en el return
3. Crear useState para guardar un objeto que recoja los datos que escribe el usuario uno para nombre y contraseña
```javascript
    const [nombreUser, setNombreUser] = useState({
      nombre: '',
      pass: ''
    })
```

4. Dentro del input hay que especificar: 
        type
        placeholder
        value
        función onChange
*Hay que especificar en value que corresponde a la variable del useState y a que parte del `objeto: {nombreVariable.Objeto1}`
```javascript
<input
        type='text'
        placeholder=' Nombre'
        value={nombreUser.nombre} // ponemos el valor del objeto que nos interesa en este caso nombreUser.nombre
        onChange={(e) => { setNombreUser({ ...nombreUser, nombre: e.target.value }) }}
        /> //recoge parámetro de dato y devuelve el cambio del modificador que guarda el nombre de usuario. 
```
*los ... antes de nombreUser. 
**OPERADOR SPREAD**: Para mantener todos los campos del objeto y luego pisamos el valor de pass poniendo "pass:nuevoValor" y todo ello envuelto en {} para que siga siendo un objeto.

5. Lo mismo para el input de contraseña. Pero esta vez para que se guarde en el objeto contraseña.
```javascript
      <input 
        type='password' 
        placeholder='Contraseña' 
        value={nombreUser.pass} 
        onChange={(e) => { setNombreUser({ ...nombreUser, pass: e.target.value }) }}/>
      {/* Se pone ...nombreUser para mantener todos los campos del objeto y luego pisamos el valor de pass poniendo "pass:nuevoValor" y todo ello envuelto en {} para que siga siendo un objeto. */}
```
**Es importante:** entender que el operador spread (... previo a variable) permite coger los datos que ya hay. Después pondremos , para añadir los datos del objeto especifico y decir que será igual a los datos que reciba (con .target.value)

6. Configurar el botón haciendo imprimir en consola el objeto (guardado en la variable del useState nombreUser)
     `` <button onClick={() => { console.log(nombreUser) }}> Enviar </button>``

7. Otra forma de hacer este punto para que añada la funcionalidad de quedar vacio tras mostrar en consola. Sería haciendo una función y simplemente llamandola en el botón.
En la función se especificaría que 1-Imprima en consola y 2-Limpie el objeto (setObj({objeto1:' ', objeto2:' '}))
```javascript
  const enviar = ()  => {
          console.log(user);
          setUser({
              nombre: '',
              contra: ''
          })
      }
```
