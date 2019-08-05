import React, { Component } from 'react'

import HocExample from './HocExample'

class IndexHoc extends Component {
    constructor (props) {
        super(props)

        this.state = {
            word: 'sdasd',
        }
    }

    render () {
        const { word } = this.state

        return (
            <div>
                { word }
                <span>
                    asdasdasd
                </span>
            </div>
        )
    }
}

export default HocExample(IndexHoc)
