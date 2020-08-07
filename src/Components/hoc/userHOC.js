import React from 'react';

const UserHoc = (WrappedComponent, WrappedComponent2, arg1) => {

    console.log(arg1);

    return () => (
        <>
            <div>{arg1}</div>
            <WrappedComponent/>
            <WrappedComponent2/>
        </>
    )
}
 
export default UserHoc;