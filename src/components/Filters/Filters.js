import React from 'react'
import styled from 'styled-components';

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

export class Filters extends React.Component {
  render() {
    return <FiltersContainer>
      <h3>Filtros</h3>
        <InputContainer>
          Valor mínimo:&nbsp;
          <input
            type="number"
            value={this.props.minFilter}
            onChange={this.props.onChangeMinFilter}
          />
        </InputContainer>
        <InputContainer>
          Valor máximo:&nbsp;
          <input
            type="number"
            value={this.props.maxFilter}
            onChange={this.props.onChangeMaxFilter}
          />
        </InputContainer>
        <InputContainer>
          Busca por nome:&nbsp;
          <input
            type="text"
            value={this.props.nameFilter}
            onChange={this.props.onChangeNameFilter}
          />
        </InputContainer>
    </FiltersContainer>
  }
}
