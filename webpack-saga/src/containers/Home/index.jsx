import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '@/reducers/article'
import styles from './index.scss'

class IndexHome extends Component {
  getData = () => {
    const { getArticleList } = this.props
    getArticleList()
  }

  render() {
    const { articleList } = this.props

    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <button type="button" onClick={this.getData}>
            Get Data
          </button>
        </div>
        <ul className={styles.articleList}>
          {articleList.map(item => (
            <li className={styles.articleItem} key={item.id}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { articleList } = state.article

  return {
    articleList,
  }
}

const mapDispatchToProps = dispatch => ({
  getArticleList: bindActionCreators(actions.get_article_list, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(IndexHome)
