import { tiendanubeApiClient } from "@config";
import { ITokenResponse, ITokenCreate } from "@features/token";
import { dataToken } from "src/models/dataToken";
import { dataStore } from "src/models/dataStore";

class TokenService {

  async createToken(data: ITokenCreate) {
    try {
      const dataS = new dataToken(data)
      const savedStatus = await dataS.save();
      return { status: savedStatus }
    } catch (error) {
      throw new Error(`Error al guardar el token: ${(error as Error).message}`);
    }
  }

  async delete(tokenId: string) {
    try {
      // Utiliza el método de Mongoose para eliminar el token por su _id
      const deletedToken = await dataToken.findByIdAndDelete(tokenId);

      if (!deletedToken) {
        throw new Error("El token especificado no fue encontrado");
      }

      console.log(`Token eliminado: ${deletedToken}`);
      return deletedToken;
    } catch (error) {
      throw new Error(`Error al eliminar el token: ${(error as Error).message}`);
    }
  }
  
  async getTokens(user_id: number) {
    try {
      const tokensData = await dataToken.find({ shop_id: user_id })
      return [...tokensData]
    } catch (error) {
      throw new Error(`Error al obtener los tokens: ${(error as Error).message}`);
    }
  }


  async getTokensAndShop(user_id: number) {
    try {
      const tokensData = await dataToken.find({ shop_id: user_id })
      const dataStores = await dataStore.find({ id: user_id })

      const tokensWithDataStores = tokensData.map(token => {
        const dataStoreForToken = dataStores.find(store => store.id === token.shop_id);
        if (dataStoreForToken) {
          return {
            ...token,
            country: dataStoreForToken.country
          };
        } else {
          return token;
        }
      });
 
      return tokensWithDataStores;
    } catch (error) {
      throw new Error(`Error al obtener los tokens: ${(error as Error).message}`);
    }
  }





}

export default new TokenService();

