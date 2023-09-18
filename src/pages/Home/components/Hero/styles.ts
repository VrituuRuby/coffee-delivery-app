import styled from "styled-components"

export const HeroContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 6rem 0;
  overflow: show;

  @media screen and (max-width: 700px) {
    padding: 0 2rem;
    flex-direction: column-reverse;
    gap: 2rem;
  }

  img.blur{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    @media screen and (max-width: 1024px){
      display: none;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    h1 {
      font-family: 'Baloo 2', cursive;
      font-size: 2.75rem;
      color: ${props => props.theme["base-title"]};
      line-height: 1.3;
      margin-bottom: 1rem;

      @media screen and (max-width: 1024px){
        font-size: 2.5rem;
      }

    }
    h2 {
      font-weight: 400;
      font-size: 1.25rem;
      color: ${props => props.theme["base-subtitle"]};
      line-height: 1.3;
      @media screen and (max-width: 1024px){
        font-size: 1rem;
      }
      @media screen and (max-width: 600px){
        font-size: 1.25rem;
      }
    }

  }

  img#promo {
    max-width: 450px;
    width: 100%;
      @media screen and (max-width: 1024px){
      max-width: 350px;
      }
  }
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