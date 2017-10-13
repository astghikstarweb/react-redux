import types from '../actions/types'

const amazingComponent = (state = [], action) => {
    switch (action.type) {
        case types.FETCH_USERS_START: {
            console.log('FETCH_USERS_START');
            return {...state, fatching: true}
            break;
        }

        case types.FETCH_USERS_SUCCESS: {
            return {...state, users: action.payload.data}
            break;
        }

        case types.FETCH_USERS_FAIL: {
            return {...state, error: action.payload.users}
            break;
        }

        default:
            return state;
    }
};

export default amazingComponent;