import { HomeStyled } from '../styles/HomeStyled'
import { LoginModal } from '@/components/loginModal'
import { useState } from 'react'
import { RegisterModal } from '@/components/RegisterModal'
import { useContext } from 'react'
import { UserContext } from '@/contexts/userContext'


const Home = () => {

  const [modalLogin, setModalLogin] = useState<string>('displayOff')
  const [modalRegister, setModalRegister] = useState<string>('displayOff')

  const { loginUser } = useContext(UserContext)

  return (
    <>
      <HomeStyled>

        <section className='buttons'>
          <button onClick={() => setModalLogin('displayOn')} className='homeButtons'>Entrar</button>
          <button onClick={() => setModalRegister('displayOn')} className='homeButtons'>Registrar</button>
          <LoginModal display={modalLogin} login={loginUser} setDisplay={setModalLogin} />
          <RegisterModal display={modalRegister} setDisplay={setModalRegister} />
        </section>

      </HomeStyled>
    </>
  )
}

export default Home