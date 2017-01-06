import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { selectChapter, fetchWordsIfNeeded } from '../actions/list'
import Buttons from 'components/list/Buttons.jsx'
import Group from 'components/list/Group.jsx'

class List extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch, selectedChapter } = this.props
    const chapter = this.props.routeParams.chapter
    dispatch(selectChapter(chapter))
    dispatch(fetchWordsIfNeeded(chapter))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChapter !== this.props.selectedChapter) {
      const { dispatch, selectedChapter } = nextProps
      dispatch(fetchWordsIfNeeded(selectedChapter))
    }
  }

  render() {
    const { selectedChapter, words, isFetching, lastUpdated, displayMode } = this.props

    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Buttons mode={displayMode}/>
          <h1>과</h1>
        {
          words.map((content, index) => (
            <Group content={content} key={index}></Group>
          ))
        }
        </div>
      </div>
    )
  }
}

List.propTypes = {
  selectedChapter: PropTypes.string.isRequired,
  words: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { selectedChapter, wordsByChapter } = state
  const { isFetching, lastUpdated, displayMode, items: words } = wordsByChapter[selectedChapter] || {
    isFetching: true,
    items: []
  }

  return {
    selectedChapter,
    words,
    isFetching,
    lastUpdated,
    displayMode
  }
}

export default connect(mapStateToProps)(List)
