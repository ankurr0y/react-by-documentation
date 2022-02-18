import React from "react";

class ToggleButton extends React.Component{
    constructor(props){
        super(props);
        this.state={isToggleOn: true};
        this.handleClick=this.handleClick.bind(this); //Bind command to function
    }

    handleClick(){//toggle state
        this.setState(function(previousState){
            return({
                isToggleOn: !previousState.isToggleOn
            })
        });
    }
    
    render(){
        return(<>
            <button onClick={this.handleClick}>
                {this.state.isToggleOn? 'ON':'OFF'}
            </button>
            </>
        )
    }
}

export default ToggleButton;