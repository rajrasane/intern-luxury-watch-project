import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import api from '../api/axios';
import useAuthStore from '../store/authStore';

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { setAuth, accessToken } = useAuthStore();

    useEffect(() => {
        let isMounted = true;

        const verifyRefreshToken = async () => {
            try {
                const response = await api.post('/auth/refresh');
                const { user, accessToken } = response.data;
                setAuth(user, accessToken);
            } catch (err) {
                console.error("No valid refresh token found.");
            } finally {
                isMounted && setIsLoading(false);
            }
        };

        !accessToken ? verifyRefreshToken() : setIsLoading(false);

        return () => isMounted = false;
    }, []);

    return (
        <>
            {isLoading 
                ? <div className="flex justify-center items-center h-screen">Loading session...</div> 
                : <Outlet />
            }
        </>
    );
};

export default PersistLogin;
