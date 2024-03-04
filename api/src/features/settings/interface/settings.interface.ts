/**
 * To query all available attributes see https://tiendanube.github.io/api-documentation/resources/product
 */


export interface ISettingsResponse {
  shop_id: number; 
  autosync_orders: string;
  ifProdExist: string;
  cleanNoteOrder: string;
  use_dropi_checkout: string;
  country: string;
  created_at: string;
  updated_at: string;
}

export interface ISettingsCreate {
  shop_id: number; 
  country: string;
  autosync_orders: string;
  ifProdExist: string;
  cleanNoteOrder: string;
  use_dropi_checkout: string;
}

