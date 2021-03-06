import { Container, ToggleLabel, ToggleSelector } from './styles'

import React from 'react'

const Toggle: React.FC = () => (
  <Container>
    <ToggleLabel>Light</ToggleLabel>
    <ToggleSelector 
      checked
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={() => console.log('mudou')}
    />
    <ToggleLabel>Dark</ToggleLabel>
  </Container>
)

export default Toggle