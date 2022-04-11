import React, { useState } from 'react'
import axios from 'axios'

import {
  GridGenerator, HexGrid, Layout, Path, Hexagon, Text, Pattern, Hex,
} from 'react-hexgrid'

function App() {
  const hexagonSize = { x: 10, y: 10 }
  const moreHexas = GridGenerator.parallelogram(-2, 2, -2, 2)
  return (
    <div>
      <HexGrid>
        <Layout size={hexagonSize} origin={{ x: 25, y: -30 }}>
          {moreHexas.map((hex, i) => <Hexagon key={`${hex.q}${hex.r}${hex.s}`} q={hex.q} r={hex.r} s={hex.s} />)}
        </Layout>
      </HexGrid>
    </div>
  )
}

export default App
