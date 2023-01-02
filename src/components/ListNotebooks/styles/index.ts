import styled from "styled-components";

export const Button = styled.button`
    background-color: #000;
    color: #FFF;
    width: 15rem;
    padding: 1rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;

    @media screen and (min-width: 600px) {
        width: 20rem; 
    }
`