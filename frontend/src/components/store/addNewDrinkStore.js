import { create } from 'zustand';
import axios from 'axios';

const useAddNewDrinkStore = create((set, get) => ({
    newDrinkRecipe: {
        name: "",
        ingredients: [{ name: "", amount: "", unit: "" }],
        alcoholContent: true,
        category: "Cocktail",
        glassType: "Highball",
        instructions: "",
    },

    handleUpdateRecipe: (field, value) => {
        set((state) => ({ newDrinkRecipe: { ...state.newDrinkRecipe, [field]: value } }));
    },

    handleAddIngredient: () => {
        set((state) => ({
            newDrinkRecipe: {
                ...state.newDrinkRecipe,
                ingredients: [...state.newDrinkRecipe.ingredients, { name: "", amount: "", unit: "" }],
            },
        }));
    },

    handleRemoveIngredient: (index) => {
        set((state) => ({
            newDrinkRecipe: {
                ...state.newDrinkRecipe,
                ingredients: state.newDrinkRecipe.ingredients.filter((_, i) => i !== index),
            },
        }));
    },

    handleUpdateIngredient: (index, field, value) => {
        set((state) => ({
            newDrinkRecipe: {
                ...state.newDrinkRecipe,
                ingredients: state.newDrinkRecipe.ingredients.map((ingredient, i) =>
                    i === index ? { ...ingredient, [field]: value } : ingredient
                ),
            },
        }));
    },

    handleSubmit: async (e) => {
        e.preventDefault();
        try {
            const { newDrinkRecipe } = get();
            // Use apiClient instead of direct axios
            const response = await apiClient.post("/drinks", newDrinkRecipe);
            const newRecipeId = response.data._id;
            return newRecipeId;
        } catch (error) {
            console.error('Error submitting recipe:', error);
            // You can handle auth errors here or let the apiClient handle them
            if (error.response?.status === 401) {
                alert("Your session has expired. Please login again.");
                // The redirect will be handled by the apiClient
            }
            throw error;
        }
    },



}));

export default useAddNewDrinkStore;