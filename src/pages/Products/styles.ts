import { Link } from 'react-router-dom'
import { styled } from '@config/stitches.config'

export const Navigation = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  gap: '.5rem',
  textDecoration: 'none',
  background: 'transparent',
  border: 0,
  cursor: 'pointer',

  svg: {
    fontSize: '1.25rem',
    color: '#FFF',
  },

  strong: {
    fontSize: '1.25rem',
    color: '$white',

    span: {
      color: '$green700',
    },
  },
})

export const Content = styled('main', {
  margin: '2rem auto 0',
  padding: '0 1rem',
  maxWidth: '728px',

  '> strong': {
    display: 'block',
    fontSize: '1.125rem',
    color: '#E1E1E6',
  },

  '.filter': {
    margin: '1rem 0 1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '.5rem',

    '> div': {
      flex: 1,
    },

    button: {
      width: '48px',
      height: '48px',
    },
  },
})
