
import { create } from 'zustand';
import apiClient from '../../utils/apiClient';

const useRecipeStore = create((set, get) => ({
    // State
    foodRecipes: [],
    drinkRecipes: [],
    currentRecipe: null,
    isLoading: false,
    error: null,
    
    // Get all food recipes
    getFoodRecipes: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await apiClient.get('/foods');
            set({ foodRecipes: response.data, isLoading: false });
        } catch (error) {
            console.error('Error fetching food recipes:', error);
            set({ error: error.message, isLoading: false });
        }
    },
    
    // Get all drink recipes
    getDrinkRecipes: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await apiClient.get('/drinks');
            set({ drinkRecipes: response.data, isLoading: false });
        } catch (error) {
            console.error('Error fetching drink recipes:', error);
            set({ error: error.message, isLoading: false });
        }
    },
    
    // Get a single food recipe
    getFoodRecipe: async (id) => {
        set({ isLoading: true, error: null, currentRecipe: null });
        try {
            const response = await apiClient.get(`/foods/${id}`);
            set({ currentRecipe: { ...response.data, type: 'food' }, isLoading: false });
            return response.data;
        } catch (error) {
            console.error('Error fetching food recipe:', error);
            set({ error: error.message, isLoading: false });
        }
    },
    
    // Get a single drink recipe
    getDrinkRecipe: async (id) => {
        set({ isLoading: true, error: null, currentRecipe: null });
        try {
            const response = await apiClient.get(`/drinks/${id}`);
            set({ currentRecipe: { ...response.data, type: 'drink' }, isLoading: false });
            return response.data;
        } catch (error) {
            console.error('Error fetching drink recipe:', error);
            set({ error: error.message, isLoading: false });
        }
    },
    
    // Delete a recipe (food or drink)
    deleteRecipe: async (id, type) => {
        set({ isLoading: true, error: null });
        try {
            await apiClient.delete(`/${type}s/${id}`);
            
            // Update the appropriate state based on the recipe type
            if (type === 'food') {
                set(state => ({
                    foodRecipes: state.foodRecipes.filter(recipe => recipe._id !== id),
                    isLoading: false
                }));
            } else if (type === 'drink') {
                set(state => ({
                    drinkRecipes: state.drinkRecipes.filter(recipe => recipe._id !== id),
                    isLoading: false
                }));
            }
            
            return true;
        } catch (error) {
            console.error(`Error deleting ${type} recipe:`, error);
            set({ error: error.message, isLoading: false });
            return false;
        }
    },
    
    // Clear current recipe
    clearCurrentRecipe: () => set({ currentRecipe: null }),
    
    // Clear errors
    clearError: () => set({ error: null })
}));

export default useRecipeStore;