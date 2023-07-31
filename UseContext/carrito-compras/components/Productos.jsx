import React, { useContext } from 'react'
import styles from '@/styles/Home.module.css'
import { CartContext } from '@/context/CartContextApp'

const Productos = () => {
    
    //  Productos que tenemos:
    const dataProduct = [
        {name: "producto 1",
        description: "hace cosas 1",
        },
        {name: "producto 2",
        description: "hace cosas 2",
        },
        {name: "producto 3",
        description: "hace cosas 3",
        },
        {name: "producto 4",
        description: "hace cosas 4",
        },
    ]

    const {productosCarrito, setProductosCarrito} = useContext(CartContext)

    //función que recorre y muestra cada elemento
    const showProduct = dataProduct.map((obj)=>{return(
        //Cada elemento tendrá: el nombre y descripcion del objeto y su propio botón.
        <>
        <div className={styles.rowProduct}>
            {obj.name}-{obj.description}
            <button onClick={()=>{setProductosCarrito([...productosCarrito, obj.name])}}>Añadir</button>
        </div> 
       </>
    )})

        console.log(productosCarrito)

  return (
    
    <div className={styles.productContainer}>
        Productos:
        <br></br>
        <br></br>
        {showProduct}
    </div>

  )
}

export default Productos