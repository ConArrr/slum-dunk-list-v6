// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react'
import { Navigate, useParams } from 'react-router-dom'

import { charactersData } from 'data/characters'
import SchoolCharacters from 'components/templates/SchoolCharacters'

const EnhancedSchoolCharacters: FC = () => {
  const { schoolCode } = useParams()
  const schoolCodeList = Object.keys(charactersData)

  if (schoolCodeList.includes(schoolCode)) {
    const { school, players } = charactersData[schoolCode]

    return <SchoolCharacters school={school} characters={players} />
  }

  return <Navigate to="/" replace />
}

export default EnhancedSchoolCharacters
