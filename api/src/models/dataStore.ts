import mongoose, {  InferSchemaType } from "mongoose";

const dataStoreSchema = new mongoose.Schema({
    country:{type: mongoose.Schema.Types.Mixed},
    email: { type: mongoose.Schema.Types.Mixed}, //  
    user_id: { type: mongoose.Schema.Types.Mixed }, 
    name: { type: mongoose.Schema.Types.Mixed } ,
    access_token: { type: mongoose.Schema.Types.Mixed},
    scope: { type: mongoose.Schema.Types.Mixed},
}, {
    timestamps: true // Agrega campos de fecha automáticamente (createdAt, updatedAt)
});

 


//Interface user basada en el esquema
export type IdataStore = InferSchemaType<typeof dataStoreSchema>;
//Modelo user basado en el esquema
export const dataStore = mongoose.model("shops", dataStoreSchema);
dataStore.collection.createIndex( {name:1}, {unique:true});
dataStore.collection.createIndex( {id:1}, {unique:true});


