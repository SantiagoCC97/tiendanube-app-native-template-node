import { tiendanubeApiClient } from "@config";
import { ISettingsResponse, ISettingsCreate } from "@features/settings";
import { setting } from "src/models/settings";

class SettingsService {

  async createSettings(data: ISettingsCreate) {
    try {
      const settingsData = await setting.deleteMany({ shop_id: data.shop_id }) 
 
      const dataSetting = new setting(data)
      const savedStatus = await dataSetting.save();
      return { status: savedStatus }
    } catch (error) {
      throw new Error(`Error al guardar los settings: ${(error as Error).message}`);
    }
  }

  async delete(tokenId: string) {
    try {
      // Utiliza el método de Mongoose para eliminar el token por su _id
      const deletedToken = await setting.findByIdAndDelete(tokenId);

      if (!deletedToken) {
        throw new Error("El token especificado no fue encontrado");
      }

      console.log(`Token eliminado: ${deletedToken}`);
      return deletedToken;
    } catch (error) {
      throw new Error(`Error al eliminar el token: ${(error as Error).message}`);
    }
  }




  async getSettings(user_id: number) {
    try { 
      const tokensData = await setting.find({ shop_id: user_id })
      return [...tokensData]
    } catch (error) {
      throw new Error(`Error al obtener los tokens: ${(error as Error).message}`);
    }
  }
}

export default new SettingsService();

