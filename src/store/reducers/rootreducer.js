import {combineReducers} from 'redux';
import SongReducer from './songreducer';

const rootReducer = combineReducers({
    songR: SongReducer
})

export default rootReducer;