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

export const Spacer = styled.span`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme["base-button"]};
`