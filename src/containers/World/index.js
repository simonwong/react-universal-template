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
