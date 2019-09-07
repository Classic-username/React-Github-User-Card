import React from 'react';

function UserCard(props) {
    console.log(props.userData,'props in usercard fn')
    return(
        <div>{props.userData.map(user => {
            return(
                <div key={user.id} className='user-card'>
                    <div>
                        <img src={user.avatar_url} alt='user avatar' width='200'/>
                        <h1>{user.login}</h1>
                    </div>
                    <div></div>

                </div>
            )
        })}</div>
    )
}

export default UserCard;