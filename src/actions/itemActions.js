import database from '../database/AppFirebase';

export function startFetchingItems() {
    return {
        type: 'START_FETCHING_ITEMS'
    }
}

export const fetchItems = (orderDate) => {
    return function (dispatch) {
        dispatch(startFetchingItems());
        const itemsRef = database.ref(orderDate).orderByKey().limitToLast(100);
        itemsRef.once('value', snapshot => {
            if (snapshot.val()) {
                dispatch(receivedItems(snapshot.val()));
            } else {
                dispatch(receivedItems(null));
            }
        })
    }
}

export function receivedItems(items) {
    return {
        type: 'RECEIVED_ITEMS',
        payload: items
    }
}

export function addItem(item, orderDate) {
    const pushRef = database.ref(orderDate).push(item);
    const key = pushRef.key;
    return {
        type: 'ADD_ITEM',
        payload: { key, item }
    }
}

export function deleteItem(key, orderDate) {
    database.ref(orderDate).child(key).remove();
    return {
        type: 'DELETE_ITEM',
        payload: key
    }
}

export function updateItem(item, key, orderDate) {
    database.ref(orderDate).child(key).update(item);
    return {
        type: 'UPDATE_ITEM',
        payload: { item, key }
    }
}

export function setEditItem(key, details) {
    return {
        type: 'SET_EDIT_ITEM_DETAILS',
        payload: { key, details }
    }
}