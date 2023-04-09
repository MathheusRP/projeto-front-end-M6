import styled from "styled-components";

export const HomeStyled = styled.main`

    background-color: gray;
    height: 100vh;
    width: 100vw;
    display: flex;
    
    .displayOff {
        display: none;
    }

    .buttons {
        /* background-color: aqua; */
        height: 300px;
        width: 90%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 32px;

        .homeButtons {
            height: 50px;
            width: 100px;
            border-radius: 12px;
            border: none;
            font-size: 16px;
            font-weight: 600;
            color: rgb(50, 50, 50);
            /* transition: 0.8s; */
            cursor: pointer;
        }

        .homeButtons:hover{
            transition: 0.8s;
            background-color: rgb(50, 50, 120);
            color: rgb(200, 200, 200);
        }

    }
`