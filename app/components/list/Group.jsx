import React, { Component } from 'react'

import Item from './Item.jsx'

class Group extends Component {

  render() {
    const { content } = this.props

    return (
      <div className="my-1">
        <h5>{content.name}</h5>
        <ul className="list-group">
          {
            content.words.map((word, index) => (
              <Item word={word} key={index}/>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Group
