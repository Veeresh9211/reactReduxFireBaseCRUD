import {combineReducers} from 'redux';
import BusReducer from './busreducer';
import NotificationReducer from './notificationReducer';

const rootReducer = combineReducers({
    busR: BusReducer,
    notificationR: NotificationReducer
})

export default rootReducer;