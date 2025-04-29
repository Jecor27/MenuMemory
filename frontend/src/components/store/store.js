import { create } from 'zustand';
import axios from 'axios';
import {useAuthContext} from '../hooks/useAuthContext';

const useStore = create((set) => ({

    user: useAuthContext(),
    //initial state for the user

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
    }
}));

export default useStore 