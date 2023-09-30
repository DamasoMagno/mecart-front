import { styled } from '../../../../config/stitches.config'

export const Container = styled('li', {
  background: '#121214',
  borderRadius: '4px',
  overflow: 'hidden',
  height: '4rem',
  border: '1px solid transparent',
  position: 'relative',
  padding: '1.15rem 1.25rem',
  marginBottom: '.5rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  strong: {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, .75)',
    transition: 'all .25s',
  },

  button: {
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    background: '$red600',
    color: '$white',
    height: '2rem',
    width: '2rem',
  },
})
