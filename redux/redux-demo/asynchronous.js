const redux = require('redux');
const axios = require('axios');
const reduxThunk = require('redux-thunk').default;

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const initialState = {
    loading: false,
    users:[],
    error:""
}

const fetchUserRequest = ()=> {
    console.log("fetchUserRequest");
    return {
        type: "Request"
    }
}

const fetchUserSuccess = (users)=> {
    console.log("fetchUserSuccess");
    return {
        type: "Success",
        payload:users
    }
}

const fetchUserFailure = (error)=> {
    console.log("fetchUserFailure");
    return {
        type: "Failure",
        payload:error
    }
}


const reducer  = (state = initialState, action) => {
    console.log("reducer");
    switch(action.type) {
        case "Request" : {
            return {
                ...state,
                loading: true,
            }
        }
        case "Success" : {
            return {
                loading: false,
                users: action.payload,
                error: ""
            }
        }
        case "Failure" : {
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        }
    }
}

const fetchUsers = () => {
    console.log("fetchUsers");
    return function (dispatch) {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then ((response)=> {
            const users = response.data.map((user)=>user.username);
            dispatch(fetchUserSuccess(users));
        })
        .catch((error)=> {
            dispatch(fetchUserFailure(error.message))
        })
    }
}


const store = createStore(reducer, applyMiddleware(reduxThunk));

store.subscribe(()=> {console.log(store.getState())});
store.dispatch(fetchUsers());

