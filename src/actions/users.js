import types from './types'
import axios from 'axios'

const fetchUsers = () => {
    console.log('fetchUsers');
    return (dispatch) => {
        dispatch({type: types.FETCH_USERS_START});
        axios.get('http://localhost:8080/users').then((users) => {
            // console.log('users', users);
            dispatch({type: types.FETCH_USERS_SUCCESS, payload: users})
        }).catch((error) => {
            dispatch({type: types.FETCH_USERS_FAIL, payload: error})
        })
    };
}

const fetchUser = (id) => ({
    type: types.FETCH_USER,
    id
});

const updateUser = (data) => ({
    type: types.UPDATE_USER,
    data
});

const deleteUser = (id) => ({
    type: types.DELETE_USER,
    id
});
export default {fetchUsers}
