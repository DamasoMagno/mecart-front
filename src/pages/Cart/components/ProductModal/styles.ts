import { styled } from '../../../../config/stitches.config'

export const Product = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
  position: 'relative',

  label: {
    color: 'rgba(255, 255, 255, .5)',
    fontSize: '.85rem',
  },
})

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '.75rem',

  footer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '.25rem',

    span: {
      display: 'block',
      color: '$white',
      fontSize: '1.125rem',
      marginLeft: 'auto',
    },

    button: {
      width: '100%',
      marginTop: '1.5rem',
    },
  },
})
