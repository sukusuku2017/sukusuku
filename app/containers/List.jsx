import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { selectChapter, fetchWordsIfNeeded, invalidateWords } from '../actions/list'
import Buttons from 'components/list/Buttons.jsx'
import Group from 'components/list/Group.jsx'

class List extends Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }

  componentDidMount() {
    const { dispatch, selectedChapter } = this.props
    dispatch(fetchWordsIfNeeded(selectedChapter))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChapter !== this.props.selectedChapter) {
      const { dispatch, selectedChapter } = nextProps
      dispatch(fetchWordsIfNeeded(selectedChapter))
    }
  }

  handleChange(nextSubreddit) {
    this.props.dispatch(selectChapter(nextSubreddit))
  }

  handleRefreshClick(e) {
    e.preventDefault()

    const { dispatch, selectedChapter } = this.props
    dispatch(invalidateWords(selectedChapter))
    dispatch(fetchWordsIfNeeded(selectedChapter))
  }

  render() {
    const { selectedChapter, words, isFetching, lastUpdated, displayMode } = this.props

    return (
      <div>
        <h1>과</h1>
        <Buttons mode={displayMode}/>
        {
          words.map((content, index) => (
            <Group content={content} key={index}></Group>
          ))
        }
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
  const {
    isFetching,
    lastUpdated,
    displayMode,
    items: words
  } = wordsByChapter[selectedChapter] || {
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
