import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './index.css';

var renderLocation = document.querySelector('#root');

class TodoList extends Component {
    render() {
        return (
            <h1>Hello There</h1>
        )
    }
}

ReactDOM.render(<TodoList/>, renderLocation);