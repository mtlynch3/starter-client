import React, { useMemo } from 'react'
import { StudentModel } from '../../api/student'
import StudentItem from '../student_item'

export type StudentListProps = {
  students: StudentModel[]
}

const StudentList : React.FC<StudentListProps> = ({students}) => {
  console.log(students)
  const studentListView = useMemo(() => {
    return students.map(student => <StudentItem key={student.id} {...student} />)
  }, [students])

  return (
    <div>
      {studentListView}
    </div>
  )
}

export default StudentList