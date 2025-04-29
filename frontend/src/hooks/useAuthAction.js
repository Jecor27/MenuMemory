
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

export function useAuthAction() {
    const { user } = useAuthStore();
    const navigate = useNavigate();

    // This function wraps any action that requires authentication
    const withAuth = (action) => async (...args) => {
        if (!user) {
            alert('Please log in to perform this action');
            navigate('/login');
            return;
        }

        return await action(...args);
    };

    return { withAuth };
}