import { create } from 'zustand';
import axios from 'axios';

const useStore = create((set) => ({
    recipes: [],
    fetchRecipes: async () => {
        try {
            const foodResponse = await axios.get("http://localhost:8080/foods");
            //console.log(foodResponse.data)
            const drinkResponse = await axios.get("http://localhost:8080/drinks");
            //console.log(drinkResponse.data)

            const recipes = [
                ...foodResponse.data.map(recipe => ({ ...recipe, type: 'food' })),
                ...drinkResponse.data.map(recipe => ({ ...recipe, type: 'drink' })),
            ];
            set({ recipes });
        } catch (err) {
            console.error(err.message);
        }
    },
    newFoodRecipe: {
        name: "",
        ingredients: [],
        instructions: "",
    },
    updateNewFoodRecipe: (field, value) => {
        set((state) => ({ newFoodRecipe: { ...state.newFoodRecipe, [field]: value } }));
    },
    addNewFoodRecipe: async () => {
        try {
            const newRecipe = {
                name: store.getState().newFoodRecipe.name,
                ingredients: store.getState().newFoodRecipe.ingredients,
                instructions: store.getState().newFoodRecipe.instructions,
            };
            const response = await axios.post("http://localhost:8080/foods", newRecipe);
            if (!response.ok) {
                throw new Error('Error creating post');
            }
            Navigate(`/foods/${response.data._id}`);
            store.getState().fetchRecipes();
        } catch (err) {
            console.error(err.message);
        }
    },
}));

export default useStore;