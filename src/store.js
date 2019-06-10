import { createStore } from 'redux' 

const initialState = {
    name: '',
    category: '',
    authorFirst: '',
    authorLast: '',
    ingredients: [],
    instructions: [],
    recipes: []
}

export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const UPDATE_AUTHOR_FIRST = 'UPDATE_AUTHOR_FIRST'
export const UPDATE_AUTHOR_LAST = 'UPDATE_AUTHOR_LAST'
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS'
export const ADD_INSTRUCTIONS = 'ADD_INSTRUCTIONS'
export const ADD_RECIPE = 'ADD_RECIPE'
export const CLEAR_INPUTS = 'CLEAR_INPUTS'
export const DELETE_RECIPE = 'DELETE_RECIPE'

function reducer(state = initialState, action) {
    const { type, payload } = action 
        switch (type) {
            case UPDATE_NAME: 
                return {
                    ...state,
                    name: payload
                }
            
            case UPDATE_CATEGORY: 
                return {
                    ...state, 
                    category: payload
                }

            case UPDATE_AUTHOR_FIRST: 
                return {
                    ...state, 
                    authorFirst: payload
                }

            case UPDATE_AUTHOR_LAST: 
                return {
                    ...state, 
                    authorLast: payload
                }

            case ADD_INGREDIENTS: 
                return {
                    ...state, 
                    ingredients: [...state.ingredients, payload]
                }

            case ADD_INSTRUCTIONS: 
                return {
                    ...state, 
                    instructions: [...state.instructions, payload]
                }

            case ADD_RECIPE:
                let recipe = {
                    name: state.name,
                    category: state.category,
                    authorFirst: state.authorFirst,
                    authorLast: state.authorLast,
                    ingredients: state.ingredients,
                    instructions: state.instructions
                } 

                return {
                    ...state, 
                    recipes: [...state.recipes, recipe]
                    
                }
                

            case CLEAR_INPUTS: 
                return {
                    ...state, 
                    name: '',
                    category: '',
                    authorFirst: '',
                    authorLast: '',
                    ingredients: [],
                    instructions: []
                }

            case DELETE_RECIPE:            
                state.recipes.splice(payload, 1)
                return {
                    ...state
                }

            default: 
                return state
        }
}

export default createStore(reducer)
