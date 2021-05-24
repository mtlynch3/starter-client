import axios from "axios";
import api from "../config/api";

const API_URL = api.URL;

export type StudentModel = {
  id: number;
  firstName: string;
  lastName: string;
  gpa: number;
  email: string;
  imageUrl: string;
};

export default class StudentService {
  static async RetrieveAllStudents(): Promise<StudentModel[]> {
    let res = await axios.get(`${API_URL}/prod/student`);
    return res.data.result as StudentModel[];
  }
}
