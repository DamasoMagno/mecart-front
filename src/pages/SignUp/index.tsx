import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Container, Content } from './styles'

export function SignUp() {
  return (
    <Container>
      <Content>
        <strong>
          Me<span>Cart</span>
        </strong>

        <form>
          <Input label="Nome" />
          <Input label="Email" />
          <Input label="Senha" />
          <Button>Criar conta</Button>
        </form>
      </Content>
    </Container>
  )
}
