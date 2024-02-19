/**
 * To query all available attributes see https://tiendanube.github.io/api-documentation/resources/product
 */
 
 
export interface IStoreResponse  {
  id:                    number;
  name:                  Description; 
  email:                 string; 
  country:               string; 
}



export interface Description {
  es: null | string;
}
 
