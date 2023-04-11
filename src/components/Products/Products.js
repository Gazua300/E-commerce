import React, { useState } from 'react'
import ProductCard from './ProductCard'
import styled from 'styled-components';

const ProductsContainer = styled.div`

`

const ProductsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  @media(max-width: 700px){
    text-align: center;
  }
`

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 16px;
  @media(max-width: 600px){
    display: flex;
    flex-direction: column;
  }
`



export default function Products(props){
  const [sort, setSort] = useState('')



  const getFilteredAndOrderedList = () => {
    return props.products
      .filter((product) => props.maxFilter ? product.price < props.maxFilter : true)
      .filter((product) => props.minFilter ? product.price > props.minFilter : true)
      .filter((product) => props.nameFilter ? product.name.includes(props.nameFilter) : true)
      .sort((a, b) => sort === 'CRESCENTE' ? a.price - b.price : b.price - a.price)
  }

  const onChangeSort = (event) => {
    setSort(event.target.value)
  }


  const filteredAndOrderedList = getFilteredAndOrderedList()


  return(
    <ProductsContainer>
       <ProductsHeader>
         <p>Quantidade de produtos: {filteredAndOrderedList.length}</p>
          <label>
            <select className='form-select' 
                value={sort} onChange={onChangeSort}>
              <option value='' defaultValue>Ordenação</option>
              <option value={'CRESCENTE'}>Crescente</option>
              <option value={'DECRESCENTE'}>Decrescente</option>
            </select>
          </label>
       </ProductsHeader>
       <ProductsGrid>
         {filteredAndOrderedList.map((product) => {
          return <ProductCard
            product={product}
            onAddProductToCart={props.onAddProductToCart} />
         })}
      </ProductsGrid>
    </ProductsContainer>
  )
}