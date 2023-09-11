import { useState, useEffect } from 'react';

const useToken = () => {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token || null;
    };

    const [token, setToken] = useState(getToken());

    const saveToken = (userToken) => {
        sessionStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
    };

    const removeToken = () => {
        sessionStorage.removeItem('token');
        setToken(null);
    };

    useEffect(() => {
        const token = getToken();
        if (!token) {
            removeToken();
        }
    }, []);

    return {
        token,
        setToken: saveToken,
        removeToken,
    };
};

export default useToken;
