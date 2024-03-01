import { tiendanubeApiClient } from "@config";
import { ITokenResponse } from "@features/token";
import { dataToken } from "src/models/dataToken";

class TokenService {

  async createToken(data: any) {   // definir type
    try {
      const dataS = new dataToken(data)
      const savedStatus = await dataS.save();
      return { status: savedStatus }
    } catch (error) {
      throw new Error(`Error al guardar el token: ${(error as Error).message}`);
    }
  }

  async getTokens(user_id: number) {
    try {
      const tokensData = await dataToken.find({ shop_id: user_id })
      console.log(tokensData)
      return [ ...tokensData ]
    } catch (error) {
      throw new Error(`Error al obtener los tokens: ${(error as Error).message}`);
    }
  }
}

export default new TokenService();

