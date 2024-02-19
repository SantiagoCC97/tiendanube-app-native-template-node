import { tiendanubeApiClient } from "@config";
import { IStoreResponse } from "@features/store";

class StoreService {
  async getDataStore(user_id: number): Promise<IStoreResponse> {
    const data: any = await tiendanubeApiClient.get(
      `${user_id}/store`,
    );

    return {
      country: data.country,
      email:  data.email,
      id: data.id,
      name : data.name,
  }
} 
}

export default new StoreService();
