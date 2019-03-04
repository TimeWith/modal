import styled from '@emotion/styled'
import { LEVEL_POPUP } from 'app-levels'
import { tablet_max, phablet_max, phone_max } from '@time-with/media-queries'

export const RootDiv = styled.div(props => ({
  zIndex: LEVEL_POPUP + 1,
  width: '100%',
  height: '100%',
  position: 'fixed',
  top: '0',
  left: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: props.backgroundColor ? props.backgroundColor : 'rgba(0,0,0,0.5)',
}))

export const Window = styled.div({
  backgroundColor: 'white',
  borderRadius: '3px',
  position: 'relative',
  zIndex: LEVEL_POPUP + 3,
  display: 'flex',
  flexDirection: 'column',
  padding: '50px',
  [tablet_max]: {
    padding: '40px',
  },
  [phablet_max]: {
    padding: '30px',
  },
  [phone_max]: {
    padding: '20px 10px',
  },
})

export const BGDIV = styled.div({
  position: 'absolute',
  zIndex: LEVEL_POPUP+2,
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
})
