// eslint-disable-next-line no-use-before-define
import React, { FC, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'

import Home from './components/pages/Home'

import Characters from './components/pages/Characters'
import AllCharacters from './containers/templates/AllCharacters'

import './App.css'

const App: FC = () => {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [hash, pathname])

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="characters" element={<Characters />}>
          <Route path="/" element={<AllCharacters />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
