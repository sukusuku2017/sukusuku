import React, { Component } from 'react'

class Ruby extends Component {

  render() {
    const { word } = this.props

    if (word.base && word.ruby) {
      return (
        <ruby>
          {word.base} <rp>(</rp><rt>{word.ruby}</rt><rp>)</rp>
        </ruby>
      )
    } else {
      return (
        <ruby>
        {
          word.characters.map((character, index) => ([
            <span>{character.base}</span>,
            <rp>(</rp>,
            <rt>{character.ruby}</rt>,
            <rp>)</rp>
          ]))
        }
        </ruby>
      )
    }
  }
}

export default Ruby
