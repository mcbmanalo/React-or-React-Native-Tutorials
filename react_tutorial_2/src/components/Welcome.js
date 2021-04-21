import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const {name, alias} = this.props
        return <h1>Welcome {name}, the {alias}</h1>
    }
}

export default Welcome; 