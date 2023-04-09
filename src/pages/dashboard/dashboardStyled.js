import styled from "styled-components";

export const DashboardStyled = styled.div`

    height: 100vh;
    width: 100vw;
    background-color: grey;

    .displayOff {
        display: none;
    }

    header {
        height: 80px;
        /* width: 100%; */
        /* position: absolute; */
        background-color: rgb(60, 60, 120);
        display: flex;
        padding: 0px 16px;
        align-items: center;
        justify-content: space-between;

        h1 {
            color: rgb(200, 200, 200);
        }

        button {
            background-color: transparent;
            border: none;
            color: rgb(200, 200, 200);
            font-size: 18px;
        }
    }

    .contacts {
        height: 85%;
        /* border: solid 3px red; */
        padding: 16px;
        margin-top: 10px;

        .buttons {
            height: 80px;
            width: 100%;
            display: flex;
            flex-direction: column;
            background-color: rgb(60, 60, 120);
            border-radius: 8px;
            /* background-color: blue; */
            justify-content: space-around;
            color: rgb(30, 30, 30);
            margin-bottom: 16px;
            align-items: center;

            button {
                padding: 10px;
                width: 90%;
                border-radius: 10px;
                border: none;
            }
            
        }

        .list {
            height: 80%;
            background-color: rgb(200, 200, 200);
            border-radius: 16px;
            padding: 16px;
            overflow-y: scroll;
            
            

            ul{
                /* border: solid 2px brown; */
                /* height: 100%; */
                list-style: none;
                display: flex;
                flex-direction: column;
                gap: 16px;

                li {
                    height: 160px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    border: 4px solid rgb(60, 60, 120);
                    padding: 0px 8px;
                    border-radius: 8px;
                    /* background-color: blue; */
                    justify-content: space-around;
                    color: rgb(30, 30, 30);
                    cursor: pointer;

                    div {
                        display: flex;
                        gap: 10px;
                        margin: 0px auto;
                        margin-top: 10px;
                    }

                    button {
                        width: 70px;
                        height: 30px;
                        border-radius: 8px;
                        border: none;
                    }
                }
                
            }
        }
    }

`