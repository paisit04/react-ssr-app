import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
// import { fetchCircuits } from "./api";

export const initializeSession = ( ) => ( {
    type: "INITIALIZE_SESSION",
} );

const storeData = ( data ) => ( {
    type: "STORE_DATA",
    data,
} );

export const loadHome = () => ( {
    type: "LOAD_HOME",
});

// export const fetchData = ( ) => ( dispatch ) =>
//     fetchCircuits( ).then( res => dispatch( storeData( res ) ) );

const initialPageState = {
    title: "DEFAULT"
};

const sessionReducer = ( state = null, action ) => {
    switch ( action.type ) {
        case "INITIALIZE_SESSION":
            return true;
        default: return state;
    }
};

const pageReducer = ( state = initialPageState, action ) => {
    switch ( action.type ) {
        case "LOAD_HOME":
            return {...state, title: "HOME"};
        default: return state;
    }
};

const dataReducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_DATA":
            return action.data;
        default: return state;
    }
};

const reducer = combineReducers( {
    loggedIn: sessionReducer,
    data: dataReducer,
    page: pageReducer,
} );

export default ( initialState ) =>
    createStore( reducer, initialState, applyMiddleware( thunkMiddleware ) );