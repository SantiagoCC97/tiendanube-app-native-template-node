import mongoose, {  InferSchemaType } from "mongoose";

const syncedProductSchema = new mongoose.Schema({
    shop_id:{type: mongoose.Schema.Types.Mixed},
    shop_name: { type: mongoose.Schema.Types.Mixed}, //  
    token: { type: mongoose.Schema.Types.Mixed }, 
}, {
    timestamps: true // Agrega campos de fecha automáticamente (createdAt, updatedAt)
});


//Interface user basada en el esquema
export type IsyncedProd= InferSchemaType<typeof syncedProductSchema>;
//Modelo user basado en el esquema  
export const syncedProd = mongoose.model("synced_products", syncedProductSchema);
syncedProd.collection.createIndex( {token:1}, {unique:true});

