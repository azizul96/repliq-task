import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})
    
    console.log(user);
    
    useEffect(()=>{
        
        const LsToken = localStorage.getItem('access-token');
        
        if (LsToken) {
            const decoded = jwtDecode(LsToken)
            setUser(decoded);
        }
        
        
    },[])
    
    const authInfo = {
        user,
        setUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;