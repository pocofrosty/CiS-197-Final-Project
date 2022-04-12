import React, { useState } from 'react'
import axios from 'axios'
import {
  Routes, Route, Outlet, Link,
} from 'react-router-dom'

import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'

function App() {
  const [currentUsername, setCurrentUsername] = useState('')
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Hub />}>
          <Route path="signup" element={<SignUpForm />} />
          <Route path="login" element={<LoginForm setCurrentUsername={setCurrentUsername} />} />
          <Route path="*" element={<Test />} />
        </Route>
      </Routes>
    </div>
  )
}

const Hub = () => (
  <div>
    <Outlet />
  </div>
)

const Test = () => (
  <div>
    <h1>Invalid Site </h1>
  </div>
)

export default App
