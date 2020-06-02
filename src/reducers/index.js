import { combineReducers} from 'redux';
import authReducer from "./authReducer";
import streamReducers from './streamReducers'
import { reducer as formReducer } from 'redux-form'

//reducers file.
export default combineReducers({
    auth: authReducer,
    streams: streamReducers,
    form: formReducer
})

