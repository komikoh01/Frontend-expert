import type { Product } from "../pages/products"

export function generatedProducts(id?: number){
    const products: Product[] = []

    for(let i=1; i <= 2000; i++) {
        const product = {
            id: i*10,
            name: `Producto #-${i}`,
            price: `${i * 467}`,
            description: `El producto ${i} es uno de los productos mas buscados en el mercado porque no hay ni pinga en el pais de pinga este jsjsjsjsj.... historia veridica`
        }
        products.push(product)
    }

    if(id) return products[id - 1]

    return products
}