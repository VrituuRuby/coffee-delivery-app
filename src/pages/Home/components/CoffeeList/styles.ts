import styled from "styled-components"

export const CoffeeListContainer = styled.div`
  h3{
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    line-height: 1.3;
    font-weight: 800;
    color: ${props => props.theme["base-subtitle"]};
    margin-bottom: 3rem;
  }

  ul {
    justify-content: center;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
`
