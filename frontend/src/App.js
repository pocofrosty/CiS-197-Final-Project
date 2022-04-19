import React, { useState } from 'react'
import axios from 'axios'
import {
  Routes, Route, Outlet, Link,
} from 'react-router-dom'

import {
  HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex,
} from 'react-hexgrid'

import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'

function App() {
  return (
    <div>
      <label> test </label>
      <HexGrid width={1200} height={800} viewBox="-50 -50 100 100">
        {/* Grid with manually inserted hexagons */}
        <Layout size={{ x: 10, y: 10 }} flat={false} spacing={1.1} origin={{ x: 0, y: 0 }}>
          <Hexagon q={0} r={0} s={0} />
          {/* Using pattern (defined below) to fill the hexagon */}
          <Hexagon q={0} r={-1} s={1} fill="pat-1" />
          <Hexagon q={0} r={1} s={-1} />
          <Hexagon q={1} r={-1} s={0}>
            <Text>1, -1, 0</Text>
          </Hexagon>
          <Hexagon q={1} r={0} s={-1}>
            <Text>1, 0, -1</Text>
          </Hexagon>
          {/* Pattern and text */}
          <Hexagon q={-1} r={1} s={0} fill="pat-2">
            <Text>-1, 1, 0</Text>
          </Hexagon>
          <Hexagon q={-1} r={0} s={1} />
          <Hexagon q={-2} r={0} s={1} />
          <Path start={new Hex(0, 0, 0)} end={new Hex(-2, 0, 1)} />
        </Layout>
        <Pattern id="pat-1" link="https://github.com/pocofrosty/CiS-197-Final-Project/blob/main/frontend/assets/Brick-Pointed-Backgroundless%20(1).png?raw=true" />
        <Pattern id="pat-2" link="https://github.com/pocofrosty/CiS-197-Final-Project/blob/main/frontend/assets/Brick-Test.JPG?raw=true" />
      </HexGrid>
    </div>
  )
}

export default App
