import React from 'react'
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media(max-width: 700px){
    img {
      height: 200px;
    }
  }
`

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  p {
    margin: 4px 0;
  }
`

const AddToCartButton = styled.button`
  align-self: center;
  margin-top: 4px;
`

export default function ProductCard(props){
    const product = props.product
    return(
      <CardContainer className='border border-3 rounded'> 
        <img src={product.photo} alt="Imagem do produto"/>
        <CardInfo>
          <p>{product.name}</p>
          <p>R$ {Math.floor(Math.random() * 1000)},00</p>
          <AddToCartButton className='btn btn-dark'
            onClick={() => props.onAddProductToCart(product.id)}>
            Adicionar ao carrinho
          </AddToCartButton>
        </CardInfo>
      </CardContainer>
      )
      
}
