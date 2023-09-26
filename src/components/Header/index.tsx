import { ReactNode } from 'react'

import { Container } from './styles'

interface HeaderProps {
  children: ReactNode
}

export function Header({ children }: HeaderProps) {
  return (
    <Container>
      <div className="content">{children}</div>
    </Container>
  )
}
