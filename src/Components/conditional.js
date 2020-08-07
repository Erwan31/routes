import React, { Component } from 'react';

class Conditional extends Component {

    state = {
        loading: true,
    }

    returnValue =() => {
        return true;
    }

    showIt = () => {
        return (
            this.returnValue() ? 
                <div>Hello it's true</div>
                :null
        )
    }

    render(){

        if( this.state.loading){
            return <div>Loading...</div>
        }
        else{
            return ( 
            <>
                {this.showIt()}
                <div>Conditional</div>
            </>
            );
        }
    }

    componentDidMount(){
        setTimeout( () => {
            this.setState({ loading: false});
        }, 3000)
    }
    
}
 
export default Conditional;