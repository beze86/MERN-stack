import React, { useState, useEffect, createContext, useContext } from 'react';


const AdminContext = createContext();

const AdminProvider = ({ children }) => {
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        if (window.location.href.indexOf('?rank=admin') !== -1) {
            setAdmin(true)
        }
    }, [admin])

    return (
        <AdminContext.Provider value={[admin, setAdmin]}>
            {children}
        </AdminContext.Provider>
    )
}

const useAdminState = () => {
    const admin = useContext(AdminContext);

    if (admin === undefined) {
        throw new Error('useAdminState must be used within a AdminProvider');
    }

    return admin
}


export { AdminProvider, useAdminState };
