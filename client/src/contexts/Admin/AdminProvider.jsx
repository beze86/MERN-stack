import React, { createContext, useContext, useReducer } from 'react';


const AdminContext = createContext();

const initialState = false;
const reducer = (state, action) => {
    switch(action) {
        case 'setIsAdmin':
            return state = true;
        default:
            return state
    }
}

const AdminProvider = ({ children }) => {
    const [admin, dispatch] = useReducer(reducer, initialState);

    return (
        <AdminContext.Provider value={{admin: admin, adminDispatch: dispatch}}>
            {children}
        </AdminContext.Provider>
    )
}

const useAdminState = () => {
    const admin = useContext(AdminContext);
    
    if (Object.keys(admin).length === 0) {
        throw new Error('useAdminState must be used within a AdminProvider');
    }

    return admin
}


export { AdminProvider, useAdminState };
