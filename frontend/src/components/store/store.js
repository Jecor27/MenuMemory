import { create } from 'zustand';
import apiClient from '../../utils/apiClient';


const useStore = create((set) => ({


    //initial state which is an empty array to hold the recipes
    recipes: [],
    isLoading: false,
    error: null,
    fetchRecipes: async () => {
        set({ isLoading: true, error: null });
        try {
            const foodResponse = await apiClient.get("/foods");
            //console.log(foodResponse.data)
            const drinkResponse = await apiClient.get("/drinks");
            //console.log(drinkResponse.data)
            
            //combining the food and drink recipes into a single array
            const recipes = [
                ...foodResponse.data.map(recipe => ({ ...recipe, type: 'food' })),
                ...drinkResponse.data.map(recipe => ({ ...recipe, type: 'drink' })),
            ];
            //then updating the state with the combined array
            set({ recipes, isLoading: false });
        } catch (err) {
            console.error(err.message);
            set({ error: err.message, isLoading: false });
        }
    },
    deleteRecipe: async (id, type) => {
        try {
            await apiClient.delete(`/${type}s/${id}`);
            // Update the recipes state by filtering out the deleted recipe
            set(state => ({
                recipes: state.recipes.filter(recipe => 
                    !(recipe._id === id && recipe.type === type)
                )
            }));
            return true;
        } catch (error) {
            console.error('Error deleting recipe:', error);
            set({ error: error.message });
            return false;
        }
    }
    
}));

export default useStore 