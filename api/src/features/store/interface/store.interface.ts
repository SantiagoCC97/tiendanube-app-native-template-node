/**
 * To query all available attributes see https://tiendanube.github.io/api-documentation/resources/product
 */
 
 
export interface IStoreResponse  {

   id:                    number;
  name:                  Description;
  description:           Description;
  type:                  null;
  email:                 string;
  logo:                  null;
  contact_email:         null;
  country:               string;
  facebook:              null;
  twitter:               string;
  instagram:             string;
  pinterest:             null;
  blog:                  null;
  business_id:           null;
  business_name:         null;
  business_address:      null;
  address:               null;
  phone:                 null;
  whatsapp_phone_number: null;
  customer_accounts:     string;
  plan_name:             string;
  domains:               any[];
  languages:             Languages;
  original_domain:       string;
  url_with_protocol:     string;
  main_currency:         string;
  current_theme:         string;
  main_language:         string;
  admin_language:        string;
  created_at:            string;
  updated_at:            string;
}



export interface Description {
  es: null | string;
}

export interface Languages {
  es: En;
  pt: En;
  en: En;
}

export interface En {
  currency: string;
  active:   boolean;
}
