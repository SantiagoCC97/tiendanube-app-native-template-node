import mongoose, {  InferSchemaType } from "mongoose";

const settingsSchema = new mongoose.Schema({
    shop_name:{type: mongoose.Schema.Types.Mixed},
    shop_id:{type: mongoose.Schema.Types.Mixed},
    autosync_orders:{type: mongoose.Schema.Types.Mixed},
    ifProdExist:{type: mongoose.Schema.Types.Mixed},
    cleanNoteOrder: {type: mongoose.Schema.Types.Mixed},
    country: {type: mongoose.Schema.Types.Mixed},
    use_dropi_checkout: { type: mongoose.Schema.Types.Mixed},  
}, {
    timestamps: true // Agrega campos de fecha automáticamente (createdAt, updatedAt)
});

 


//Interface user basada en el esquema
export type Isetting = InferSchemaType<typeof settingsSchema>;
//Modelo user basado en el esquema
export const setting = mongoose.model("settings", settingsSchema);
setting.collection.createIndex( {shop_id:1}, {unique:true});

