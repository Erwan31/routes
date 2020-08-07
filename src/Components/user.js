import React from 'react';
import UserHoc from './hoc/userHOC';

const User = () => {
    return ( 
        <div>
            User
        </div>
     );
}

const User2 = () => {
    return ( 
        <div>
            User2
        </div>
     );
}
 
export default UserHoc(User, User2, 'Hello I am');