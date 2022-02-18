import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    render(){
        return(
            <>
            The time is: {this.props.date.toLocaleTimeString()} (From the class props call) <br></br>
            <i>The date is: {this.state.date.toLocaleDateString()} (from the class constructor)</i>
            </>
        );
    }
}

export default Clock;