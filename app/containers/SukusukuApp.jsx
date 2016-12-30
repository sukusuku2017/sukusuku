import React, { Component } from 'react'

class SukusukuApp extends Component {

  render() {
    return (
      <div>
        <h1>sukusuku app</h1>
        {this.props.children}
      </div>
    )
  }
}

export default SukusukuApp
