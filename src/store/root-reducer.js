import {combineReducers} from 'redux';
import galleries from '../components/home/galleries/redux/reducer';

const rootReducer = combineReducers({
    galleries,
});

export default rootReducer;
