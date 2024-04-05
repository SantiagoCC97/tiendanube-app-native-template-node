import { tiendanubeApiClient } from "@config";
import { IStoreResponse } from "@features/store";
import { dataStore } from "src/models/dataStore";

class StoreService {
  async getDataStore(user_id: number, access_token: string): Promise<IStoreResponse> {
 

    const data: any = await tiendanubeApiClient.get(
      `${user_id}/store`,
    );

    return {
      country: data.country,
      email: data.email,
      user_id: data.id,
      name: data.name,
      access_token: access_token,
    }
  }

  async getDataStorealt(user_id: number ): Promise<IStoreResponse> {
    const data: any = await tiendanubeApiClient.get(
      `${user_id}/store`,
    );

    return {
      country: data.country,
      email: data.email,
      user_id: data.id,
      name: data.name,
    }
  }


  async createStore(data: IStoreResponse) {
    
    try {
      const dataS = new dataStore(data)
      const savedStatus = await dataS.save();


      const store: any = await tiendanubeApiClient.get(
        `${data.user_id}/store`,
      );

      if (store) {
        // Si store contiene datos, agrega las propiedades 'country' y 'name' al objeto 'data'
        data.country = store.country;
        data.name = store.name;

        dataStore.updateOne({ name: 'John' }, { $set: { age: 30 } }, (err, updateResult) => {
          if (err) {
              console.error(err);
          } else {
              console.log('Document updated:', updateResult);
          }
      });

        
      }


      console.log("STORE", store)

      return { status: savedStatus }
    } catch (error) {
      throw new Error(`Error al guardar los datos de la tienda: ${(error as Error).message}`);
    }
  }




}

export default new StoreService();

