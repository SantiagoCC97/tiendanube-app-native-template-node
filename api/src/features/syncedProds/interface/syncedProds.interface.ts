/**
 * To query all available attributes see https://tiendanube.github.io/api-documentation/resources/product
 */
  
 

export interface ISyncedprod {
  attributes:      Attribute[];
  categories:      Category[];
  created_at:      string;
  description:     Description;
  handle:          Description;
  id:              number;
  images:          Image[];
  name:            Description;
  brand:           null;
  video_url:       string;
  seo_title:       string;
  seo_description: string;
  published:       boolean;
  free_shipping:   boolean;
  updated_at:      string;
  variants:        Variant[];
}

export interface Attribute {
  es: string;
}

export interface Category {
  created_at:               string;
  description:              Description;
  handle:                   Description;
  id:                       number;
  name:                     Description;
  parent:                   null;
  subcategories:            any[];
  google_shopping_category: null;
  updated_at:               string;
}

export interface Description {
  en: string;
  es: string;
  pt: string;
}

export interface Image {
  id:         number;
  src:        string;
  position:   number;
  product_id: number;
}

export interface Variant {
  id:                number;
  promotional_price: string;
  created_at:        string;
  depth:             null;
  height:            null;
  values:            Attribute[];
  price:             string;
  product_id:        number;
  stock_management:  boolean;
  stock:             number;
  sku:               string;
  updated_at:        string;
  weight:            string;
  width:             null;
  cost:              null | string;
}


