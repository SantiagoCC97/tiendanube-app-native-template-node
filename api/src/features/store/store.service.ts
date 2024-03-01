import { tiendanubeApiClient } from "@config";
import { IStoreResponse } from "@features/store";
import { dataStore } from "src/models/dataStore";

class StoreService {
  async getDataStore(user_id: number): Promise<IStoreResponse> {
    const data: any = await tiendanubeApiClient.get(
      `${user_id}/store`,
    );

    return {
      country: data.country,
      email: data.email,
      id: data.id,
      name: data.name,
    }
  }


  async createStore(data:IStoreResponse) {
    try {
      const dataS = new dataStore(data)
      const savedStatus = await dataS.save();
      return { status: savedStatus }
    } catch (error) {
      throw new Error(`Error al guardar los datos de la tienda: ${(error as Error).message}`);
    }
  }




}

export default new StoreService();

