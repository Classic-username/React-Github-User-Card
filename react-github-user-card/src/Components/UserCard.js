import React, { useState, useEffect } from 'react';
import FollowerButton from './FollowerButton';

function UserCard(props) {
    console.log(props.userData,'props in usercard fn')
    const [ userFollower, setUserFollower ] = useState();

    const user = props.userData.login
    console.log(user,'user')

   const userFollowerArray = props.userData.map(user => {
       return(
           user.followers_url
       )
   })
   

    return(
        <div>{props.userData.map(user => (
            
                <div key={user.id} className='user-card'>
                    <div>
                        <img src={user.avatar_url} alt='user avatar' width='200'/>
                        <h1>{user.login}</h1>
                    </div>
                    <FollowerButton userArray={userFollowerArray} />

                </div>
            
        ))}</div>
    )
}

export default UserCard;