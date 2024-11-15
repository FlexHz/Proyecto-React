import { useState } from "react"
import { FormProducts } from "./FormProducts/FormProducts"
import { Header } from "./Header/Header"
import { ListProducts } from "./ListProduct/ListProducts"

interface ItemProduct {
    precio: number,
    nombre: string, 
    imagen: string,
}

export const AppProduct = () => {

    const [products, setProducts] = useState<ItemProduct[]>([])

    const handleAddProduct = (newItem: ItemProduct) => {
        setProducts((prev) => [...prev, newItem])
    }

    return (
        <div>
            <Header />
            <h2 className="text-center">Formulario</h2>
            <FormProducts handleAddProduct={handleAddProduct}/>
            <h2 className="text-center">Productos</h2> 
            { products.length > 0 ? (<ListProducts arrItems={products}/>) : (<h3 className="text-center">No hay productos</h3>)}
        </div>
    )
}
