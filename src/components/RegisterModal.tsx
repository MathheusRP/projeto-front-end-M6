import { HomeModalStyled } from './HomeModalStyled'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Api } from '@/services/api'
import { setCookie } from 'nookies'

const schema = yup.object({
    name: yup.string().required('Insira seu nome'),
    email: yup.string().email('Deve ser um E-mail valido').required('Insira seu E-mail'),
    password: yup.string().required('Insira sua senha'),
    phone_number: yup.string().required('Insira sua senha aqui')
})

interface IUserRegister {
    name: string
    email: string,
    password: string
    phone_number: string
}

export const RegisterModal = (props: any) => {

    const { register, handleSubmit, formState: { errors } } = useForm<IUserRegister>({
        resolver: yupResolver(schema)
    })

    const onFormSubmit = (FormData: IUserRegister) => {

        const loginUser = (data: IUserRegister): void => {
            Api.post("/users", data)
                .then((resp) => {

                    console.log('conta criada')
                    setTimeout(() => {
                        props.setDisplay('displayOff')
                    }, 500)

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
                    <p>teste</p>
                    <input id='name' type="text"
                        {...register('name')} />
                    <label htmlFor="name"> NOME </label>
                </div>
                <div className='inputs'>
                    <p>teste</p>
                    <input id='email' type="email"
                        {...register('email')} />
                    <label htmlFor="email"> E-MAIL </label>
                </div>
                <div className='inputs'>
                    <p>teste</p>
                    <input id='password' type="password"
                        {...register('password')} />
                    <label htmlFor="password"> SENHA </label>
                </div>
                <div className='inputs'>
                    <p>teste</p>
                    <input id='phone_number' type="text"
                        {...register('phone_number')} />
                    <label htmlFor="phone_number"> TELEFONE </label>
                </div>
                <button type='submit'>Criar conta</button>
            </form>
        </HomeModalStyled>

    )
}