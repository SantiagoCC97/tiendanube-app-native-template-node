 
import { tiendanubeApiClient } from "@config";
import { IProductResponse } from "@features/product";

class ProductService {
  

  

  async findAll(user_id: number): Promise<IProductResponse[]> {
    return this.findAllFromApi(user_id);
  }

  async findAllCount(user_id: number): Promise<{ total: number }> {
    return {
      total: (await this.findAllFromApi(user_id)).length,
    };
  }

  private async findAllFromApi(user_id: number): Promise<IProductResponse[]> {
    return (await tiendanubeApiClient.get(
      `${user_id}/products`
    )) as IProductResponse[];
  }
}

export default new ProductService();
