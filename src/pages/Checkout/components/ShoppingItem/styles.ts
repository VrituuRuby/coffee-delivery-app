import styled from "styled-components"

export const ShoppingItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;

  > span {
    color: ${props => props.theme["base-text"]};
    font-weight: bold;
    text-align: center;
  }
`

export const ShoppingDetails = styled.div`
  display: flex;
  gap: 20px;

  img {
    aspect-ratio: 1;
    width: 4rem;

    @media screen and (max-width: 480px){
      width:  3rem;
      height: 3rem;
    }
  }

  > div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${props => props.theme["base-subtitle"]};

   > div {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
    }
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0 0.5rem;

  background-color: ${props => props.theme["base-button"]};
  color: ${props => props.theme["base-text"]};
  border: 0;
  border-radius: 6px;

  font-size: 0.75rem;

  &:hover{
    cursor: pointer;
  }

  svg {
    color: ${props => props.theme["purple-500"]};
  }
`