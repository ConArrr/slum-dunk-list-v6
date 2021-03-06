// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react'
import { useNavigate } from 'react-router'
import HomeButton from 'components/molecules/HomeButton'

const EnhancedHomeButton: FC = () => {
  const navigate = useNavigate()

  return <HomeButton redirectToHome={() => navigate('/')} />
}

export default EnhancedHomeButton
