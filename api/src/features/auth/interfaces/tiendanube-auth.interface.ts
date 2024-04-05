export interface TiendanubeAuthInterface {
  access_token?: string;
  token_type?: string;
  scope?: string;
  user_id?: number;
  error?: string;
  error_description?: string;
}

export interface dataStoreInterface { 
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
 