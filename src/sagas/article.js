import { take, put, call } from 'redux-saga/effects'

import API from '../api'
import { actionTypes } from '../reducers/article'

export function* getArticleList () {
    while (true) {
        const req = yield take(actionTypes.GET_ARTICLE_LIST)
        const res = yield call(API.article.getList)

        if (res) {
            yield put({ type: actionTypes.RESPONSE_ARTICLE_LIST, payload: res.data.list })
        }
    }
}
