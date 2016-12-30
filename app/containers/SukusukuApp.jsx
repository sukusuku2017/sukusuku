import React, { Component } from 'react'

class SukusukuApp extends Component {

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-faded my-1">
          <a className="navbar-brand" href="#">스쿠스쿠</a>
        </nav>
        {this.props.children}
      </div>
    )
  }
}

export default SukusukuApp
