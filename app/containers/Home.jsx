import React, { Component } from 'react'
import { Link } from 'react-router'

import Jumbotron from 'components/home/Jumbotron.jsx'
import Group from 'components/home/Group.jsx'

class Home extends Component {

  render() {
    return (
      <div>
        <Jumbotron></Jumbotron>
        <Group></Group>
      </div>
    )
  }
}

export default Home
