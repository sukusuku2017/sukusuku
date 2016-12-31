import React, { Component } from 'react'
import { Link } from 'react-router';
import _ from 'underscore'

class Group extends Component {

  renderListGroup(chapters) {
    return (
      chapters.map((chapter, index) => (
        <li className="list-group-item" key={index}>
          {chapter}과 단어
          <div className="float-xs-right">
            <Link className="btn btn-outline-danger btn-sm"
                to={`/list/ch${chapter}`}>
              리스트
            </Link>
            {' '}
            <Link className="btn btn-outline-danger btn-sm"
                to={`/card/ch${chapter}`}>
              카드
            </Link>
          </div>
        </li>
      ))
    )
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 my-2">
          <h4>기초일본어 1코스</h4>
          <ul className="list-group">
            {this.renderListGroup(_.range(1, 11))}
          </ul>
        </div>
        <div className="col-md-6 my-2">
          <h4>기초일본어 2코스</h4>
          <ul className="list-group">
            {this.renderListGroup(_.range(11, 21))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Group
