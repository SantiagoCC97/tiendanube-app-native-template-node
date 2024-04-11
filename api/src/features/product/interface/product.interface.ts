/**
 * To query all available attributes see https://tiendanube.github.io/api-documentation/resources/product
 */
 
export interface IProductResponse  {

  id:                number;
  name:              Description;
  description:       Description;
  handle:            Description;
  attributes:        Description[];
  published:         boolean;
  free_shipping:     boolean;
  requires_shipping: boolean;
  canonical_url:     string;
  video_url:         null;
  seo_title:         Description;
  seo_description:   Description;
  brand:             null;
  variants:          Variant[];
  tags:              string;
  images:            Image[];
  categories:        any[];
}
 

export interface Description {
  es: string;
}


export interface Image {
  id:         number;
  product_id: number;
  src:        string;
  position:   number;
  alt:        any[];
  created_at: string;
  updated_at: string;
}

export interface Variant {
  id:                number;
  image_id:          number;
  product_id:        number;
  position:          number;
  price:             string;
  compare_at_price:  string;
  promotional_price: string;
  stock_management:  boolean;
  stock:             number;
  weight:            string;
  width:             string;
  height:            string;
  depth:             string;
  sku:               number;
  values:            InventoryLevel[];
  barcode:           null;
  mpn:               null;
  age_group:         null;
  gender:            null;
  cost:              null;
  inventory_levels:  InventoryLevel[];
}

export enum InventoryLevel {
  Array = "Array",
}
