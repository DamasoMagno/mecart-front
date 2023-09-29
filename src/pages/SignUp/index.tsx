import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { api } from '../../services/api'

import { Container, Content } from './styles'

export function SignUp() {
  async function register(e: any) {
    e.preventDefault()

    try {
      const response = await api.post('/user', {
        name: 'Damaso',
        email: 'damasomlima@gmail.com',
        password: 'hbaddt156231',
      })

      console.log(response)
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
          <Input label="Nome" />
          <Input label="Email" />
          <Input label="Senha" />
          <Button>Criar conta</Button>
        </form>
      </Content>
    </Container>
  )
}
