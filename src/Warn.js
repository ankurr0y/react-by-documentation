import React from "react";

function Warning(props){
    if(!props.warning){
        return null;
    }
    return(
        <h1>Warning</h1>
    );
}

class Warn extends React.Component {
    constructor(props){
        super(props);
        this.state = {showWarning:true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

    render(){
        return(
            <div>
                <Warning warning={this.state.showWarning}></Warning>
                <button onClick={this.handleClick}>
                    Change Warning
                </button>
            </div>
        );
    }
}

export default Warn;