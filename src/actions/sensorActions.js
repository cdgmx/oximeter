import axios from 'axios';

import{
    SENSOR_DATA_REQUEST,
    SENSOR_DATA_SUCCESS,
    SENSOR_DATA_FAILURE,
} from '../constants/sensorConstants';



export const getSensorData = () => async(dispatch) => {
    try{
        dispatch({
            type: SENSOR_DATA_REQUEST
        });

        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.get('/api/sensors',config)
        
        dispatch({
            type: SENSOR_DATA_SUCCESS,
            payload: data
        })
    }catch (error) {
        dispatch({
            type: SENSOR_DATA_FAILURE,
            payload: error.message
        })
    }
}