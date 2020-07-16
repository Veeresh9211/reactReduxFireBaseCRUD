import {combineReducers} from 'redux';
import BusReducer from './busreducer';

const rootReducer = combineReducers({
    busR: BusReducer
})

export default rootReducer;