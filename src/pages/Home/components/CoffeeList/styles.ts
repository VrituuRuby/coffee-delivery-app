import styled from "styled-components"

export const CoffeListContainer = styled.main`
  padding: 2rem 10rem;

  h3{
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    line-height: 1.3;
    font-weight: 800;
    color: ${props => props.theme["base-subtitle"]};
    margin-bottom: 3rem;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
`
