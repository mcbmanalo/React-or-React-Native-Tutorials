import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             topic: 'react'
        }
    }
    
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicsChange = event => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.username} commented ${this.state.comments} with a topic ${this.state.topic}`)
    }
 
    render() {
        const {username, comments, topic} = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>Username</label>
                <input 
                type="text" 
                value={username} 
                onChange={this.handleUsernameChange}/>
            
                <div>
                    <label>Comments</label>
                    <textarea 
                        value={comments}
                        onChange={this.handleCommentsChange}></textarea>
                </div>
            
                <div>
                    <label>Topic</label>
                    <select 
                        value={topic} 
                        onChange={this.handleTopicsChange}>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="vue">Vue</option>
                        </select>
                </div>

                <button>Click me!</button>
            </form>
        )
    }
}

export default Form
