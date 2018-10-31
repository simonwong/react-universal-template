import React, { Component } from 'react'

export default class IndexHello extends Component {
    constructor (props) {
        super(props)
        this.state = {
            data: [
                {
                    id: 1,
                    text: 'HELLO',
                },
                {
                    id: 2,
                    text: 'World',
                },
                {
                    id: 3,
                    text: 'Hello',
                },
                {
                    id: 4,
                    text: 'World',
                },
            ],
        }
    }

    render () {
        return (
            <ul>
                {
                    this.state.data.map(item => (
                        <li key={item.id}>{ item.text }</li>
                    ))
                }
            </ul>
        )
    }
}
