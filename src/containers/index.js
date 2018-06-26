import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    withRouter,
} from 'react-router-dom'

import HeaderMenu from 'Components/HeaderMenu'
import GlobalLoading from 'Components/GlobalLoading'
import IndexHome from './Home'
import IndexHello from './Hello'
import IndexWorld from './World'
import { actions } from '../reducers'

class IndexApp extends Component {
    constructor (props) {
        super(props)

        this.state = {
            menuList: [
                'home',
                'hello',
                'world',
            ],
        }
    }

    changeMenu = (menu) => {
        const { change_menu, history } = this.props
        change_menu(menu)
        // history.push(`/${menu}`)
        // console.log(this.props)
    }

    render () {
        const { isFetching, activeMenu } = this.props

        return (
            <Fragment>
                <HeaderMenu
                    menuList={this.state.menuList}
                    activeMenu={activeMenu}
                    onSelect={this.changeMenu}
                />
                <Router>
                    <Switch>
                        <Route exact path="/home" component={IndexHome} />
                        <Route exact path="/hello" component={IndexHello} />
                        <Route exact path="/world" component={IndexWorld} />
                        <Redirect exact from="/" to="/home" />
                    </Switch>
                </Router>
                <GlobalLoading show={isFetching} />
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    const { isFetching } = state.global

    return {
        isFetching,
    }
}

const mapDispatchToProps = dispatch => ({
})

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(IndexApp)
export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(IndexApp)
)
