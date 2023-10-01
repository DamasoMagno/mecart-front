import { Link } from 'react-router-dom'
import { styled } from '@stitches/react'

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

export const Actions = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',

  '.logout': {
    background: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#7C7C8A',
    fontSize: '1.5rem',
    cursor: 'pointer',
    border: 0,
    transition: 'color .25s',

    '&:hover': {
      color: '$green700',
    },
  },
})

export const Container = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  margin: '2rem auto',
  maxWidth: '728px',

  '.resume': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    zIndex: 0,
    paddingLeft: '1rem',
  },

  '.products': {
    margin: '2rem 0 3rem',
    display: 'flex',
    flexDirection: 'column',
    padding: '0 1rem',

    strong: {
      color: '#E1E1E6',
      marginBottom: '1rem',
      fontWeight: 'bold',
      fontSize: '1.125rem',
    },
  },
})
