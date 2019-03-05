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
import IndexHoc from './Hoc'
import IndexWorld from './World'

class IndexApp extends Component {
    constructor (props) {
        super(props)

        this.state = {
            menuList: [
                'home',
                'hoc',
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
        const { menuList } = this.state

        return (
            <Router>
                <Fragment>
                    <HeaderMenu
                        menuList={menuList}
                        activeMenu={activeMenu}
                        onSelect={this.changeMenu}
                    />
                    <Switch>
                        <Route exact path="/home" component={IndexHome} />
                        <Route exact path="/hoc" component={IndexHoc} />
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
