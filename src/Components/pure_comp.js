import React, { PureComponent } from 'react';

class PureComp extends PureComponent {
    state = { 
        name: 'Frank'
    }

    /*
    shouldComponentUpdate(nextProps, nextState){
        if(nextState.name === this.state.name){
            console.log('change not')
            return false;
        }
        return true;
    }
    */

    render() { 
        console.log('render');

        return ( 
            <>
                <h3>{this.state.name}</h3>
                <button
                    onClick={
                        () => this.setState({name: 'Francis'})
                    }> Click to change
                </button>
            </>
         );
    }
}
 
export default PureComp;