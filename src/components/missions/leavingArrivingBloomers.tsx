import React, { useEffect, useState } from 'react'
import './leavingArrivingBloomers.css'
import { formatMissionToLeavingArrivingBloomers } from '../../services/missions';
import BloomersDateContent from './bloomersDateContent';
import { format } from 'date-fns';

type MissionLeavingArrivalModel = {id: number, firstname: string, lastname: string}
const LeavingArrivingBloomers = (props: any) => {
  let { color } = props;
  const { missions } = props;
  const [ leaving, setLeaving ] = useState<Map<string, MissionLeavingArrivalModel[]>>(new Map())
  const [ arriving, setArriving ] = useState<Map<string, MissionLeavingArrivalModel[]>>(new Map())
  const [ now, setNow ] = useState<Date>(new Date())

  useEffect(() => {
    const arrive = new Map()
    const leave = new Map()
    now.setUTCHours(0,0,0,0)
    for (const mission of missions) {
      if (new Date(mission.beginDate) >= now) {
        if (!arrive.get(mission.beginDate)) {
          arrive.set(mission.beginDate, [])
        }
        if (!leave.get(mission.endDate)) {
          leave.set(mission.endDate, [])
        }
        const arrivingDateFreelance = arrive.get(mission.beginDate)
        const leavingDateFreelance = leave.get(mission.endDate)

        arrivingDateFreelance?.push(formatMissionToLeavingArrivingBloomers(mission))
        leavingDateFreelance?.push(formatMissionToLeavingArrivingBloomers(mission))
      }
    }
    setArriving(arrive)
    setLeaving(leave)
    
  }, [])
  color = color || 'green'
  return (
    <div className='leavingArrivingBloomers'>
      <BloomersDateContent color='green' data={arriving} />
      <BloomersDateContent color='red' data={leaving}/>
    </div> 
  )
}

export default LeavingArrivingBloomers