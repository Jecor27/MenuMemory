import { create } from 'zustand';
import axios from 'axios';

const useAuthStore = create((set) => ({
    // State
    user: JSON.parse(localStorage.getItem('user')) || null,
    isLoading: false,
    error: null,

    // Login action
    login: async (email, password) => {
        set({ isLoading: true, error: null });

        try {
            const response = await axios.post('http://localhost:8080/api/user/login', {
                email,
                password
            });

            const userData = response.data;

            // Save to localStorage
            localStorage.setItem('user', JSON.stringify(userData));

            // Update state
            set({
                user: userData,
                isLoading: false,
                error: null
            });

            return userData;
        } catch (error) {
            set({
                isLoading: false,
                error: error.response?.data?.error || 'Failed to login'
            });
            throw error;
        }
    },

    // Signup action
    signup: async (email, password) => {
        set({ isLoading: true, error: null });

        try {
            const response = await axios.post('http://localhost:8080/api/user/signup', {
                email,
                password
            });

            const userData = response.data;

            // Save to localStorage
            localStorage.setItem('user', JSON.stringify(userData));

            // Update state
            set({
                user: userData,
                isLoading: false,
                error: null
            });

            return userData;
        } catch (error) {
            set({
                isLoading: false,
                error: error.response?.data?.error || 'Failed to signup'
            });
            throw error;
        }
    },

    // Logout action
    logout: () => {
        localStorage.removeItem('user');
        set({ user: null });
    },

    // Clear errors
    clearError: () => set({ error: null })
}));

export default useAuthStore;