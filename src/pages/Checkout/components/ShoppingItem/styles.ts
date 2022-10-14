import styled from "styled-components"

export const ShoppingItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;

  img {
    width: 64px;
    height: 64px;
  }
`

export const ShoppingDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;

  span {
    font-size: 1rem;
    line-height: 1.3;
    color: ${props => props.theme["base-subtitle"]};
  }

  div {
    display: flex;
    gap: 0.5rem;
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

  svg {
    color: ${props => props.theme["purple-500"]};
  }
`