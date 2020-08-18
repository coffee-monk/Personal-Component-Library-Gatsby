import React, { Component } from "react"

export class GridSpan extends Component {
  render() {
    const grid = {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
    }

    const item = {
      padding: "3rem",
      border: "#ccc 1px solid",
      background: "#f4f4f4",
      fontSize: "1.3rem",
      fontWeight: "bold",
      textAlign: "center",
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
        <div style={item}>Item 11</div>
        <div style={item}>Item 12</div>
        <div style={item}>Item 13</div>
        <div style={item}>Item 14</div>
        <div style={item}>Item 15</div>
      </div>
    )
  }
}

export default GridSpan
