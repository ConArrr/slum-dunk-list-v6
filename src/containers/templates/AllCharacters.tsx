// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react'
import AllCharacters from 'components/templates/AllCharacters'
import { charactersData } from 'data/characters'

const EnhancedAllCharacters: FC = () => {
  const characters = Object.values(charactersData)
    .map((v) => v.players)
    .flat()
    .sort((p, q) => ((p.height ?? 160) < (q.height ?? 160) ? -1 : 1))

  return <AllCharacters characters={characters} />
}

export default EnhancedAllCharacters
