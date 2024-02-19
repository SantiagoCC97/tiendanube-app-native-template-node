import mongoose, {  InferSchemaType } from "mongoose";

const dataStoreSchema = new mongoose.Schema({
    country:{type: mongoose.Schema.Types.Mixed},
    email: { type: mongoose.Schema.Types.Mixed}, //  
    id: { type: mongoose.Schema.Types.Mixed }, 
    name: { type: mongoose.Schema.Types.Mixed } 
}, {
    timestamps: true // Agrega campos de fecha automáticamente (createdAt, updatedAt)
});

 


//Interface user basada en el esquema
export type IdataStore = InferSchemaType<typeof dataStoreSchema>;
//Modelo user basado en el esquema
export const dataStore = mongoose.model("settings", dataStoreSchema);
