import React from 'react';

const Auth = (props) => {

    const pass = '123456';

    if( pass != '12345'){
        return <h3>You are not authorize</h3>
    }
    else{
        return props.children;
    }
}
 
export default Auth;