import { getMissions } from '../../services/missions';
import { SET_MISSIONS, SET_MISSIONS_ERROR } from '../constants';

export const setMissions = async () => {
  const missions = await getMissions()
  if (missions) {
    
    return {
      type: SET_MISSIONS,
      payload: missions
    }
  }
  return {
    type: SET_MISSIONS_ERROR,
    payload: true,
  }
}