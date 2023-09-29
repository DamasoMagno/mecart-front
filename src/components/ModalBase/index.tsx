import { FC, ReactNode } from 'react'
import { X } from '@phosphor-icons/react'
import * as Modal from '@radix-ui/react-dialog'

import { Overlay, Content } from './styles'

interface ModalContainerProps {
  title: string
  open: boolean
  onOpenChange(open: boolean): void
  children: ReactNode
}

export const ModalContainer: FC<ModalContainerProps> = ({
  title,
  open,
  onOpenChange,
  children,
}) => (
  <Modal.Root open={open} onOpenChange={onOpenChange}>
    <Overlay />

    <Modal.Portal>
      <Content>
        <header>
          <Modal.Title>{title}</Modal.Title>
          <Modal.Close asChild>
            <button>
              <X />
            </button>
          </Modal.Close>
        </header>

        {children}
      </Content>
    </Modal.Portal>
  </Modal.Root>
)
