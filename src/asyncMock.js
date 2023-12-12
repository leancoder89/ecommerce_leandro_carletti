const products = [
    {
        id: '1',
        name: 'Mate Imperial calabaza',
        price: 20000,
        category: 'mates',
        img: '/img_ecommerce/mate.jpg',
        stock: 7,
        description: 'mate imperial de calabaza con guarda de acero'
    },

    {
        id: '2',
        name: 'Mate Imperial Escudo',
        price: 25000, 
        category: 'mates',
        img: '/img_ecommerce/mate1.jpg',
        stock: 5,
        description: 'mate imperial con escudo argentino y guarda de acero'
    },


    {
        id: '3',
        name: 'Mate Madera',
        price: 12000,
        category: 'mates',
        img: '/img_ecommerce/mate2.jpg',
        stock: 0,
        description: 'mate de madera'
    },

    {
        id: '4',
        name: 'Mate Madera y Ceramico',
        price: 15000,
        category: 'mates',
        img: '/img_ecommerce/mate3.jpg',
        stock: 10,
        description: 'mate con base de madera y parte superior de ceramico'
    },

    {
        id: '5',
        name: 'Bombilla Pico de Loro',
        price: 7000,
        category: 'bombillas',
        img: '/img_ecommerce/bombilla.jpg',
        stock: 15,
        description: 'bombilla pico de loro'
    },

    {
        id: '6',
        name: 'Bombilla Stanley',
        price: 12000,
        category: 'bombillas',
        img: '/img_ecommerce/bombilla1.jpg',
        stock: 5,
        description: 'bombilla marca stanley'
    },

    {
        id: '7',
        name: 'Bombilla Acero',
        price: 3000,
        category: 'bombillas',
        img: '/img_ecommerce/bombilla2.jpg',
        stock: 20,
        description: 'bombilla acero clasica'
    },

    {
        id: '8',
        name: 'Yerba Cachamate Original',
        price: 4500,
        category: 'yerbas',
        img: '/img_ecommerce/cachamate1.png',
        stock: 20,
        description: 'yerba cachamate tradicional'
    },

{
    id: '9',
    name: 'Yerba Cachamate Hierbas Serranas',
    price: 4500,
    category: 'yerbas',
    img: '/img_ecommerce/cachamate2.png',
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