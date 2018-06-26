import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'

import HeaderMenu from 'Components/HeaderMenu'
import GlobalLoading from 'Components/GlobalLoading'
import { actions } from '../reducers'

class IndexApp extends Component {
    constructor (props) {
        super(props)

        this.state = {
            menuList: [
                'HOME',
                'HELLO',
                'WORLD',
                'ABOUT',
            ],
        }
    }

    changeMenu = (menu) => {
        this.props.change_menu(menu)
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
                {/* <Router>
                    <Switch>
                        <Route path="/home" component={} />
                    </Switch>
                </Router> */}
                <GlobalLoading show={isFetching} />
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    const { isFetching, activeMenu } = state.global

    return {
        isFetching,
        activeMenu,
    }
}

const mapDispatchToProps = dispatch => ({
    change_menu: bindActionCreators(actions.change_menu, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(IndexApp)
