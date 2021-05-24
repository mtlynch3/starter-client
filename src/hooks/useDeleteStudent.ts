import { useState } from "react"

export type DeleteStudentHook = () => {
  deleteStudent: (id: number) => Promise<void>,
  loading: boolean
}

const useDeleteStudent : DeleteStudentHook = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false)

  const deleteStudent = async () : Promise<void> => {
    // TODO: Implement
    // TODO: Handle Redux updates
  }

  return {
    deleteStudent,
    loading
  }
}

export default useDeleteStudent