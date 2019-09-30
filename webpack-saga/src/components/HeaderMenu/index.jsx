import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './index.scss'

export default class HeaderMenu extends Component {
    handleClick = (menu) => {
        const { onSelect } = this.props
        onSelect(menu)
    }

    render () {
        const { menuList } = this.props

        return (
            <nav className={styles.container}>
                {
                    menuList.map((menu) => (
                        <NavLink
                            className={styles.tag}
                            activeClassName={styles.active}
                            key={menu}
                            to={`/${menu}`}
                        >
                            { menu }
                        </NavLink>
                    ))
                }
            </nav>
        )
    }
}

HeaderMenu.defaultProps = {
    onSelect: () => {},
}

HeaderMenu.propTypes = {
    menuList: PropTypes.arrayOf(
        PropTypes.string
    ).isRequired,
    onSelect: PropTypes.func,
}
