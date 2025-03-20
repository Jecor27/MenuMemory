import { create } from 'zustand';
import axios from 'axios';

const useAddNewFoodStore = create((set, get) => ({

    //initial state of the new food recipe
    newFoodRecipe: {
        name: "",
        ingredients: [{ name: "", amount: "", unit: "" }],
        instructions: "",
    },


    //updating the field in the new food recipe
    handleUpdateRecipe: (field, value) => {
        set((state) => ({ newFoodRecipe: { ...state.newFoodRecipe, [field]: value } }));
    },


    //adding a new ingredient to the new food recipe
    handleAddIngredient: () => {
        set((state) => ({
            newFoodRecipe: {
                ...state.newFoodRecipe,
                ingredients: [...state.newFoodRecipe.ingredients, { name: "", amount: "", unit: "" }],
            },
        }));
    },

    //removing an ingredient from the new food recipe
    handleRemoveIngredient: (index) => {
        set((state) => ({
            newFoodRecipe: {
                ...state.newFoodRecipe,
                ingredients: state.newFoodRecipe.ingredients.filter((_, i) => i !== index),
            },
        }));
    },

    //update a specific ingredient in the new food recipe
    handleUpdateIngredient: (index, field, value) => {
        set((state) => ({
            newFoodRecipe: {
                ...state.newFoodRecipe, //used to copy the existing properties of newFoodRecipe
                ingredients: state.newFoodRecipe.ingredients.map((ingredient, i) =>
                    i === index ? { ...ingredient, [field]: value } : ingredient
                ), //For each ingredient, the code checks if the current index (i) matches the provided index. 
                // If it does, the ingredient object is updated with the new value for the specified field. 
                // The spread operator (...ingredient) is used to copy the existing properties of the ingredient, and [field]: value updates the specific field with the new value.
            },
        }));
    },


    //submitting the new food recipe to the backend
    handleSubmit: async (e) => {
        e.preventDefault();
        try {
            const { newFoodRecipe } = get(); //get the current state of the new food recipe
            const response = await axios.post("http://localhost:8080/foods", newFoodRecipe);
            const newRecipeId = response.data._id;
            return newRecipeId;
        } catch (error) {
            console.error('Error submitting recipe:', error);
        }
    },
}));

export default useAddNewFoodStore;