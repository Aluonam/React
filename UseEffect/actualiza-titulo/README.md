# HOOK USEEFFECT
## Actualización del título: Utiliza useEffect para actualizar el título del documento con un mensaje estático (por ejemplo, "¡Hola, React!") después de que el componente se haya montado.

1. Crear componente.
2. Crear useState para almacenar texto.
3. Crear useEffect con tercera parte vacia [] sino se ejecuta continuamente.
4. En la parte lógica del useEffect se especifica que la variable del estado sea el nuevo titulo.
El código quedaria:

```javascript
        const [title, setTitle] = useState("Título por defecto")

        useEffect(() => {
          setTitle("Hola React!")
        }, [])
        

  return (
    <>
    {title}
    </>
  )

```