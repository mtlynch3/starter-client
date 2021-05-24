import APIRequest from "./request";

export type CampusModel = {
  id: number;
  name: string;
  address: string;
  description: string;
  imageUrl: string;
};

export default class CampusService {
  static async RetrieveAllCampuses(): Promise<CampusModel[]> {
    const res = await APIRequest.Get<{
      results: CampusModel[];
    }>("campus");
    return res.results;
  }
}
