import { styled } from '../../config/stitches.config'

export const Container = styled('button', {
  background: '$green500',
  border: 0,
  outline: 0,
  borderRadius: 8,
  cursor: 'pointer',
  fontSize: '1rem',
  transition: 'filter .25s',
  position: 'relative',
  padding: '.875rem',
  color: '$white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '.5rem',

  span: {
    flex: 1,
  },

  '&:disabled': {
    background: 'rgba(9, 126, 89, .85)',
    cursor: 'not-allowed',
  },

  '&:hover': {
    filter: 'brightness(.8)',
  },

  '@media(max-width: 720px)': {
    span: {
      display: 'none',
    },
  },

  variants: {
    outline: {
      true: {
        border: '1px solid $green700',
        background: 'transparent',
        color: '$green500',

        '&:disabled': {
          opacity: '.5',
          background: 'transparent',
          color: '$green500',
          cursor: 'not-allowed',
        },
      },
    },
    float: {
      true: {
        width: '50px',
        height: '50px',
        borderRadius: '100%',

        span: {
          display: 'none',
        },
      },
    },
    ghost: {
      true: {
        background: 'transparent',
        border: 'none',
      },
    },
  },
})
