import { tiendanubeApiClient } from "@config";
import { IProductResponse } from "@features/product";
import { syncedProd } from "src/models/syncedProduct";

class syncedProdsService {

  async createToken() {
    try {
      // const dataS = new dataToken(data)
      //  const savedStatus = await dataS.save();
      return console.log(" JSON")
    } catch (error) {
      throw new Error(`Error al guardar el token: ${(error as Error).message}`);
    }
  }

  async findAll(user_id: number): Promise<IProductResponse[]> {
    return (await tiendanubeApiClient.get(
      `${user_id}/products`
    )) as IProductResponse[];
  }

  // async delete(tokenId: string) {
  //   try {
  //     // Utiliza el método de Mongoose para eliminar el token por su _id
  //     const deletedToken = await dataToken.findByIdAndDelete(tokenId);

  //     if (!deletedToken) {
  //       throw new Error("El token especificado no fue encontrado");
  //     }

  //     console.log(`Token eliminado: ${deletedToken}`);
  //     return deletedToken;
  //   } catch (error) {
  //     throw new Error(`Error al eliminar el token: ${(error as Error).message}`);
  //   }
  // }




  // async getTokens(user_id: number) {
  //   try {
  //     const tokensData = await dataToken.find({ shop_id: user_id })
  //     console.log(tokensData)
  //     return [...tokensData]
  //   } catch (error) {
  //     throw new Error(`Error al obtener los tokens: ${(error as Error).message}`);
  //   }
  // }
}

export default new syncedProdsService();

