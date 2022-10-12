import styled from "styled-components"

export const InputCounterContainer = styled.div`
  padding: 0.5rem;
  background-color: ${props => props.theme["base-button"]};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border-radius: 6px;

  input {
    max-width: 20px;
    border: 0;
    background-color: ${props => props.theme["base-button"]};
    text-align: center;
    font: 1rem;
  }

  button {
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background-color: ${props => props.theme["base-button"]};
    color: ${props => props.theme["purple-500"]};
  }
`