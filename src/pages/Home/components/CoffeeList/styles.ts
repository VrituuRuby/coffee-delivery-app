import styled from "styled-components"

export const CoffeListContainer = styled.main`
  ul {
    list-style: none;

    li {
      width: 256px;
      height: 310px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      text-align: center;
      padding: 1.25rem;
      background-color: ${props => props.theme["base-card"]};
      border-radius: 6px 36px 6px 36px;
      position: relative;

      img {
        position: relative;
        top: -20px;
      }

      footer {
        display: flex;
        align-items: center;
        line-height: ;

        input {
          width: 72px;
        }
      }
    }
  }
`
