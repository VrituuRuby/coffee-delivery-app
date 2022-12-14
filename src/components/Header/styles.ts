import styled from "styled-components"

export const HeaderContainer = styled.header`
  nav {
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.5rem;
    border-radius: 6px;
    background-color: ${props => props.theme["purple-100"]};
    color: ${props => props.theme["purple-700"]};
    text-decoration: none;

    &:last-child{
      background-color: ${props => props.theme["yellow-300"]};
      color: ${props => props.theme["yellow-700"]};
      position: relative;
    }
  }
`

export const NotificationBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
 
  position: absolute;
  right: -0.5rem;
  top: -0.5rem;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;

  font-size: 0.75rem;
  font-weight: bold;

  color: ${props => props.theme.white};
  background-color: ${props => props.theme["yellow-700"]};
`