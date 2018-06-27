import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../reducers/article.js'
import styles from './Home.scss'

class IndexHome extends Component {
    getData = () => {
        this.props.get_article_list()
    }

    render () {
        const { articleList } = this.props

        return (
            <div className={styles.container}>
                <div className={styles.top}>
                    <button
                        onClick={this.getData}
                    >Get Data
                    </button>
                </div>
                <ul>
                    {
                        articleList.map(item => (
                            <li key={item.id}>{item.title}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { articleList } = state.article

    return {
        articleList,
    }
}

const mapDispatchToProps = dispatch => ({
    get_article_list: bindActionCreators(actions.get_article_list, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(IndexHome)
