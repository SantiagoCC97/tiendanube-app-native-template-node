import  mongoose from 'mongoose'  
 

const dbConnection = async () => {
    try {
        let mongoConfig:any ={
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useCreateIndex: true,
            //useFindAndModify: false ,
        }
        await mongoose.connect("mongodb://localhost:27017/local", mongoConfig);
        console.log('DB Online');
    } catch (error) {
        console.log(error);
        throw new Error('Error en la base de datos');
    }
};
export {
    dbConnection
};