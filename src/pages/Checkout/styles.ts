import styled from "styled-components"

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 2rem;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    padding-bottom: 2rem;
  }
`
export const CheckoutCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  background-color: ${props => props.theme["base-card"]};
  border-radius: 6px;
  @media screen and (max-width: 600px) {
    padding: 1rem;
  }

  span.error{
    font-size: 0.75rem;
    font-style: italic;
    color: red;
  }
`
export const CheckoutTitle = styled.h2`
  font-family: 'Baloo 2', cursive;
  color: ${props => props.theme["base-subtitle"]};
`
