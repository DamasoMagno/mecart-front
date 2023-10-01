import { styled } from '@config/stitches.config'

export const Field = styled('div', {
  display: 'flex',
  backgroundColor: '$gray700',
  borderRadius: 4,
  paddingRight: '1rem',
  alignItems: 'center',
  gap: 8,
  border: '1px solid transparent',

  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    backgroundColor: 'transparent',
    color: '$white',
    cursor: 'pointer',
    fontSize: '1rem',
  },
})
