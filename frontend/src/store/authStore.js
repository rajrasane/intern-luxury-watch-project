import {create} from 'zustand';

const authStore = (set) => ({
    user : null,
    accessToken : null,
    role : null,
    
    setAuth : (user, accessToken) => {
        set({user, accessToken, role: user?.role || null});
    },

    clearAuth : () => {
        set({user: null, accessToken: null, role: null});
    }
})

const useAuthStore = create(authStore);

export default useAuthStore;