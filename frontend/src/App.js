import React, { useState } from 'react'
import axios from 'axios'
// import {
//   GridGenerator, HexGrid, Layout, HexUtils, Hexagon, Text,
// } from 'react-hexgrid'
import {
  Routes, Route, Outlet, Link,
} from 'react-router-dom'

import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'

function App() {
  // const hexagonSize = { x: 10, y: 10 }
  // const hexagonGenerator = GridGenerator.parallelogram(-2, 2, -2, 2)

  // const generator = GridGenerator.getGenerator('hexagon')
  // const hexagons = generator.apply(this, [3])

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
