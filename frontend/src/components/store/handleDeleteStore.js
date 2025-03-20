// import { create } from 'zustand';
// import axios from 'axios';

// const useHandleDeleteStore = create((set) => ({

//     getFoodRecipe: async () => {
//         try{
//             const response = await axios.get(`http://localhost:8080/foods`);
//             set({foodRecipe: response.data});
//         }catch (err){
//             console.error(err.message);
//         }   
//     },

//     getDrinkRecipe: async () => {
//         try{
//             const response = await axios.get(`http://localhost:8080/drinks`);
//             set({drinkRecipe: response.data});
//         }catch (err){
//             console.error(err.message);
//         }   
//     },

//     handleDelete: async (id, type) => {
//         try {
//             const response = await axios.delete(`http://localhost:8080/${type}/${id}`);
//             const recipeId = response.data._id;
//             return recipeId;
//         } catch (error) {
//             console.error('Error deleting recipe:', error);
//         }
//     },




// }))

// export default useHandleDeleteStore