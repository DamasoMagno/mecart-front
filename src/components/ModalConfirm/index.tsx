import { ReactNode } from 'react'
import * as ConfirmModal from '@radix-ui/react-alert-dialog'

import { Button } from '../Button'

import { Overlay, Content } from './styles'

interface ConfirmCartRemoveProps {
  onRemove: () => void
  description: string
  children: ReactNode
}

export function ConfirmCartRemove({
  onRemove,
  children,
  description,
}: ConfirmCartRemoveProps) {
  return (
    <ConfirmModal.Root>
      <ConfirmModal.Trigger asChild>{children}</ConfirmModal.Trigger>

      <ConfirmModal.Portal>
        <Overlay />

        <Content>
          <div className="description">
            <ConfirmModal.Title>Deseja remover ?</ConfirmModal.Title>
            <ConfirmModal.Description asChild>
              <p>{description}</p>
            </ConfirmModal.Description>
          </div>

          <div className="actions">
            <ConfirmModal.Cancel asChild>
              <Button variant={{ ghost: true }}>Cancelar</Button>
            </ConfirmModal.Cancel>

            <ConfirmModal.Action asChild>
              <Button
                variant={{ ghost: true }}
                className="remove"
                onClick={onRemove}
              >
                Remover
              </Button>
            </ConfirmModal.Action>
          </div>
        </Content>
      </ConfirmModal.Portal>
    </ConfirmModal.Root>
  )
}
