import React, { Component } from 'react'

import Ruby from './Ruby.jsx'

class Item extends Component {

  render() {
    const { word } = this.props

    return (
      <li className="list-group-item">
        <Ruby word={word}/>
        <span className="float-xs-right">
          {word.mean}
        </span>
      </li>
    )
  }
}

export default Item
