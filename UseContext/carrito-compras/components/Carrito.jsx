import React, { useContext } from 'react'
import styles from '@/styles/Home.module.css'
import { CartContext } from '@/context/CartContextApp';

const Carrito = () => {

    const {productosCarrito,setProductosCarrito} = useContext(CartContext);

    const handleDelete = (position) => {

        const newProdCart = structuredClone(productosCarrito)
        newProdCart.splice(position,1)
        setProductosCarrito(newProdCart)
    }

    const shorCart = productosCarrito.map((obj, position) => {
        return(
            <>
            <div className={styles.rowProduct}>
            {obj}
            <button onClick={()=>{ handleDelete(position) }}>eliminar</button>
            </div>
            </>
        )
    }
    )

    
    
  return (

    <div className={styles.cartContainer}>
        Carrito
        <br></br>
        <br></br>

        {shorCart}
    </div>

  )
}

export default Carrito