import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import TodoList from './assets/components/TodoList';
import './assets/css/index.css';

var renderLocation = document.querySelector('#root');

class App extends Component {
    render() {
        return (
            <div>
                <TodoList/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, renderLocation);