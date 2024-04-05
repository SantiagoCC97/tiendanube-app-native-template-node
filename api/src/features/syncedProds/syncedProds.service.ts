import { tiendanubeApiClient } from "@config";
import { IProductResponse } from "@features/product";
import { syncedProd } from "src/models/syncedProduct";
import { ITiendaNubeProd } from ".";


class syncedProdsService {


  async createToTiendanube(databySync: any, user_id: number): Promise<IProductResponse> {
    // const dataProduct: IProductRequest = generateProductMock();
    // const dataProduct = databySync

   // console.log("PREPAREEEMESTA:", databySync)

    databySync.attributes.forEach(val => {
          console.log("element", val)
      });


    const datatun  = {
      name: {
        es: databySync.name
      },
      attributes:{

      },

      variants: {

      }

    } as ITiendaNubeProd;



    const data: IProductResponse = await tiendanubeApiClient.post(`${user_id}/products`, datatun);
   // console.log("daticaa", data)

    return {
      id: "1",
    } as IProductResponse;

  }

  async create(data: any) {
    try {
      return console.log(" JSON", data)
    } catch (error) {
      throw new Error(`Error al guardar el token: ${(error as Error).message}`);
    }
  }

  async findAll(user_id: number): Promise<IProductResponse[]> {
    return (await tiendanubeApiClient.get(
      `${user_id}/products`
    )) as IProductResponse[];
  }

}

export default new syncedProdsService();

