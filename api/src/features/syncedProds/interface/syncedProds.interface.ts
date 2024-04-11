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
  variants: any[];
 // variants:        Variant[];
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
  parent:                   string;
  subcategories:            any[];
  google_shopping_category: string;
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

export interface ISyncedProdDb {
  shop_id: number;
  cms_id: number;
  dropi_id: string;
  img: any;
  name: string;
}


export interface ISyncedVariantDb {
  shop_id: number;
  cms_var_id: number;
  dropi_var_id: number;
  cms_prod_id: number;
  dropi_prod_id: number;
} 
 

export interface ITiendaNubeProd {
  name:              Description;
  description:       Description;
  handle:            Description;
  stock_management: boolean;
  attributes:        any;
  published:         boolean;
  free_shipping:     boolean;
  requires_shipping: boolean;
  canonical_url:     string;
  video_url:         string;
  seo_title:         Description;
  seo_description:   Description;
  brand:             string;
  created_at:        string;
  updated_at:        string;
  variants:          Variant[];
  tags:              string;
  images:            any[];
  categories:        any[];
  stock: any;
  price: any;
  promotional_price: any;
}

export interface Description {
  es: string;
}

export interface Variant {
  id:                number;
  image_id:          string;
  product_id:        number;
  position:          number;
  price:             string;
  compare_at_price:  string;
  promotional_price: string;
  stock_management:  boolean;
  stock:             string;
  weight:            string;
  width:             string;
  height:            string;
  depth:             string;
  sku:               string;
  values:            any[];
  barcode:           string;
  mpn:               string;
  age_group:         string;
  gender:            string;
  created_at:        string;
  updated_at:        string;
  cost:              string;
  inventory_levels:  string[];
}
