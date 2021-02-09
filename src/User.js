import React, { useEffect } from 'react';
import { getUser, useUserDispatch, useUserState } from './UsersContext';

function User({ id }){
    const state = useUserState();
    const dispatch = useUserDispatch();
    
    // User가 요청되거나, 값이 바뀔 때 실행
    useEffect(() => {
        getUser(dispatch, id);
    }, [dispatch, id]);

    const { loading, data:user, error } = state.user;

    if(loading) return <div>로딩중...</div>;
    if(error) return <div>에러가 발생했습니다.</div>;
    if(!user) return null;
    return (
        <div>
            <h2>{user.username}</h2>
            <p><b>Email</b> ${user.email}</p>
        </div>
    )
}

export default User;