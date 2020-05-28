import React, { Component } from 'react'

export default class IndexWorld extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [
        {
          id: 1,
          text: 'WORLD',
        },
        {
          id: 2,
          text: 'WORLD',
        },
        {
          id: 3,
          text: 'WORLD',
        },
        {
          id: 4,
          text: 'WORLD',
        },
        {
          id: 5,
          text: '111',
        },
      ],
    }
  }

  render () {
    const { data } = this.state
    console.log(data)
    return (
      <ul>
        {
          data.map((item) => (
            <li key={item.id}>{ item.text }</li>
          ))
        }
      </ul>
    )
  }
}
