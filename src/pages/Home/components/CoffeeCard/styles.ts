import styled from "styled-components"

export const CoffeeCardContainer = styled.li`
  width: 256px;
  height: 310px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme["base-card"]};
  border-radius: 6px 36px 6px 36px;
  position: relative;
`

export const ContentContainer = styled.div`
  position: relative;
  top: -20px;
  
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0.5rem;
  padding-bottom: 0.5rem;
  
  img {
    margin-bottom: 0.5rem;
    width: 120px;
  }
`

export const CoffeeName = styled.h4`
  font-size: 1.25rem;
  font-family: 'Baloo 2';
  font-weight: 800;
  color: ${props => props.theme["base-subtitle"]};
  line-height: 1.3;
  margin-bottom: 0.5rem;
`

export const CoffeeDescription = styled.p`
  color: ${props => props.theme["base-label"]};
  line-height: 1.3;
  font-size: 0.875rem;
  text-align: center;
`

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-bottom: 1rem;

  span {
    background-color: ${props => props.theme["yellow-300"]};
    color: ${props => props.theme["yellow-700"]};
    border-radius: 100px;
    padding: 0.25rem 0.5rem;

    text-transform: uppercase;
    font-weight: 700;
    font-size: 10px;
    line-height: 1.3;
  }
`