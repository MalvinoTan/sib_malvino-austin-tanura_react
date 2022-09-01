import React, { Component } from 'react';

export class ReactDemo extends Component {
    constructor () {
        super();
        this.state = {
            username: ""
        }

        this.loggingIn = this.loggingIn.bind(this);
        this.loggingOut = this.loggingOut.bind(this);
    }

    loggingIn() {
        this.setState({
            username: 'malvino'
        }, () => {
            console.log(this.state.username);
        })
    }

    loggingOut() {
        this.setState({
            username: ''
        }, () => {
            console.log(this.state.username);
        })

    }
    render() {
        return (
            <div>
                <button onClick={this.loggingIn}>LOGIN</button>
                <button onClick={this.loggingOut}>LOGOUT</button>
            </div>
        )
    }
}