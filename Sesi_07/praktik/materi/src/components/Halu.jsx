import React from "react";

export default class Halu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            users: [],
            isLoading: true,
            data: []
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.users.length !== nextState.users.length) {
            console.log(true);
            return true;
        }

        console.log(false);
        return false;
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedState !== this.props.selectedState) {
            fetch('https://pathToApi.com')
                .then(res => res.json())
                .then(resJson => {
                    //do what ever you want with you response
                    this.setState({
                        isLoading: false,
                        data: resJson
                    })
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }


    render() {
        return (
            <></>
        )
    }

    // // eventData add event listener
    // componentDidMount() {
    //     eventData.addEventListener()
    // }

    // // eventData remove event listener
    // componentWillUnmount() {
    //     eventData.removeEventListener()
    // }
}