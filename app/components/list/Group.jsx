import React, { Component } from 'react'

import Item from './Item.jsx'

class Group extends Component {

  render() {
    const { content } = this.props

    return (
        <div className="row my-1">
          <div className="col-md-6 offset-md-3">
            <h5>{content.name}</h5>
            <ul className="list-group">
              {
                content.words.map((word, index) => (
                  <Item word={word} key={index}/>
                ))
              }
            </ul>
          </div>
        </div>
    )
  }
}

export default Group
