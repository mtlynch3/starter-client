import APIRequest from "./request";

export type StudentModel = {
  id: number;
  firstName: string;
  lastName: string;
  gpa: number;
  email: string;
  imageUrl: string;
};

export type UpdatableStudentProps = {
  firstName: string;
  lastName: string;
  gpa: number;
  email: string;
  imageUrl?: string;
};

export default class StudentService {
  static async Create(data: UpdatableStudentProps): Promise<StudentModel> {
    let res = await APIRequest.Post<StudentModel>(`student`, data);
    return res;
  }

  static async Update(
    studentId: number,
    data: Partial<UpdatableStudentProps>
  ): Promise<void> {
    await APIRequest.Patch(`student/${studentId}`, data);
  }

  static async FindById(studentId: number): Promise<StudentModel | undefined> {
    const student = await APIRequest.Get<StudentModel>(`student/${studentId}`);
    return student;
  }
}
