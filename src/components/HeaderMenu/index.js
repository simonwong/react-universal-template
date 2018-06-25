import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './HeaderMenu.scss'

export default class HeaderMenu extends Component {
    constructor (props) {
        super(props)

        this.state = {
            active: '',
        }
    }

    handleClick = (menu) => {
        this.setState({
            active: menu,
        })

        this.props.onSelect(menu)
    }

    render () {
        const { menuList, activeMenu } = this.props
        const active = activeMenu || this.state.active

        return (
            <nav className={styles.container}>
                {
                    menuList.map(menu => (
                        <a
                            className={`${styles.tag} ${menu === active ? styles.active : ''}`}
                            onClick={() => { this.handleClick(menu) }}
                            key={menu}
                        >{ menu }
                        </a>
                    ))
                }
            </nav>
        )
    }
}

HeaderMenu.defaultProps = {
    onSelect: () => {},
    activeMenu: null,
}

HeaderMenu.propTypes = {
    menuList: PropTypes.arrayOf(
        PropTypes.string
    ).isRequired,
    activeMenu: PropTypes.string,
    onSelect: PropTypes.func,
}
