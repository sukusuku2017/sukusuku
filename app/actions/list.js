import 'whatwg-fetch'

export const SELECT_CHAPTER = 'SELECT_CHAPTER'
export function selectChapter(chapter) {
  return {
    type: SELECT_CHAPTER,
    chapter
  }
}

export const SELECT_DISPLAY_MODE = 'SELECT_DISPLAY_MODE'
export function selectDisplayMode(mode) {
  return {
    type: SELECT_DISPLAY_MODE,
    mode
  }
}

export const REQUEST_WORDS = 'REQUEST_WORDS'
function requestWords(chapter) {
  return {
    type: REQUEST_WORDS,
    chapter
  }
}

export const RECEIVE_WORDS = 'RECEIVE_WORDS'
function receiveWords(chapter, json) {
  return {
    type: RECEIVE_WORDS,
    chapter,
    words: json.content,
    receivedAt: Date.now()
  }
}

export function fetchWords(chapter) {

  return function (dispatch) {

    dispatch(requestWords(chapter))

    return fetch(`/api/${chapter}.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveWords(chapter, json)))
  }
}

function shouldFetchWords(state, chapter) {
  const words = state.wordsByChapter[chapter]
  if (!words) {
    return true
  } else if (words.isFetching) {
    return false
  }
}

export function fetchWordsIfNeeded(chapter) {

  return (dispatch, getState) => {

    if (shouldFetchWords(getState(), chapter)) {

      return dispatch(fetchWords(chapter))

    } else {

      return Promise.resolve()
    }
  }
}
