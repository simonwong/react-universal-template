import React, { Component, Fragment } from 'react'
import HeaderMenu from 'Components/HeaderMenu'

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
            </Fragment>
        )
    }
}
