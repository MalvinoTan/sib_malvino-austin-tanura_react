import { Component } from "react";

export class ListPeople extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {
                    this.props.people.map((p, idx) => <li key={idx}>{p.name}</li>)
                }
            </ul>
        )
    }
}