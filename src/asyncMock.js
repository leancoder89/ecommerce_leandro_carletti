const products = [
    {
        id: '1',
        name: 'Mate Imperial calabaza',
        price: 20000,
        category: 'mates',
        img: 'https://matesibarra.com/wp-content/uploads/2021/06/linea-a.jpg',
        stock: 7,
        description: 'mate imperial de calabaza con guarda de acero'
    },

    {
        id: '2',
        name: 'Mate Imperial Escudo',
        price: 25000, 
        category: 'mates',
        img: 'https://d22fxaf9t8d39k.cloudfront.net/c4eb637363f8e078e1953265b78375d799a0930f7dfa69804774c8569559d53527170.jpeg',
        stock: 5,
        description: 'mate imperial con escudo argentino y guarda de acero'
    },


    {
        id: '3',
        name: 'Mate Madera',
        price: 12000,
        category: 'mates',
        img: 'https://mohicanoargentina.com.ar/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/0/504-180.jpg',
        stock: 0,
        description: 'mate de madera'
    },

    {
        id: '4',
        name: 'Mate Madera y Ceramico',
        price: 15000,
        category: 'mates',
        img: 'https://acdn.mitiendanube.com/stores/157/335/products/art-3747-161-1f37747d81520fd35c16256700609637-1024-1024.webp',
        stock: 10,
        description: 'mate con base de madera y parte superior de ceramico'
    },

    {
        id: '5',
        name: 'Bombilla Pico de Loro',
        price: 7000,
        category: 'bombillas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_927011-MLA41850319636_052020-O.webp',
        stock: 15,
        description: 'bombilla pico de loro'
    },

    {
        id: '6',
        name: 'Bombilla Stanley',
        price: 12000,
        category: 'bombillas',
        img: 'https://pintureriasagitario.com.ar/wp-content/uploads/2023/06/Bombilla-Spring-St-verde.jpg',
        stock: 5,
        description: 'bombilla marca stanley'
    },

    {
        id: '7',
        name: 'Bombilla de Acero',
        price: 3000,
        category: 'bombillas',
        img: 'https://megastar.com.py/1447-large_default/bombilla-inox-bo1.jpg',
        stock: 20,
        description: 'bombilla acero clasica'
    },

    {
        id: '8',
        name: 'Yerba Cachamate Original',
        price: 4500,
        category: 'yerbas',
        img: 'https://cachamai.com.ar/wp-content/uploads/2021/10/yerba-clasica-pack.png',
        stock: 20,
        description: 'yerba cachamate tradicional'
    },

{
    id: '9',
    name: 'Yerba Cachamate Hierbas Serranas',
    price: 4500,
    category: 'yerbas',
    img: 'https://cachamai.com.ar/wp-content/uploads/2021/12/yerba-blanca-pack.png',
    stock: 20,
    description: 'yerba cachamate hierbas serranas'
}
]




export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 1000)
    })
}