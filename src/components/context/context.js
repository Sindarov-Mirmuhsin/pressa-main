import React, { useState} from 'react';

const Context = React.createContext();

const TokenProvider = ({ children }) => {

	const [token ,setToken] = useState(JSON.parse(window.localStorage.getItem("token")) || false)
    const link = 'http://localhost:5000';
	
	React.useEffect(() => {
        if(token) {
            window.localStorage.setItem("token", JSON.stringify(token)
            )
        }
        else{
            window.localStorage.removeItem("token");
        }
    }, [token])

	return (
		<Context.Provider value={{token ,setToken,link}}>{children}</Context.Provider>
	);
};

export { Context, TokenProvider };

