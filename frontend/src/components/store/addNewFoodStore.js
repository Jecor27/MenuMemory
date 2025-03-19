import { create } from 'zustand';
import axios from 'axios';

const useAddNewFoodStore = create((set, get) => ({
    ingredients: [{ name: "", amount: "", unit: "" }],
    newFoodRecipe: {
        name: "",
        ingredients: [{ name: "", amount: "", unit: "" }],
        instructions: "",
    },
   
   
   
    handleUpdateRecipe: (field, value) => {
        set((state) => ({ newFoodRecipe: { ...state.newFoodRecipe, [field]: value } }));
    },
    
    
    
    handleAddIngredient: () => {
        set((state) => ({
            ingredients: [...state.ingredients, { name: "", amount: "", unit: "" }],
        }));
    },


    handleRemoveIngredient: (index) => {
        set((state) => ({
            ingredients: state.ingredients.filter((_, i) => i !== index),
            newFoodRecipe: { ...state.newFoodRecipe, ingredients: state.newFoodRecipe.ingredients.filter((_, i) => i !== index) },
        }));
    },


    handleUpdateIngredient: (index, field, value) => {
        set((state) => ({
            ingredients: state.ingredients.map((ingredient, i) =>
                i === index ? { ...ingredient, [field]: value } : ingredient
            ),
            newFoodRecipe: {
                ...state.newFoodRecipe,
                ingredients: state.newFoodRecipe.ingredients.map((ingredient, i) =>
                    i === index ? { ...ingredient, [field]: value } : ingredient
                ),
            },
        }));
    },
    
    
    
    handleSubmit: async (e) => {
        e.preventDefault();
        try {
            const { newFoodRecipe, ingredients } = get();
            const recipe = { ...newFoodRecipe, ingredients };
            const response = await axios.post("http://localhost:8080/foods", recipe);
            const newRecipeId = response.data._id;
            return newRecipeId;
        } catch (error) {
            console.error('Error submitting recipe:', error);
        }
    },
}));

export default useAddNewFoodStore;