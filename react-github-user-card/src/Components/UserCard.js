import React, { useState, useEffect } from 'react';
import FollowerButton from './FollowerButton';
import Axios from 'axios';

function UserCard(props) {
    console.log(props,'props in usercard fn')
    const [ userFollower, setUserFollower ] = useState();

    const user = props.userData.login
    console.log(user,'user')

    useEffect(() => {
        Axios
            .get(user.followers_url)
            .then(res => res.json)
            .then(res => {
                // const userFollowerArray = 
                res.map(follower => {
                    console.log(follower,'inside useEffect: usercard')
                    // setUserFollower(follower)
                    // return(
                    //     <div>{follower.login}</div>
                    // )
                })
            })
    }, [])

   
   

    return(
        <div>{props.userData.map(user => (
            
                <div key={user.id} className='user-card'>
                    <div>
                        <img src={user.avatar_url} alt='user avatar' width='200'/>
                        <h1>{user.login}</h1>
                    </div>
                    {/* <div>{userFollowerArray}</div> */}
                    {/* <div>
                    attempt to make axios call after div has rendered, did not work.
                        {Axios
                            .get(user.followers_url)
                            .then(res => res.json())
                            .then(list => console.log(list))
                            .catch(err => console.log(err, 'error'))
                        }
                    </div> */}
                    {/* <FollowerButton userArray={userFollowerArray} /> */}

                </div>
            
        ))}</div>
    )
}

export default UserCard;