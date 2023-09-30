import { styled } from '@config/stitches.config'

export const BaseInput = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',

  label: {
    color: 'rgba(255, 255, 255, .5)',
    fontSize: '.85rem',
  },
})
