import { HomeModalStyled } from './HomeModalStyled'
import { useForm } from 'react-hook-form'
import { UserContext } from '@/contexts/userContext'
import { useContext } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Api } from '@/services/api'
import { setCookie } from 'nookies'
import { useRouter } from 'next/router'
import { Box, useToast } from "@chakra-ui/react";

const schema = yup.object({
    email: yup.string().email('Deve ser um E-mail valido').required('Insira seu E-mail'),
    password: yup.string().required('Insira sua senha')
})

interface IUserLogin {
    email: string,
    password: string
}


export const LoginModal = (props: any) => {

    const router = useRouter()
    const toast = useToast()

    const { register, handleSubmit, formState: { errors } } = useForm<IUserLogin>({
        resolver: yupResolver(schema)
    })

    const onFormSubmit = (FormData: IUserLogin) => {

        const loginUser = (data: IUserLogin): void => {
            Api.post("/login", data)
                .then((resp) => {

                    setCookie(null, 'userToken', resp.data.token, { maxAge: 60 * 30, path: '/' }),
                        Api.defaults.headers.authorization = `Bearer ${resp.data.token}`

                    router.push('/dashboard')

                })
                .catch((err) => console.log(err));
        };

        loginUser(FormData)
    }


    return (
        <HomeModalStyled className={props.display} >

            <button onClick={() => props.setDisplay('displayOff')} className='close'>Fechar</button>
            <form onSubmit={handleSubmit(onFormSubmit)} className='loginInputs'>
                <div className='inputs'>
                    <p >{errors.email?.message}</p>
                    <input id='email' type="email"
                        {...register('email')} />
                    <label htmlFor="email"> E-MAIL </label>
                </div>
                <div className='inputs'>
                    <p >{errors.email?.message}</p>
                    <input id='password' type="password"
                        {...register('password')} />
                    <label htmlFor="password"> SENHA </label>
                </div>
                <button type='submit'>Entrar</button>
            </form>
        </HomeModalStyled>

    )
}