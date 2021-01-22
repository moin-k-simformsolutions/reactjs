import React, { useContext } from 'react';
import UserDataContext from './UserDataContext';

const SubPage = () => {
    const data = useContext(UserDataContext);
    return (
        <div>
            <h1>user id:{data.userId}</h1>
            <h1>user name:{data.userName}</h1>
        </div>
    );
}

export default SubPage;