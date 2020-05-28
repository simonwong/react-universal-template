import React from 'react'

function HocExample (WrapperComponent, state) {
  return class ReturnComponent extends React.Component {
    state = {
      count: 1,
    }

    componentDidMount () {
      console.log(this.props)
      this.setState({
        count: 10,
        ...state,
      })
    }

    render () {
      return (
        <WrapperComponent
          {...this.props}
          {...this.state}
        />
      )
    }
  }
}

export default HocExample
