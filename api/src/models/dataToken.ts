import mongoose, {  InferSchemaType } from "mongoose";

const dataTokenSchema = new mongoose.Schema({
    shop_id:{type: mongoose.Schema.Types.Mixed},
    shop_name: { type: mongoose.Schema.Types.Mixed}, //  
    token: { type: mongoose.Schema.Types.Mixed }, 
}, {
    timestamps: true // Agrega campos de fecha automáticamente (createdAt, updatedAt)
});


//Interface user basada en el esquema
export type IdataToken = InferSchemaType<typeof dataTokenSchema>;
//Modelo user basado en el esquema  
export const dataToken = mongoose.model("tokens", dataTokenSchema);
dataToken.collection.createIndex( {token:1}, {unique:true});

