import React from 'react'


export default function Filters(props){
    return(
        <div className='border border-2 p-2
          shadow-lg rounded'>
          <h3>Filtros</h3>
            Valor mínimo:&nbsp;
            <input className='form-control'
              type="number"
              min='1'
              value={props.minFilter}
              onChange={props.onChangeMinFilter} />
            Valor máximo:&nbsp;
            <input
              className='form-control'
              type="number"
              min='1'
              value={props.maxFilter}
              onChange={props.onChangeMaxFilter} />
            Busca por nome:&nbsp;
            <input
              className='form-control'
              type="text"
              value={props.nameFilter}
              onChange={props.onChangeNameFilter} />          {/* </InputContainer> */}
        </div>
    )
}
