import React, { Component } from 'react'
import FlipMove from "react-flip-move";

export default class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }

    createTasks(item) {
        return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return (
            <FlipMove duration={1150} easing="ease-out">
            <ul className="theList">
                {listItems}
            </ul>
            </FlipMove>
        )
    }
}