import * as Modal from '@radix-ui/react-dialog'
import { styled } from '../../config/stitches.config'

export const Overlay = styled(Modal.Overlay, {
  position: 'fixed',
  inset: 0,
  width: '100%',
  background: 'rgba(0, 0, 0, .75)',
})

export const Content = styled(Modal.Content, {
  borderRadius: '8px 8px 0 0',
  position: 'fixed',
  right: '50%',
  transform: 'translateX(50%)',
  background: '$black',
  bottom: 0,
  backgroundColor: '#202024',
  width: '100%',
  maxWidth: '500px',
  padding: '4rem 1.5rem 2rem',

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '$white',
    fontSize: '1.25rem',
    fontWeight: 'bold',

    button: {
      border: 0,
      color: '#7C7C8A',
      background: 'transparent',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '1.5rem',
    },
  },
})
