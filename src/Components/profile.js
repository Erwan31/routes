import React from 'react';
import { Link } from 'react-router-dom';
import Card from './hoc/card';
import Auth from './hoc/auth';

const Profile = (props) => {
    return ( 
        <>
            <Auth>
                <Card>
                <Link to={{pathname:`${props.match.url}/posts`}}>
                        Go to Posts
                    </Link> 
                </Card>
            </Auth>
        </>
     );
}
 
export default Profile;