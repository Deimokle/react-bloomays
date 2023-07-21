import { SET_MISSIONS, SET_MISSIONS_ERROR } from '../constants';

export interface MissionReducerModel {
  data: [],
  error: boolean
}

const initialState: MissionReducerModel = {
  data: [],
  error: false,
};

const missionsReducer = (state = initialState, action: {type: string, payload: any}) => {
  switch(action.type) {
    case SET_MISSIONS:
      return {
        ...state, 
        data: action.payload,
      };
    case SET_MISSIONS_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state;
  }
}
export default missionsReducer;