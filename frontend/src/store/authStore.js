import {create} from 'zustand';

const authStore = (set) => ({
    user : null,
    accessToken : null,
    
    setAuth : (user,accessToken) => {
        set({user, accessToken});
    },

    clearAuth : (user,accessToken) => {
        set({user: null, accessToken: null});
    }
})

const useAuthStore = create(authStore);

export default useAuthStore;