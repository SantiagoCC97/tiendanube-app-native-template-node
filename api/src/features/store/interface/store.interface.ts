/**
 * To query all available attributes see https://tiendanube.github.io/api-documentation/resources/product
 */
 
 
export interface IStoreResponse  {
  user_id?:               number;
  name?:                  Description; 
  email?:                 string; 
  country?:               string; 
  access_token?:          string;
  scope?:                 string;
}



export interface Description {
  es: null | string;
}
 
