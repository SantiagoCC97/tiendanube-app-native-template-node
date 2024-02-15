import { tiendanubeApiClient } from "@config";
import { IStoreResponse } from "@features/store";

class StoreService {
  async getDataStore(user_id: number): Promise<any> {
    const data: any = await tiendanubeApiClient.get(
      `${user_id}/store`,
    );

    return {
      all: data
    };

  }
}

export default new StoreService();
