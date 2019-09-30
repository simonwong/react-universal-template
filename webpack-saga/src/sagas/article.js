import { take, put, call } from 'redux-saga/effects'

import API from '../api'
import { actionTypes } from '../reducers/article'

// eslint-disable-next-line import/prefer-default-export
export function* getArticleList () {
    while (true) {
        yield take(actionTypes.GET_ARTICLE_LIST)
        const res = yield call(API.article.getList)

        if (res) {
            yield put({ type: actionTypes.RESPONSE_ARTICLE_LIST, payload: res.data.list })
        }
    }
}
