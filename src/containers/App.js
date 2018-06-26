import React, { Component, Fragment } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
import HeaderMenu from 'Components/HeaderMenu'
import GlobalLoading from 'Components/GlobalLoading'

export default class IndexApp extends Component {
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

    render () {
        return (
            <Fragment>
                <HeaderMenu
                    menuList={this.state.menuList}
                />
                {/* <Router>
                    <Switch>
                        <Route path="/home" component={} />
                    </Switch>
                </Router> */}
                <GlobalLoading show />
            </Fragment>
        )
    }
}
