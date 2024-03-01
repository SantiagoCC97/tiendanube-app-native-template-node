import mongoose, {  InferSchemaType } from "mongoose";

const tokenSchema = new mongoose.Schema({
    country:{type: mongoose.Schema.Types.Mixed},
    email: { type: mongoose.Schema.Types.Mixed}, //  
    id: { type: mongoose.Schema.Types.Mixed }, 
    name: { type: mongoose.Schema.Types.Mixed } 
}, {
    timestamps: true // Agrega campos de fecha automáticamente (createdAt, updatedAt)
});

 


//Interface user basada en el esquema
export type Itoken = InferSchemaType<typeof tokenSchema>;
//Modelo user basado en el esquema
export const token = mongoose.model("shop", tokenSchema);
token.collection.createIndex( {name:1}, {unique:true});

