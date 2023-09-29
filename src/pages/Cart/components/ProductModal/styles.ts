import { styled } from '../../../../config/stitches.config'

export const ProductNameContainer = styled('div', {
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

export const Total = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',

  span: {
    fontSize: '1.25rem',
    color: '$white',
    display: 'block',
    marginTop: '1rem',
    alignSelf: 'flex-end',
  },

  footer: {
    width: '100%',
    marginTop: '1.5rem',

    button: {
      width: '100%',
    },
  },
})

export const Form = styled('form', {})
