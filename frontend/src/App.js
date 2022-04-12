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
      {/* <HexGrid width={100} height={80}>
        <Layout size={{ x: 100, y: 80 }} flat={false} spacing={1.02} origin={{ x: 0, y: 0 }}>
          {
              // note: key must be unique between re-renders.
              // using config.mapProps+i makes a new key when the goal template chnages.
              hexagons.map((hex, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <Hexagon key={3 + i} q={hex.q} r={hex.r} s={hex.s}>
                  <Text>{HexUtils.getID(hex)}</Text>
                </Hexagon>
              ))
            }
        </Layout>
      </HexGrid> */}
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
