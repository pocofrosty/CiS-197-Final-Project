import React from 'react'

import {
  Pattern, HexGrid, Layout, Hexagon, Text, GridGenerator, HexUtils,
} from 'react-hexgrid'

const GameBoard = () => {
  const hexagons = GridGenerator.hexagon(2)

  const initializePatterns = () => (
    <>
      <Pattern id="0" size={{ x: 7.5, y: 8 }} link="https://github.com/pocofrosty/CiS-197-Final-Project/blob/main/frontend/assets/Forest-Test.JPG?raw=true" />
      <Pattern id="1" size={{ x: 7.5, y: 8 }} link="https://github.com/pocofrosty/CiS-197-Final-Project/blob/main/frontend/assets/Wheat-Test.JPG?raw=true" />
      <Pattern id="2" size={{ x: 7.5, y: 8 }} link="https://github.com/pocofrosty/CiS-197-Final-Project/blob/main/frontend/assets/Sheep-Test.JPG?raw=true" />
      <Pattern id="3" size={{ x: 7.5, y: 8 }} link="https://github.com/pocofrosty/CiS-197-Final-Project/blob/main/frontend/assets/Brick-Test.JPG?raw=true" />
      <Pattern id="4" size={{ x: 7.5, y: 8 }} link="https://github.com/pocofrosty/CiS-197-Final-Project/blob/main/frontend/assets/Ore-Test.JPG?raw=true" />
      <Pattern id="5" size={{ x: 8.5, y: 8.5 }} link="https://github.com/pocofrosty/CiS-197-Final-Project/blob/main/frontend/assets/Water-Test.JPG?raw=true" />
      <Pattern id="6" size={{ x: 7.5, y: 8 }} link="https://github.com/pocofrosty/CiS-197-Final-Project/blob/main/frontend/assets/Desert-Test.JPG?raw=true" />
    </>
  )

  const HexagonData = {}
  hexagons.forEach((ele, idx) => {
    HexagonData[`(${ele.q},${ele.r},${ele.s})`] = {
      ID: ele.q + ele.r + ele.s,
    }
    console.log(`(${ele.q},${ele.r},${ele.s})`)
  })

  return (
    <div className="App">
      <label> Test </label>
      <HexGrid width={800} height={800}>
        {initializePatterns()}
        <Layout size={{ x: 8, y: 8 }} flat={false} spacing={1.02} origin={{ x: 0, y: 0 }}>
          {
              hexagons.map((hex, i) => (
                <Hexagon
                  fill={(i % 7).toString()}
                  key={`${hex.q}${hex.r}${hex.s}`}
                  q={hex.q}
                  r={hex.r}
                  s={hex.s}
                  onClick={() => {
                    console.log(HexagonData[`(${hex.q},${hex.r},${hex.s})`])
                  }}
                >
                  <Text>
                    {HexUtils.getID(hex)}
                  </Text>
                </Hexagon>
              ))
          }
        </Layout>
      </HexGrid>
    </div>
  )
}

export default GameBoard
