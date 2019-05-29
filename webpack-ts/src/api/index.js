import createAPI from './createAPI'

const article = {
    getList: config => createAPI('/getArticle', 'get', config),
}

export default {
    article,
}
