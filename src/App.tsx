// eslint-disable-next-line no-use-before-define
import React, { FC, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import './App.css'
import Home from './components/pages/Home'

const App: FC = () => {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [hash, pathname])

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
