import { z } from 'zod'

import { Button } from '@components/Button'
import { Input } from '@components/Inputs/Input'
// import { api } from '@services/api'

import { Container, Content } from './styles'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from 'react-router-dom'
import { SignOut } from '@phosphor-icons/react'

const userRegisterSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
})

type User = z.infer<typeof userRegisterSchema>

export function SignUp() {
  const navigate = useNavigate()

  const { control, handleSubmit } = useForm<User>({
    resolver: zodResolver(userRegisterSchema),
    defaultValues: {
      email: '',
      name: '',
      password: '',
    },
  })

  async function handleSignUpUser(data: User) {
    try {
      // const response = await api.post('/user', {
      //   name: data.name,
      //   email: data.email,
      //   password: data.password,
      // })

      navigate('/login')
    } catch (error) {
      console.log('Erro:', error)
    }
  }

  return (
    <Container>
      <Content>
        <strong>
          Me<span>Cart</span>
        </strong>

        <form onSubmit={handleSubmit(handleSignUpUser)}>
          <Controller
            control={control}
            name="name"
            render={({ field }) => {
              return <Input id="Nome" label="Nome" {...field} />
            }}
          />

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

          <Button>Criar conta</Button>
        </form>

        <Link to="/signIn">
          <SignOut /> Criar conta
        </Link>
      </Content>
    </Container>
  )
}
