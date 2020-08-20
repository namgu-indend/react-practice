import React, { useEffect } from "react";

function User({ user, onRemove, onToggle }) {
    const { username, email, id, active } = user;
    
    useEffect(() => {  // mount
        console.log("컴포넌트가 화면에 나타남")
        // props -> state
        // REST API
        // D3 Video.js
        // setInterval, setTimeout
        
        return () => { // unmount
            // clearInterval, clearTimeout
            // 라이브러리 인스턴스 제거
            console.log("컴포넌트가 화면에 사라짐")
        }
    }, [])

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