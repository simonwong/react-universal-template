import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'

import HeaderMenu from 'Components/HeaderMenu'
import GlobalLoading from 'Components/GlobalLoading'
import IndexHome from './Home'
import IndexHello from './Hello'
import IndexWorld from './World'

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
        const { change_menu } = this.props
        change_menu(menu)
    }

    render () {
        const { isFetching, activeMenu } = this.props

        return (
            <Router>
                <Fragment>
                    <HeaderMenu
                        menuList={this.state.menuList}
                        activeMenu={activeMenu}
                        onSelect={this.changeMenu}
                    />
                    <Switch>
                        <Route exact path="/home" component={IndexHome} />
                        <Route exact path="/hello" component={IndexHello} />
                        <Route exact path="/world" component={IndexWorld} />
                        <Redirect exact from="/" to="/home" />
                    </Switch>
                    <GlobalLoading show={isFetching} />
                </Fragment>
            </Router>
        )
    }
}

const mapStateToProps = (state) => {
    const { isFetching } = state.global

    return {
        isFetching,
    }
}

const mapDispatchToProps = () => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(IndexApp)
