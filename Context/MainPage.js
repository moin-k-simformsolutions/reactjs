import React, { useState } from 'react';
import UserDataContext from './UserDataContext';
import SubPage from './SubPage';

const MainPage = () => {

    const [uid, setUid] = useState(null);
    const [uname, setUname] = useState("");
    const [sawSub, setSawSub] = useState(false);
    return (
        <UserDataContext.Provider value={{ userId: uid, userName: uname }}>
            {sawSub === true ? <SubPage /> :
                <div >
                    <input style={{ fontSize: "20px" }} type="text" placeholder="user id" onChange={e => setUid(e.target.value)}></input><br />
                    <input style={{ fontSize: "20px" }} type="text" placeholder="user name" onChange={e => setUname(e.target.value)}></input>
                    <button style={{ fontSize: "20px" }} onClick={() => setSawSub(true)}>submit</button>
                </div>
            }
        </UserDataContext.Provider>
    );
}
export default MainPage;