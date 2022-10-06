import styled from "styled-components"

export const CheckoutContainer = styled.main`
  margin: 0 10rem;
`

export const FormContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;

  h2 {
    font-family: 'Baloo 2', cursive;
    color: ${props => props.theme["base-subtitle"]};
  }

  `

export const AddressForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  background-color: ${props => props.theme["base-card"]};
  border-radius: 6px;
`

export const FormDescription = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${props => props.theme["base-text"]};

  h3 {
    color: ${props => props.theme["base-subtitle"]};
    font-weight: 400;
  }

  svg {
    color: ${props => props.theme["yellow-500"]};
  }
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;

  }
  input {
    width: 100%;
    background-color: ${props => props.theme["base-input"]};
    color: ${props => props.theme["base-text"]};
    padding: 0.75rem;
    border: 2px solid ${props => props.theme["base-button"]};
    border-radius: 6px;
    line-height: 1.3;

    & ::placeholder {
      color: ${props => props.theme["base-label"]};
    }
  }

`
