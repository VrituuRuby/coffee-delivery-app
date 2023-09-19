import styled from "styled-components"

export const FooterContainer = styled.footer`
    width: 100%;
    padding: 2rem 0;
    color: ${props => props.theme["base-text"]};
    text-align: center;

    a, a::after{
        color: ${props => props.theme["purple-500"]};
        text-decoration: none;
    }
`