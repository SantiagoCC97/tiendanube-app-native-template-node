import { tiendanubeApiClient } from "@config";
import { IProductResponse } from "@features/product";
import { syncedProd } from "src/models/syncedProduct";
import { ITiendaNubeProd } from ".";

class syncedProdsService {


  async createToTiendanube(databySync: any, user_id: number): Promise<IProductResponse> {
    // const dataProduct: IProductRequest = generateProductMock();
    // const dataProduct = databySync

    // console.log("PREPAREEEMESTA:", databySync)
    const makeAttributes: any = []

    const makeCategories: any = []
    const makeImages: any = []

    databySync.attributes.forEach((val: any) => {
      let insertable = {
        "es": val.description.toUpperCase()
      }

      makeAttributes.push(insertable)
    });

    databySync.categories.forEach((val: any) => {
      let insertable = {
        name: {
          'es': val.name.toUpperCase(),
        }
      }

      makeCategories.push(insertable)
    });

      if(databySync.usageImg){
        databySync.gallery.forEach(element => {

          // crear arreglo de imagenes
        });
      }
  



    const datatun = {
      attributes: [{ es: "Size" }],
      name: { es: databySync.name },
      images: 
      variants: [{ 
        promotional_price: "19.00",
        created_at: "2013-01-03T09:11:51-03:00",
        values: [
          {
            es: "Small"
          }
        ],        
          price: "10.00",
          stock: "12",
          stock_management: true,
          weight: "2.00",
          cost: "10.99"
      }]
    } as ITiendaNubeProd;

    console.log("datatun", datatun);



    const data: IProductResponse = await tiendanubeApiClient.post(`${user_id}/products`, datatun);
    console.log("daticaa", data)

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

