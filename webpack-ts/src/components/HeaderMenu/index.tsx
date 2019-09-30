import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.scss'

interface IMenuProps {
    menuList?: []
    onSelect?: () => void
}

class HeaderMenu extends Component<IMenuProps, {}> {
    handleClick = (menu) => {
        const { onSelect } = this.props
        onSelect(menu)
    }

    public render() {
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
    menuList: [],
}

export default HeaderMenu
