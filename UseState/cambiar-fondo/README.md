# HOOK USESTATE
## Crea un componente de selector de color con botones para cambiar el color de fondo.

1. Crea componente e importar
2. Crear useState con valor booleano
    ``const [color, setColor] = useState(true)``
3. Crear div con función onClick que cambia valor del modificador al contrario del que tenga la variable. *Uso de !*
    `` <div onClick={()=>{setColor(!color)}} className={fondoStyle.btnClick}>Cambia el fondo</div>``
4. Crear documento de hoja de estilos CSS e importar en el componente
    ``import nombreDelCSS-para-este-documento from './ruta/archivo.css'``
5. Crear dos constantes que serán igual a los nombres del estilo
    ``const name2= fondoStyle.screencolor2``
    ``const name = fondoStyle.screencolor1``
5. Poner dentro del div el estilo del boton tal y como lo llamaré ne el archivo de CSS
    ``className={fondoStyle.btnClick}``
6. Englobar botón dentro de un div que ocupará toda la pantalla y cambiará de color.
Para eso al poner el className y especificar el estilo de css debemos poner:
    ``<div className={`${color ? name : name2 }`}>``

El código quedaría así:
**Documento del componente Fondo:**
```javascript
    const Fondo = () => {

        const [color, setColor] = useState(true)

        const name2= fondoStyle.screencolor2
        const name = fondoStyle.screencolor1

    return (
        <>
        <div className={`${color ? name : name2 }`}>
            <div onClick={()=>{setColor(!color)}} className={fondoStyle.btnClick}>Cambia el fondo</div>
        </div>
        </>
    )
    }
```
------------------------------------------------------------------
En el CSS además podemos añadir un cambio de estilo cuando ponemos el cursor encima con **.id:hover{---}** y un cambio de estilo cuando pulsamos al poner el nombre del **.id:active{---}**.
**Documento de la hoja de estilos CSS:**
```CSS
    .screencolor1{
        background-color: aqua;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .screencolor2{
        background-color: yellow;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .btnClick{
        background-color: aliceblue;
        width: 130px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }

    .btnClick:hover{
        cursor: pointer;
        background-color: white;
    }

    .btnClick:active{
        background-color: rgb(236, 245, 179);
    }
```
