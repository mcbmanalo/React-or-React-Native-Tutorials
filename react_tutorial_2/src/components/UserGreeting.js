import React, { Component } from 'react'

class UserGreeting extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }

        this.logout = this.logout.bind(this)
        this.login = this.login.bind(this)
    }
    
    logout() {
        this.setState({
            isLoggedIn: false
        })
    }

    login() {
        this.setState({
            isLoggedIn: true
        })
    }
    
    render() {

        return(
            this.state.isLoggedIn ?
            (
                <div>
                    <div>Welcome!</div>
                    <button onClick={this.logout}>Log out</button>
                 </div>
            ) : (
                <div>
                    <div>You're a guest!</div>
                    <button onClick={this.login}>Log in</button>
                </div>
            )
        )

        // let message
        // if (this.state.isLoggedIn) {
        //     message = (
        //         <div>
        //             <div>Welcome!</div>
        //             <button onClick={this.logout}>Log out</button>
        //         </div>
        //     )
        // } else {
        //     message = (
        //         <div>
        //             <div>You're a guest!</div>
        //             <button onClick={this.login}>Log in</button>
        //         </div>
        //     )
        // }

        // return message
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             <div>Welcome!</div>
        //             <button onClick={this.logout}>Log out</button>
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             <div>You're a guest!</div>
        //             <button onClick={this.login}>Log in</button>
        //         </div>
        //     )
        // }
    }
}

export default UserGreeting
