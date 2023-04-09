import styled from "styled-components";

export const HomeModalStyled = styled.section`

    background-color: rgb(200, 200, 200);
    position: absolute;
    height: 90%;
    width: 80%;
    max-width: 400px;
    border-radius: 32px;
    border: 8px solid rgb(50, 50, 120);
    display: flex;
    /* align-items: center; */
    justify-content: center;
    /* margin: auto; */


    .close {
        position: absolute;
        top: 32px;
        padding: 10px 20px;
        border: solid 4px rgb(50, 50, 120);
        border-radius: 16px;
        background-color: transparent;
        font-size: 18px;
        font-weight: 600;
        color: rgb(50, 50, 120);
        cursor: pointer;
    }

    .loginInputs {
        margin-top: 150px;
        height: 65%;
        width: 100%;
        padding: 0px 16px 16px 16px;
        /* border: solid 2px brown; */
        display: flex;
        flex-direction: column;
        gap: 16px;
        /* overflow-y: scroll; */
        

        .inputs {
            display: flex;
            flex-direction: column;
            gap: 10px;
            position: relative;

            p {
                position: absolute;
                bottom: 0px;
                right: 0;
            }

            label {
                color: rgb(50, 50, 120);
                font-size: 16px;
                font-weight: 600;
            }

            input {
                height: 40px;
                padding: 0px 10px;
                font-size: 16px;
                border: none;
                background-color: transparent;
                border-bottom: solid 3px rgb(50, 50, 120);
            }
        }
    }
`