import styled from "styled-components"

export const FormContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
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

  &.payment-option svg {
    color: ${props => props.theme["purple-500"]};
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
export const PaymentOptions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;

  label {
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 0.75rem;
    user-select: none;
    cursor: pointer;
    flex: 1;
    padding: 1rem;
    border-radius: 6px;
    border: 1.5px solid ${props => props.theme["base-button"]};
    background-color: ${props => props.theme["base-button"]};
    color: ${props => props.theme["base-text"]};
    line-height: 1.6;
    font-size: 0.75rem;

    svg {
      color: ${props => props.theme["purple-500"]};
    }

    transition: 0.2s background, 0.2s border;
  }

  input[type='radio']:checked + label {
    border: 1.5px solid ${props => props.theme["purple-500"]};
    background-color: ${props => props.theme["purple-100"]};
  }
    
  input[type='radio']{
    opacity: 0;
    width: 0;
    position: fixed;
  }
`

