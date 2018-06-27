import { fork } from 'redux-saga/effects'
import { getArticleList } from './article'

export default function* rootSaga () {
    yield fork(getArticleList)
}
