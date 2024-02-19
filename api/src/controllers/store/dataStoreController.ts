import { dataStore } from "../../models/dataStore";


class dataStoreController {
    static async createStore(req: any, res: any){
        try {
       const data = req.body;
            const dataS = new dataStore(data)
            const savedStatus = await dataS.save();
            res.status(201).json({ status: savedStatus});
        } catch (error) {
            console.error('Error al guardar los datos de la tienda:', error);
            res.status(500).json({ error: 'Error al guardar los datos de la tienda' });
        }
    }    
}

export default dataStoreController;