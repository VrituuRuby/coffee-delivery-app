import styled from "styled-components"

export const ShoppingCartContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    border-radius: 6px 2.75rem 6px 2.75rem;
  }
`

export const ShoppingList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const ShoppingItem = styled.li`
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

export const ShoppingTotal = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const TotalItem = styled.li`
  color: ${props => props.theme["base-text"]};
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;

  &:last-child{
    font-weight: bold;
    font-size: 1.25rem;
    color: ${props => props.theme["base-subtitle"]};
  }
`

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme["yellow-500"]};
  color: ${props => props.theme.white};
  padding: 1rem;
  border-radius: 6px;
  border: 0;
  font-weight: bold;
  font-size: 0.75rem;
`