import { FETCH_WEATHER } from '../actions/index';
export default function(state=[],action){
	switch(action.type){
		case FETCH_WEATHER:
			console.log("Action: " , action.payload.data);
			return [...state, action.payload.data];
			break;
		default:
			return state;
			break;
	}
}
