import { tiendanubeApiClient } from "@config";
import { IProductResponse } from "@features/product";
import { syncedProd } from "src/models/syncedProduct";
import { variantProd } from "src/models/variantProduct";

import { ISyncedProdDb, ISyncedVariantDb, ITiendaNubeProd } from ".";


class syncedProdsService {


  async createToTiendanube(databySync: any, user_id: number): Promise<IProductResponse> {
     

    const makeAttributes: any = []
    const makeImages: any = []
    const makeVariants: any = []




    if (databySync.usageImg) { // IDENTIFICAMOS SI EL USUARIO ELIGIÓ USAR LAS IMAGENES PROVENIENTES DE DROPI.
      databySync.gallery.forEach((element: any) => {
        // crear arreglo de imagenes... NOTA: Dado que hay imagenes cuyo src contiene espacios, para no generar error se remplazan por %20 y así la API logra hacer el upload de la imagen correctamente
        let insertable = {
          src: `https://d39ru7awumhhs2.cloudfront.net/${element.urlS3.replace(/ /g, '%20')}`
        }
        makeImages.push(insertable)
      });
    }

    if (databySync.type == 'VARIABLE') { // SI EL PRODUCTO TIENE VARIANTES.

      databySync.attributes.forEach((val: any) => { // RECOLECTAMOS LOS ATRIBUTOS DE ESAS VARIANTES,  NOTA: EL NUMERO DE ATTRIBUTES DEBE SER = A LA CANTIDAD DE VALUE DE ATTRIBUTES EN LAS VARIANTS, DE LO CONTRARIO NO SUBIRÁ NI ATRIBUTOS NI VARIANTES.
        let insertable = {
          "es": val.description.toUpperCase()
        }

        makeAttributes.push(insertable);
      });

      databySync.variations.forEach((val: any) => {
        let arrayTemp: any = []   // creo un array temporal, que utilizaré para insertar los datos necesarios para la creación de los atributos de la variant

        val.attribute_values.forEach((att: any) => {
          let attInsertable = {
            es: `${att.attribute_name} ${att.value}`
          }
          arrayTemp.push(attInsertable)
        })

        let insertable = {
          price: val.suggested_price,
          promotional_price: val.sale_price,
          stock: parseInt(val.stock),
          values: arrayTemp,
          sku: val.id
        }

        makeVariants.push(insertable);
      })
    }



    const dataforapi = {
      images: makeImages,
      attributes: makeAttributes,
      name: { es: databySync.name },
      variants: makeVariants,
      stock_management: true,
      stock: 1,
      price: 10,
      promotional_price: 9,
      description: {
        es: databySync.description
      }


    } as ITiendaNubeProd;





    try {
      const data: IProductResponse = await tiendanubeApiClient.post(`${user_id}/products`, dataforapi);
      if (data && data.id) { //si la creación en TiendaNube fue efectiva.
        const saveProdOnDb = {
          shop_id: user_id,
          cms_id: data.id,
          dropi_id: databySync.id
        } as ISyncedProdDb

        const dataS = new syncedProd(saveProdOnDb)
        const savedStatus = await dataS.save();

        if (databySync.type == 'VARIABLE') { //si el producto es variable lo guardo en base de datos 
          data.variants.forEach(async (element) => {  //recorro las variantes creadas a traves del API, y las subo a BD del CMS
            const saveVariantOnDb = {
              shop_id: user_id,
              cms_prod_id: element.product_id,
              cms_var_id: element.id,
              dropi_var_id: element.sku,
              dropi_prod_id: databySync.id
            } as ISyncedVariantDb

            const variant = new variantProd(saveVariantOnDb);
            try {
              const savedVariant = await variant.save();
              console.log("Variante guardada:", savedVariant);
            } catch (error) {
              console.error("Error al guardar la variante:", error);
            }
          });
        }
        console.log("savedStatus", savedStatus._id)
      }
    } catch (error) {
      console.error("Error al llamar al servicio:", error);
    }

    return {
      id: 1,
    } as IProductResponse;

  }

  async create(data: any) {
    try {
      return console.log(" JSON", data)
    } catch (error) {
      throw new Error(`Error al guardar el token: ${(error as Error).message}`);
    }
  }

  async findAll(user_id: number): Promise<IProductResponse[]> {
    return (await tiendanubeApiClient.get(
      `${user_id}/products`
    )) as IProductResponse[];
  }

}

export default new syncedProdsService();

