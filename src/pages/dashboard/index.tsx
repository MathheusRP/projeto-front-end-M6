import { DashboardStyled } from './dashboardStyled'
import { useState } from 'react'
import { Api } from '@/services/api'
import nookies from 'nookies'
import { useEffect } from 'react'
import { CreateContactModal } from '../../components/createContactModal/CreateContactModal'
import { UpdateContactModal } from '@/components/updateContactModal/updateContactModal'

interface IContact {
    id: number
    name: string
    email: string
    phone_number: number
    createdAt: Date
}

interface IUseContacts {
    id: number
    name: string
    email: string
    phone_number: number
    is_admin: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date
    contact: IContact[]

}

const Dashboard = () => {

    const [contactModal, setContactModal] = useState<string>('displayOff')

    const [updateModal, setUpdatetModal] = useState<string>('displayOff')

    const [selectContact, setContact] = useState<number | null>(null)

    const [user, setUser] = useState<IUseContacts | null>(null)

    const ContactModal = (event: any) => {
        setContactModal('displayOn')
        setContact(event.target.id)
    }

    useEffect(() => {
        const getUser = async () => {
            const cookies = nookies.get()
            Api.defaults.headers.authorization = `Bearer ${cookies.userToken}`
            await Api.get('/contacts')
                .then((response) => {
                    setUser(response.data)
                })
                .catch((error) => console.log(error))
        }

        getUser()
    }, [])

    const deleteContact = async (id: number) => {

        await Api.delete(`contacts/${id}`)
            .then((response) => {
                console.log('contato deletado')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const updateContact = (id: number) => {
        setContact(id)
        setUpdatetModal('displayOn')
    }

    return (
        <DashboardStyled>
            <CreateContactModal setUser={setUser} user={user} display={contactModal} setDisplay={setContactModal} />
            <UpdateContactModal contactId={selectContact} display={updateModal} setDisplay={setUpdatetModal} />

            <header>
                <h1>{user?.name || 'Off'}</h1>
                <button>Perfil</button>
            </header>

            <section className='contacts'>
                <div className='buttons'>
                    <button onClick={() => setContactModal('displayOn')}>Adiconar</button>
                </div>
                <div className='list'>

                    <ul>

                        {
                            user?.contact ?
                                (
                                    user.contact?.map((contact: IContact) => {
                                        return (
                                            // <li onClick={() => setContact(contact.id)}  >
                                            <li id={String(contact.id)}  >
                                                <h2>{contact.name}</h2>
                                                <p>{contact.email}</p>
                                                <p>{contact.phone_number}</p>
                                                <div>
                                                    {/* <button onClick={() => console.log(contact.id)} >Edit</button> */}
                                                    <button onClick={() => updateContact(contact.id)} >Edit</button>
                                                    <button onClick={() => deleteContact(contact.id)}>Delete</button>
                                                </div>
                                            </li>
                                        )
                                    })
                                ) :
                                (
                                    <div>
                                        <h1>teste</h1>
                                    </div>
                                )
                        }


                    </ul>

                </div>
            </section>
        </DashboardStyled>

    )
}

export default Dashboard