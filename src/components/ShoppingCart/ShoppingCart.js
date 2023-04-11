import React from 'react'
import ShoppingCartItem from './ShoppingCartItem'
import styled from 'styled-components';



const CartListContainer = styled.div`
  display: grid;
  gap: 8px;  
`

export default function ShoppingCart(props){
  const getTotalValue = () => {
    let totalValue = 0

    for(let product of props.productsInCart) {
      totalValue += product.price * product.quantity
    }

    return totalValue
  }
  
  return <div className='border border-2 shadow-lg rounded p-2'>
    <h3>Carrinho:</h3>
    <CartListContainer>
      {props.productsInCart.map((product) => {
        return <ShoppingCartItem 
                  cartItem={product} 
                  onRemoveProductFromCart={props.onRemoveProductFromCart}/>
      })}
    </CartListContainer>
    <p>Valor total: R${getTotalValue()},00</p>
  </div>
}
