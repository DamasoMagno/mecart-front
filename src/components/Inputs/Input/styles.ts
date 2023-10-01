import { styled } from '@config/stitches.config'

export const Field = styled('div', {
  display: 'flex',
  backgroundColor: '$gray700',
  borderRadius: 4,
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  padding: '.25rem .75rem',
  border: '1px solid transparent',
  height: '3rem',
  color: '$gray300',

  input: {
    background: 'transparent',
    border: 0,
    outline: 0,
    color: '$white',
    padding: '.25rem 0',
    flex: 1,
    height: '100%',

    '&::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
    },

    '&::-webkit-calendar-picker-indicator': {
      display: 'none',
      '-webkit-appearance': 'none',
    },
  },

  '&:focus-within': {
    borderColor: '$green300',
  },

  svg: {
    color: '$white',
  },
})
