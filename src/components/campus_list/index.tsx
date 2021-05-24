import React, { useMemo } from 'react'
import { CampusModel } from '../../api/campus'
import CampusItem from '../campus_item'

export type CampusListProps = {
  campuses: CampusModel[]
}

const CampusList : React.FC<CampusListProps> = ({campuses}) => {
  console.log(campuses)
  const campusListView = useMemo(() => {
    return campuses.map(campus => <CampusItem key={campus.id} {...campus} />)
  }, [campuses])

  return (
    <div>
      {campusListView}
    </div>
  )
}

export default CampusList