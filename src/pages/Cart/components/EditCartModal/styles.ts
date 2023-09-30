import { styled } from '@config/stitches.config'
import * as Modal from '@radix-ui/react-dialog'

export const Container = styled(Modal.Root, {})

export const Portal = styled(Modal.Portal, {})

export const Close = styled(Modal.Close, {})

export const Overlay = styled(Modal.Overlay, {
  position: 'fixed',
  inset: 0,
  width: '100%',
  background: 'rgba(0, 0, 0, .75)',
})

export const Content = styled(Modal.Content, {
  top: 0,
  position: 'fixed',
  right: 0,
  height: '100vh',
  zIndex: 99,
  transition: 'transform 1s',
  background: '$black',
  overflow: 'hidden',
  maxWidth: '540px',
  padding: '0 1.5rem',
  width: '100%',

  header: {
    display: 'flex',
    height: '10vh',

    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2rem',
      backgroundColor: 'transparent',
      border: 'none',
      color: '$white',
      cursor: 'pointer',
    },
  },
})

export const Form = styled('form', {
  display: 'flex',
  width: '100%',
  maxWidth: '540px',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginTop: '2rem',
  height: 'calc(90vh - 10vh)',

  '.inputs': {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: '1rem',

    button: {
      background: 'transparent',
      color: '#FFF',
      marginTop: '.5rem',
      border: 0,
      width: '100%',
      textAlign: 'left',
      cursor: 'pointer',
      padding: '1rem .75rem',
      borderRadius: 4,
      fontSize: '1rem',
      transition: 'background 0.25s',

      '&:hover': {
        background: 'rgba(255, 255, 255, .05)',
      },
    },
  },

  '> button': {
    color: '$green700',
  },
})
