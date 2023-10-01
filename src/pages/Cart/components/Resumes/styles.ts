import { SwiperSlide } from 'swiper/react'
import { styled } from '@config/stitches.config'

export const Resume = styled(SwiperSlide, {
  background: '$green700',
  padding: '1.5rem 1rem',
  borderRadius: '.5rem',
  color: '$white',
  display: 'flex',
  zIndex: 0,
  flexDirection: 'column',

  header: {
    fontSize: '.875rem',
    color: 'rgba(255, 255, 255, .85)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  strong: {
    marginTop: '.75rem',
    display: 'block',
    fontSize: '1rem',
    fontWeight: 700,
    lineHeight: 1.7,
  },

  variants: {
    completed: {
      true: {
        background: '$red600',
      },
    },
  },
})
