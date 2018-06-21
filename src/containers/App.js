import React, { Component } from 'react'

export default class IndexApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: [
                '1',
            ],
        }
    }
    render() {
        return (
            <div>
                <h3>12312312</h3>
                <ul>
                    {this.state.list.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
