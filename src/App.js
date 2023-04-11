import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import Filters  from './components/Filters/Filters';
import Products from './components/Products/Products';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import { AppContainer } from './styles'





const App = ()=>{
  const [products, setProducts] = useState([])
  const [minFilter, setMinFilter] = useState()
  const [maxFilter, setMaxFilter] = useState()
  const [nameFilter, setNameFilter] = useState('Produto')
  const [productsInCart, setProductsInCart] = useState([])



  useEffect(()=>{
    getProducts()
  }, [])

  const getProducts = ()=>{
    axios.get('https://e-commerce-three-lovat.vercel.app/products').then(res=>{
      setProducts(res.data)
    }).catch(e=>{
      alert(e.response.data)
    })
  }


  const onChangeMinFilter = (event) => {
  setMinFilter(event.target.value)
  }

  const onChangeMaxFilter = (event) => {
    setMaxFilter(event.target.value)
  }

  const onChangeNameFilter = (event) => {
    setNameFilter(event.target.value)
  }


  const onAddProductToCart = (productId) => {
    const productInCart = productsInCart.find(product => productId === product.id)

    if(productInCart) {
      const newProductsInCart = productsInCart.map(product => {
        if(productId === product.id) {
          return {...product, quantity: product.quantity + 1}
        }

        return product
      })

      setProductsInCart(newProductsInCart)
    } else {
      const productToAdd = products.find(product => productId === product.id)

      const newProductsInCart = [...productsInCart, {...productToAdd, quantity: 1}]

      setProductsInCart(newProductsInCart)
    }
  }


  const onRemoveProductFromCart = (productId) => {
    const newProductsInCart = productsInCart.map((product) => {
      if(product.id === productId) {
        return {...product, quantity: product.quantity - 1}
      }
      return product
    }).filter((product) => product.quantity > 0)

    setProductsInCart(newProductsInCart)
  }


  return(
    <AppContainer>
      <Filters
        minFilter={minFilter}
        maxFilter={maxFilter}
        nameFilter={nameFilter}
        onChangeMinFilter={onChangeMinFilter}            
        onChangeMaxFilter={onChangeMaxFilter}            
        onChangeNameFilter={onChangeNameFilter} />

      <Products 
        products={products}
        minFilter={minFilter}
        maxFilter={maxFilter}
        nameFilter={nameFilter}
        onAddProductToCart={onAddProductToCart} />

      <ShoppingCart
        productsInCart={productsInCart}
        onRemoveProductFromCart={onRemoveProductFromCart} />
      
    </AppContainer>
  )
}

export default App;
