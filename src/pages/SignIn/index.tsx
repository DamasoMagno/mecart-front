import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Inputs/Input'
import { api } from '../../services/api'

import { Container, Content } from './styles'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignOut } from '@phosphor-icons/react'

const userRegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

type User = z.infer<typeof userRegisterSchema>

export function SignIn() {
  const navigate = useNavigate()

  const { control, handleSubmit } = useForm<User>({
    resolver: zodResolver(userRegisterSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function handleLoginUser(data: User) {
    try {
      const response = await api.post('/user/login', {
        email: data.email,
        password: data.password,
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

        <form onSubmit={handleSubmit(handleLoginUser)}>
          <Controller
            control={control}
            name="email"
            render={({ field }) => {
              return <Input id="email" label="Email" type="email" {...field} />
            }}
          />

          <Controller
            control={control}
            name="password"
            render={({ field }) => {
              return (
                <Input id="Senha" label="Senha" type="password" {...field} />
              )
            }}
          />

          <Button>Entrar</Button>
        </form>

        <Link to="/signUp">
          <SignOut /> Criar conta
        </Link>
      </Content>
    </Container>
  )
}
