import APIRequest from "./request";

export type CampusModel = {
  id: number;
  name: string;
  address: string;
  description: string;
  imageUrl: string;
};

export type UpdatableCampusProps = Omit<CampusModel, "id">;
export default class CampusService {
  static async Create(data: UpdatableCampusProps): Promise<CampusModel> {
    const res = await APIRequest.Post<CampusModel>("campus", {
      ...data,
      imageUrl: data.imageUrl.length ? data.imageUrl : undefined,
    });
    return res;
  }
}
