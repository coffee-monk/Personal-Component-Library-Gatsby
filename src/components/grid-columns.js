import React, { Component } from "react"

export class GridColumns extends Component {
  render() {
    const grid = {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      // gridTemplateColumns: "repeat(2, auto)",
      gridGap: "1rem",
      margin: "1rem",
    }

    const item = {
      padding: "3rem",
      background: "#f4f4f4",
      border: "#ccc 1px solid",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "1.4rem",
    }

    return (
      <React.Fragment>
        <div style={grid}>
          <div style={item}>Item 1</div>
          <div style={item}>Item 2</div>
          <div style={item}>Item 3</div>
          <div style={item}>Item 4</div>
          <div style={item}>Item 5</div>
          <div style={item}>Item 6</div>
        </div>
      </React.Fragment>
    )
  }
}

export default GridColumns
