import React, { useState, Component } from 'react'
import axios from 'axios'
import {
  Routes, Route, Outlet, Link,
} from 'react-router-dom'

import {
  Pattern, HexGrid, Layout, Hexagon, Text, GridGenerator, HexUtils,
} from 'react-hexgrid'

import configs from './configurations.json'

const i = 0
class App extends Component {
  constructor(props) {
    super(props)
    const config = configs.hexagon
    const generator = GridGenerator.getGenerator(config.map)
    const hexagons = generator.apply(this, config.mapProps)
    this.state = { hexagons, config }
  }

  changeType(event) {
    const name = event.currentTarget.value
    const config = configs[name]
    const generator = GridGenerator.getGenerator(config.map)
    const hexagons = generator.apply(this, config.mapProps)
    this.setState({ hexagons, config })
  }

  render() {
    const { hexagons, config } = this.state
    const { layout } = config
    const size = { x: layout.width, y: layout.height }
    return (
      <div className="App">
        <h2>Select grid typ3213e and configuration from dropdown.</h2>
        <div>
          <strong>Template: </strong>
          <select onChange={ev => this.changeType(ev)}>
            {Object.keys(configs).map(type => (
              <option name={type}>{type}</option>
            ))}
          </select>
        </div>
        <hr />
        <HexGrid width={config.width} height={config.height}>
          <Layout size={size} flat={layout.flat} spacing={layout.spacing} origin={config.origin}>
            {
              hexagons.map((hex, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <Hexagon key={config.mapProps + i} q={hex.q} r={hex.r} s={hex.s} fill="temp-pattern">
                  <button onClick={() => {
                    console.log(1)
                  }}
                  >
                    {' '}
                    test
                    {' '}

                  </button>
                </Hexagon>
              ))
            }
          </Layout>
          <Pattern id="temp-pattern" link="https://github.com/pocofrosty/CiS-197-Final-Project/blob/main/frontend/assets/Forest-Test.JPG?raw=true" size={{ x: 7.5, y: 8 }} />
        </HexGrid>
      </div>
    )
  }
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
