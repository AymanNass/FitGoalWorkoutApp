import React, {useState, useContext, createContext} from 'react'

const UserContext = createContext([{}, () => {}])

const UserProvider = (props) => {
    const [state, setState] = useState({
        username: "",
        email: "",
        date:"",
        month:"",
        year: "",
        uid:"",
        isLoggedIn: null,
        

    });

    return <UserContext.Provider value={[state, setState]}>{props.children}</UserContext.Provider>
};

export {UserContext, UserProvider}; 