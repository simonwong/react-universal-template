import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { hot } from 'react-hot-loader/root'

import HeaderMenu from '@/components/HeaderMenu'
import GlobalLoading from '@/components/GlobalLoading'
import IndexHome from './Home'
import IndexHoc from './Hoc'
import IndexWorld from './World'

class IndexApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuList: ['home', 'hoc', 'world'],
    }
  }

  changeMenu = menu => {
    const { changeMenu } = this.props
    changeMenu(menu)
  }

  render() {
    const { isFetching, activeMenu } = this.props
    const { menuList } = this.state

    return (
      <Router>
        <>
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
        </>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  const { isFetching } = state.global

  return {
    isFetching,
  }
}

const mapDispatchToProps = () => ({})

const ConnectApp = connect(mapStateToProps, mapDispatchToProps)(IndexApp)

export default hot(() => <ConnectApp />)
