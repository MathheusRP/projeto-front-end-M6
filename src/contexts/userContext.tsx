import { createContext, useContext } from "react";
import { Api } from "@/services/api";
import { setCookie } from "nookies";
import { useRouter } from "next/router";

interface IContextProps {
    children: React.ReactNode
}

interface IUserLogin {
    email: string
    password: string
}

interface IUserRegister {
    name: string
    email: string
    password: string
    phone_number: string
}


interface IUserContext {
    loginUser(data: IUserLogin): void;

}



export const UserContext = createContext<IUserContext>({} as IUserContext)

export const UserProvider = ({ children }: IContextProps) => {

    const loginUser = (data: IUserLogin): void => {
        Api.post("/login", data)
            .then((resp) => {

                console.log('entrou')

            })
            .catch((err) => console.log('error'));
    };

    return (
        <UserContext.Provider value={{ loginUser }} >
            {children}
        </UserContext.Provider>
    )
}


