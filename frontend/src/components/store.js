import { create } from 'zustand';
import axios from 'axios';

const useStore = create((set) => ({
    recipes: [],
    fetchRecipes: async () => {
        try {
            const foodResponse = await axios.get("http://localhost:8080/foods");
            console.log(foodResponse.data)
            const drinkResponse = await axios.get("http://localhost:8080/drinks");
            console.log(drinkResponse.data)

            const recipes = [
                ...foodResponse.data.map(recipe => ({ ...recipe, type: 'food' })),
                ...drinkResponse.data.map(recipe => ({ ...recipe, type: 'drink' })),
            ];
            set({ recipes });
        } catch (err) {
            console.error(err.message);
        }
    },
}));

export default useStore;