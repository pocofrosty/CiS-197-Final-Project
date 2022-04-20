import React, { useState } from 'react'
import {
  Routes, Route, Outlet,
} from 'react-router-dom'

import axios from 'axios'
import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'
import GameBoard from './components/Gameboard'

// eslint-disable-next-line no-undef
export default App = () => {
  const [currentUsename, setCurrentUsername] = useState('')

  axios.defaults.baseURL = 'http://localhost:3000'
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="signup" element={<SignUpForm />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="gameboard" element={<GameBoard />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  )
}

const Layout = () => (
  <div>
    <Outlet />
  </div>
)

const ErrorPage = () => (
  <div>
    <h1> Invalid Site </h1>
  </div>
)
