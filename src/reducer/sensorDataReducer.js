import { 
    SENSOR_DATA_REQUEST,
    SENSOR_DATA_SUCCESS,
    SENSOR_DATA_FAILURE,
} from '../constants/sensorConstants';

export const getSensorData = (state = { loading: false, data: [] }, action) => {
    switch (action.type) {
        case SENSOR_DATA_REQUEST:
            return {
                ...state,
                loading: true
            };
        case SENSOR_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case SENSOR_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}