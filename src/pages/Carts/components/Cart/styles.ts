import { Link } from 'react-router-dom'
import { styled } from '../../../../config/stitches.config'

export const Container = styled(Link, {
  background: '#121214',
  borderRadius: '4px',
  textDecoration: 'none',
  overflow: 'hidden',
  height: '5rem',
  border: '1px solid transparent',
  position: 'relative',
  padding: '1.15rem 1.25rem',
  marginBottom: '.5rem',
  display: 'flex',
  flexDirection: 'column',

  strong: {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, .75)',
    transition: 'all .25s',
  },

  div: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.912rem',
    marginTop: '6px',

    'time, span': {
      display: 'flex',
      alignItems: 'center',
      gap: '.25rem',
      fontSize: '.75rem',
      color: 'rgba(255, 255, 255, .65)',
      transition: 'all .25s',
    },
  },
})
