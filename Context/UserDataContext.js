import { createContext } from 'react';

const UserDataContext = createContext({ userId: null, userName: "" });

export default UserDataContext;