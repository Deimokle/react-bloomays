import React, { useEffect, useState } from 'react'
import './leavingArrivingBloomers.css'
import { formatMissionToLeavingArrivingBloomers } from '../../services/missions';
import BloomersDateContent from './bloomersDateContent';
import { addMonths, endOfMonth, format } from 'date-fns';

type MissionLeavingArrivalModel = {id: number, firstname: string, lastname: string}
const LeavingArrivingBloomers = (props: any) => {
  let { color } = props;
  const { missions } = props;
  const [ leaving, setLeaving ] = useState<Map<string, MissionLeavingArrivalModel[]>>(new Map())
  const [ arriving, setArriving ] = useState<Map<string, MissionLeavingArrivalModel[]>>(new Map())
  const [ currentDay ] = useState<string>(format(new Date(), 'yyyy/MM/dd'))
  const [ nextMonth ] = useState<string>(format(endOfMonth(addMonths(new Date(), 1)), 'yyyy/MM/dd'))

  useEffect(() => {
    const arrive = new Map()
    const leave = new Map()
    const currentDayDate = new Date(currentDay);
    const nextMonthDate = new Date(nextMonth);
    for (const mission of missions) {
      const missionBeginDate = new Date(mission.beginDate)
      if (currentDayDate <= missionBeginDate && missionBeginDate <= nextMonthDate ) {
        if (!arrive.get(mission.beginDate)) {
          arrive.set(mission.beginDate, [])
        }
        const arrivingDateFreelance = arrive.get(mission.beginDate)
        arrivingDateFreelance?.push(formatMissionToLeavingArrivingBloomers(mission))
      }

      const missionEndDate = new Date(mission.endDate)
      if (currentDayDate <= missionEndDate && missionEndDate <= nextMonthDate ) {
        if (!leave.get(mission.endDate)) {
          leave.set(mission.endDate, [])
        }
        const leavingDateFreelance = leave.get(mission.endDate)
        leavingDateFreelance?.push(formatMissionToLeavingArrivingBloomers(mission))
      }
    }
    setArriving(arrive)
    setLeaving(leave)
    
  }, [missions])
  color = color || 'green'
  return (
    <div className='leavingArrivingBloomers'>
      <BloomersDateContent title='Bloomers entrants' color='green' data={arriving} />
      <BloomersDateContent title='Bloomers sortants' color='red' data={leaving}/>
    </div> 
  )
}

export default LeavingArrivingBloomers