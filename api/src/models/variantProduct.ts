import mongoose, {  InferSchemaType } from "mongoose";

const variantProductSchema = new mongoose.Schema({
    shop_id:{type: mongoose.Schema.Types.Mixed},
    cms_var_id:{type: mongoose.Schema.Types.Mixed},
    dropi_var_id:{type: mongoose.Schema.Types.Mixed},
    cms_prod_id: {type: mongoose.Schema.Types.Mixed},
    dropi_prod_id: {type: mongoose.Schema.Types.Mixed}    
}, {
    timestamps: true // Agrega campos de fecha automáticamente (createdAt, updatedAt)
});


//Interface user basada en el esquema
export type IsyncedProd= InferSchemaType<typeof variantProductSchema>;
//Modelo user basado en el esquema  
export const variantProd = mongoose.model("variant_products", variantProductSchema); 

