import React, { Component } from "react"

export class GridRows extends Component {
  render() {
    const grid = {
      display: "grid",
      gridGap: "1rem",
      gridTemplateRows: "2fr 3fr 2fr",
      /* Set implicit rows */
      gridAutoRows: "1fr",
      // gridTemplateColumns: "repeat(2, 1fr)",
      margin: "1rem",
    }

    const item = {
      padding: "1rem",
      background: "#f4f4f4",
      border: "#ccc 1px solid",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "1.4rem",
    }

    return (
      <div style={grid}>
        <div style={item}>Item 1</div>
        <div style={item}>Item 2</div>
        <div style={item}>Item 3</div>
        <div style={item}>Item 4</div>
        <div style={item}>Item 5</div>
        <div style={item}>Item 6</div>
        <div style={item}>Item 7</div>
        <div style={item}>Item 8</div>
        <div style={item}>Item 9</div>
        <div style={item}>Item 10</div>
      </div>
    )
  }
}

export default GridRows
