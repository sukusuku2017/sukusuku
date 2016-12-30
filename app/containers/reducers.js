import { combineReducers } from 'redux'
import {
  SELECT_CHAPTER,
  INVALIDATE_WORDS,
  REQUEST_WORDS,
  RECEIVE_WORDS
} from '../actions/list'

function selectedChapter(state = 'ch13', action) {
  switch (action.type) {
    case SELECT_CHAPTER:
      return action.chapter
    default:
      return state
  }
}

function words(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
    case INVALIDATE_WORDS:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_WORDS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_WORDS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.words,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function wordsByChapter(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_WORDS:
    case RECEIVE_WORDS:
    case REQUEST_WORDS:
      return Object.assign({}, state, {
        [action.chapter]: words(state[action.chapter], action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  wordsByChapter,
  selectedChapter
})

export default rootReducer
