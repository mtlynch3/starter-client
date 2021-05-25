import { useState } from "react"
import APIRequest from "../api/request"

export type UnenrollStudentHook = () => {
  loading: boolean,
  unenroll: (studentId: number) => Promise<void>
}

const useUnenrollStudent : UnenrollStudentHook = () => {
  const [loading, setLoading] = useState(false)

  const unenroll = async (studentId: number) => {
    try{
      setLoading(true)
      await APIRequest.Post(`student/${studentId}/unenroll`, {})
    }finally{
      setLoading(false)
    }
  }

  return {
    loading,
    unenroll
  }
}

export default useUnenrollStudent