import React, { useEffect } from "react";

function User({ user, onRemove, onToggle }) {
    const { username, email, id, active } = user;
    
    return (
        <div>
            <b style={{
                    color: active ? 'green' : 'blue',
                    cursor:'pointer'
                }}
                onClick={ () => onToggle(id) }
            >
                {username}
            </b> 
            <span>({email})</span>
            <button onClick={()=>onRemove(id)}>삭제</button>
        </div>
    ) 
}

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {
                users.map( 
                    user => (
                        <User 
                            key={user.id} 
                            user={user} 
                            onRemove={onRemove}
                            onToggle={onToggle} />
                    )
                ) 
            }
        </div>
    )
}

export default UserList;