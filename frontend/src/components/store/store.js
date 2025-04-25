import { create } from 'zustand';
import axios from 'axios';

const useStore = create((set) => ({

    //initial state which is an empty array to hold the recipes
    recipes: [],
    fetchRecipes: async () => {
        try {
            const foodResponse = await axios.get("http://localhost:8080/api/foods");
            //console.log(foodResponse.data)
            const drinkResponse = await axios.get("http://localhost:8080/api/drinks");
            //console.log(drinkResponse.data)
            
            //combining the food and drink recipes into a single array
            const recipes = [
                ...foodResponse.data.map(recipe => ({ ...recipe, type: 'food' })),
                ...drinkResponse.data.map(recipe => ({ ...recipe, type: 'drink' })),
            ];
            //then updating the state with the combined array
            set({ recipes });
        } catch (err) {
            console.error(err.message);
        }
    },

    // newFoodRecipe: {
    //     name: "",
    //     ingredients: [],
    //     instructions: "",
    // },
    // updateNewFoodRecipe: (field, value) => {
    //     set((state) => ({ newFoodRecipe: { ...state.newFoodRecipe, [field]: value } }));
    // },
    // addRecipe: async (recipe) => {
    //     try {
    //         const response = await axios.post("http://localhost:8080/foods", recipe);
    //         if (response.status === 201) {
    //             const newRecipeId = response.data._id;
    //             set((state) => ({ recipes: [...state.recipes, response.data] }));
    //             return newRecipeId;
    //         } else {
    //             throw new Error(`Error creating recipe: ${response.status}`);
    //         }
    //     } catch (err) {
    //         console.error(err.message);
    //     }
    // },
}));

export default useStore 