import styled from 'styled-components';



export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
  @media(max-width: 700px){
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`