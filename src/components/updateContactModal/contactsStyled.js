import styled from "styled-components";

export const ContactStyled = styled.section`

    height: 100%;
    width: 100vw;
    background-color: rgb(0, 0, 0, 0.3);
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    


    

    .container {
        background-color: rgb(200, 200 ,200);
        padding: 64px 16px;
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        width: 80%;
        gap: 32px;

        .close {
            margin: 0 auto;
            padding: 10px 20px;
            border: none;
            border-radius: 8px;
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 16px;

            .inputs {
                display: flex;
                flex-direction: column;
                gap: 10px;


                input {
                    border: none;
                    height: 40px;
                    padding: 0px 16px;
                    border-radius: 8px;
                    font-size: 16px;
                }

                p {
                    color: rgb(200, 100 ,100);
                }
            }
        }
    }

`