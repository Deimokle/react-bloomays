import { format } from "date-fns"
import React, { useEffect, useState } from "react"

export default ({color, data}: {color: string, data: Map<string, any[]>}) => {
  const [ count, setCount ] = useState(0)
  const dataKeys = Array.from(data.keys())
  useEffect(() => {
    let nb = 0;
    for (const key of dataKeys) {
      nb += data.get(key)?.length || 0
    }
    setCount(nb)
  }, [data])

  const formatedDate = (str: string) => {
    const date = new Date(str)
    return format(date, 'dd/MM/yyyy')
  }

  return (
    <div className='leavingArrivingBloomers'>
      <h2><u style={{color}}>{count}</u> Bloomers entrants</h2>
      <ul className='dates'>
        {
          dataKeys.map((missionDate: any, dateKey) => (
            <li key={`${dataKeys}-${missionDate}`}className='date'>
              <div /> <em style={{color}}>{formatedDate(missionDate)}</em>
              <ul className="freelance-name">
                {data.get(missionDate)?.map((freelance: any) => (
                  <li key={`${missionDate}-${freelance.id}`}>
                    {freelance.firstname} {freelance.lastname}
                  </li>
                ))}
              </ul>
            </li>
          ))
        }
      </ul>
    </div> 
  )
}