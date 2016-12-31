import React, { Component } from 'react'

class Buttons extends Component {

  render() {
    return (
      <div className="btn-group" data-toggle="buttons">
        <label className="btn btn-outline-primary btn-md active">
          <input type="radio" name="mode" id="mode1" autoComplete="off"/> 모두
        </label>
        <label className="btn btn-outline-primary btn-md">
          <input type="radio" name="mode" id="mode2" autoComplete="off"/> 단어
        </label>
        <label className="btn btn-outline-primary btn-md">
          <input type="radio" name="mode" id="mode3" autoComplete="off"/> 의미
        </label>
      </div>
    )
  }
}

export default Buttons
