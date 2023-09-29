import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { api } from '../../services/api'

import { Container, Content } from './styles'

export function SignIn() {
  const navigate = useNavigate()

  async function register(e: any) {
    e.preventDefault()

    try {
      const response = await api.post('/user/login', {
        email: 'damasomlima@gmail.com',
        password: 'hbaddt156231',
      })

      api.defaults.headers.common = {
        Authorization: `Bearer ${response.data.token}`,
      }

      localStorage.setItem('@mecart-token', JSON.stringify(response.data.token))

      navigate('/')
    } catch (error) {
      console.log('Erro', error)
    }
  }

  return (
    <Container>
      <Content>
        <strong>
          Me<span>Cart</span>
        </strong>

        <form onSubmit={register}>
          <Input label="Email" />
          <Input label="Senha" />
          <Button>Entrar</Button>
        </form>
      </Content>
    </Container>
  )
}
