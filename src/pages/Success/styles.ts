import styled from "styled-components"

export const SuccessContainer = styled.main`
  margin-top: 5rem;
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 1rem;
  flex: 1;

  @media screen and (max-width: 950px){
    flex-direction: column;
  }
`

export const Illustration = styled.img`
flex: 1;
`

export const OrderConfirmed = styled.div`
width: 50%;
  @media screen and (max-width: 950px){
    width: 100%;
  }
`

export const OrderInfo = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 2.5rem;
  gap: 2rem;

  background: 
    linear-gradient(${props => props.theme.background}, ${props => props.theme.background}) padding-box,
    linear-gradient(135deg,${props => props.theme["yellow-500"]}, ${props => props.theme["purple-500"]}) border-box;
  border: solid 1.5px transparent;
  border-radius: 6px 40px 6px 40px;

  li {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    color: ${props => props.theme["base-text"]};

    i{
      display: flex;
      align-items: center;
      justify-items: center;

      background-color: red;
      border-radius: 50%;
      color: white;
      padding: 8px;

      &.purple {background-color: ${props => props.theme["purple-500"]}}
      &.yellow {background-color: ${props => props.theme["yellow-500"]}}
      &.dark-yellow {background-color: ${props => props.theme["yellow-700"]}}
    }
  }
`

export const SuccessTitle = styled.p`
  font-size: 2rem;
  font-family: 'Baloo 2', cursive;
  line-height: 1.3;
  color: ${props => props.theme["yellow-700"]};
  font-weight: bold;
`

export const SuccessSubtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.3;
  color: ${props => props.theme["base-subtitle"]};
  margin-bottom: 2.5rem;
`