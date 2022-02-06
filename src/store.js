import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { getSensorData } from './actions/sensorActions';

const reducer = combineReducers({
    sensorData: getSensorData
})

const middleware = [thunk];

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;