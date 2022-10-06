import styled from "styled-components"

export const HeroContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
  padding: 6rem 0;
  width: 1120px;
  margin: 0 auto;

  div {
    h1 {
      font-family: 'Baloo 2', cursive;
      font-size: 3rem;
      color: ${props => props.theme["base-title"]};
      line-height: 1.3;
      margin-bottom: 1rem;
    }
    h2 {
      font-weight: 400;
      font-size: 1.25rem;
      color: ${props => props.theme["base-subtitle"]};
      line-height: 1.3;
    }
  }
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const GridContainer = styled.ul`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: auto auto;
  list-style: none;
  gap: 20px 40px;

  li {
    display: flex;
    align-items: center;
    gap: 8px;
    line-height: 1.3;
    color: ${props => props.theme["base-text"]};
    
    i{
      padding: 8px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;

      &.yellow{
        background-color: ${props => props.theme["yellow-500"]};
      }
      &.dark-yellow{
        background-color: ${props => props.theme["yellow-700"]};
      }
      &.base{
        background-color: ${props => props.theme["base-text"]};
      }
      &.purple{
        background-color: ${props => props.theme["purple-500"]};
      }
    }
 }
`