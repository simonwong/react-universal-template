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
                    text: 'HELLO',
                },
                {
                    id: 3,
                    text: 'HELLO',
                },
                {
                    id: 4,
                    text: 'HELLO',
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
