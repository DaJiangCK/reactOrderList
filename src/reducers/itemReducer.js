import { omit } from 'lodash';

export default function reducer(state = {
    items: {},
    editItemDetails: {},
    editItemKey: '',
    isFetching: false
},
    action) {
    switch (action.type) {
        case 'START_FETCHING_ITEMS':
            return {
                ...state,
                isFetching: true
            }
        case 'RECEIVED_ITEMS':
            return {
                ...state,
                isFetching: false,
                items: action.payload
            }
        case 'ADD_ITEM':
            return {
                ...state,
                items: { ...state.items, [action.payload.key]: action.payload.item }
            }
        case 'DELETE_ITEM':
            return {
                ...state,
                items: omit(state.items, action.payload)
            }
        case 'UPDATE_ITEM':
            return {
                ...state,
                items: { ...state.items, [action.payload.key]: action.payload.item }
            }
        case 'SET_EDIT_ITEM_DETAILS':
            return {
                ...state,
                editItemDetails: action.payload.details,
                editItemKey: action.payload.key
            }
        default:
            return state;
    }
};