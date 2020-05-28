import React, { Component } from 'react'

import HocExample from './HocExample'

class IndexHoc extends Component {
  state = {
    word: '好吧',
  }

  render () {
    const { word } = this.state
    const { count } = this.props

    return (
      <ul>
        <li>{ word }</li>
        <li>{ count }</li>
        <li>没事儿</li>
      </ul>
    )
  }
}

export default HocExample(IndexHoc)
