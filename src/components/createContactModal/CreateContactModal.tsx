// import { HomeModalStyled } from '../HomeModalStyled'
import { ContactStyled } from './contactsStyled'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Api } from '@/services/api'
import { setCookie } from 'nookies'

const schema = yup.object({
    name: yup.string().required('Insira o nome do contato'),
    email: yup.string().email('Deve ser um E-mail valido').required('Insira o E-mail do contato'),
    phone_number: yup.string().required('Insira o numero de telefone')
})

interface IContact {
    name: string
    email: string
    phone_number: string
}

export const CreateContactModal = (props: any) => {

    const { register, handleSubmit, formState: { errors } } = useForm<IContact>({
        resolver: yupResolver(schema)
    })

    const onFormSubmit = (FormData: IContact) => {

        const loginUser = (data: IContact): void => {
            Api.post("/contacts", data)
                .then((resp) => {

                    setTimeout(() => {
                        props.setDisplay('displayOff')
                    }, 500)

                })
                .catch((err) => console.log(err));
        };

        loginUser(FormData)
    }


    return (
        <ContactStyled className={props.display}>

            <div className='container'>
                <button onClick={() => props.setDisplay('displayOff')} className='close'>Fechar</button>
                <form onSubmit={handleSubmit(onFormSubmit)} className='loginInputs'>
                    <div className='inputs'>
                        <p >{errors.name?.message}</p>
                        <input id='name' type="text"
                            {...register('name')} />
                        <label htmlFor="name"> NOME </label>
                    </div>
                    <div className='inputs'>
                        <p >{errors.email?.message}</p>
                        <input id='email' type="email"
                            {...register('email')} />
                        <label htmlFor="email"> E-MAIL </label>
                    </div>
                    <div className='inputs'>
                        <p >{errors.phone_number?.message}</p>
                        <input id='phone_number' type="text"
                            {...register('phone_number')} />
                        <label htmlFor="phone_number"> TELEFONE </label>
                    </div>
                    <button type='submit'>Adicionar contato</button>
                </form>
            </div>

        </ContactStyled>

    )
}

