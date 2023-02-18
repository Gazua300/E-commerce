import React from 'react'
import styled from 'styled-components'



const FiltersContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
  @media(max-width: 700px){
    text-align: center;
    width: 90%;
  }
`

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
  @media(max-width: 700px){
    flex-direction: row;
    input {
      width: 20%;
      text-align: center;
    }
  }
`



export default function Filters(props){
    return(
        <FiltersContainer>
          <h3>Filtros</h3>
          <InputContainer>
            Valor mínimo:&nbsp;
            <input
              type="number"
              value={props.minFilter}
              onChange={props.onChangeMinFilter} />
          </InputContainer>
        <InputContainer>
          Valor máximo:&nbsp;
          <input
            type="number"
            value={props.maxFilter}
            onChange={props.onChangeMaxFilter} />
        </InputContainer>
        <InputContainer>
          Busca por nome:&nbsp;
          <input
            type="text"
            value={props.nameFilter}
            onChange={props.onChangeNameFilter} />
        </InputContainer>
        </FiltersContainer>
    )
}
