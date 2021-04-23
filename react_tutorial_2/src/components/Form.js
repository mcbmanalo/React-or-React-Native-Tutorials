import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             firstName: '',
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
                <div>
                    <label>Username</label>
                    <div>
                        <input 
                        type="text" 
                        value={username} 
                        onChange={this.handleUsernameChange}/>
                    </div>
                </div>
                
                <div>
                    <label>Email</label>
                    <div>
                        <textarea 
                            value={comments}
                            onChange={this.handleCommentsChange}></textarea>
                    </div>
                </div>
            
                <div>
                    <label>Topic</label>
                    <div>
                    <select 
                        value={topic} 
                        onChange={this.handleTopicsChange}>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="vue">Vue</option>
                    </select>
                    </div>
                </div>

                <button>Click me!</button>
            </form>
        )
    }
}

export default Form
