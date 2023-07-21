export const getMissions = async () => {
  const response = await fetch('http://localhost:8000/v1/missions', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })

  if (response.status === 200) {
    return await response.json()
  }

  return false
}

export const formatMissionToLeavingArrivingBloomers = (mission: any) => ({
  firstname: mission.freelance.firstname,
  lastname: mission.freelance.lastname,
  beginMission: mission.beginDate,
  endMission: mission.endMission,
  id: mission.freelance.id,
})