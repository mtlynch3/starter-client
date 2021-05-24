import axios from "axios";
import api from "../config/api";

export default class APIRequest {
  static async Get<T>(route: string): Promise<T> {
    try {
      const path = `${api.URL}/${route}`;
      const result = await axios.get(path);
      return result.data as T;
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.error?.message ||
            "Something went wrong getting from the server"
        );
      }
      throw error;
    }
  }

  static async Post<T>(
    route: string,
    data: Record<string, unknown>,
  ): Promise<T> {
    try {
      const path = `${api.URL}/${route}`;
      const result = await axios.post(path, data);
      return result.data as T;
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.error?.message ||
            "Something went wrong posting to the server"
        );
      }
      throw error;
    }
  }

  static async Patch<T>(route: string, data: Record<string, unknown>) : Promise<T> {
    try {
      const path = `${api.URL}/${route}`;
      const result = await axios.patch(path, data);
      return result.data as T;
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.error?.message ||
            "Something went wrong patching to the server"
        );
      }
      throw error;
    }
  }
}
