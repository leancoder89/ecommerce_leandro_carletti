**# E-commerce dedicado a la venta de productos materos (mates, bombillas y yerba)**

**#### No es solo un mate, son momentos...**

**## Vite, React, Javascript & Firebase**

---

**#### Proceso de instalacion:**

En Windows, dirijase a "este equipo", luego vaya a "Disco local (C:)" y cree una carpeta para el proyecto.
En VSC, dentro de la terminal, busque el archivo "C:/ecommerce_leandro_carletti"

1. install Node.js
2. npm install
3. create-react-app
4. npm install react-router-dom (permite mostrar páginas y permitir a los usuarios navegar por ellas)
5. npm install react-hook-form (biblioteca de formularios de React que le ayuda a validar formularios rápidamente)

**#### Rutas y Componentes**

<^>Inicio<^>

```
<Route path="/" element={<ItemListContainer greeting={"Bienvenidos"} />} />
```

<^>Lista de Productos<^>

```
<Route path="/category/:categoryId" element={<ItemListContainer greeting={"Productos filtrados"} />} />
```

<^>Detalle del Articulo<^>

```
<Route path="/detail/:productId/" element={<ItemDetailContainer />} />
```

<^>Ver carrito de compras<^>

```
<Route path="/cart" element={<CartView />} />
```

<^>Pagar/Checkout<^>

```
<Route path="/checkout" element={<Checkout />} />
```

<^>Error si no se Encuentra la Pagina<^>

````
<Route path="*" element={<h1>404 Not Found</h1>} />```
````

---













# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
