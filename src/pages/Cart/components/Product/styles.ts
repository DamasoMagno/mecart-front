import { styled } from '@stitches/react'

export const Container = styled('li', {
  listStyle: 'none',
  background: '#121214',
  padding: '1.25rem 1rem',
  borderRadius: '5px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '.75rem',

  '& + li': {
    marginTop: '.5rem',
  },

  '.productData': {
    display: 'flex',
    flexDirection: 'column',

    strong: {
      color: '$white',
      fontSize: '1.125rem',
    },

    div: {
      display: 'flex',
      gap: '.85rem',
      marginTop: '.75rem',

      span: {
        display: 'flex',
        alignItems: 'center',
        gap: '.25rem',
        fontSize: '0.875rem',
        color: 'rgba(255, 255, 255, .5)',
      },
    },
  },

  '.productEdit': {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',

    'button, a': {
      border: 0,
      borderRadius: '8px',
      padding: '.3125rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.125rem',
      background: 'transparent',
      cursor: 'pointer',
      transition: 'filter .25s',

      '&:hover': {
        filter: 'brightness(.8)',
      },

      '&:first-child': {
        background: 'rgba(0, 255, 0, .10)',
        color: 'green',
      },

      '&:last-child': {
        background: 'rgba(255, 0, 0, .10)',
        color: 'red',
      },
    },
  },
})
