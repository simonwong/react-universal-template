const initialState = {
  articleList: [],
}

export const actionTypes = {
  GET_ARTICLE_LIST: 'GET_ARTICLE_LIST',
  RESPONSE_ARTICLE_LIST: 'RESPONSE_ARTICLE_LIST',
}

export const actions = {
  get_article_list: () => ({
    type: actionTypes.GET_ARTICLE_LIST,
  }),
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RESPONSE_ARTICLE_LIST:
      return {
        ...state,
        articleList: action.payload,
      }
    default:
      return state
  }
}
