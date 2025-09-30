// - Criação do banco de dados -

import mongoose from 'mongoose';
import dotenv from 'dotenv';

// - configuração do dotenv pra receber a URI do mongo - 
dotenv.config()


// - conexão com mongo - 
const startDB = async () => {
    await mongoose.connect(process.env.DB_URI)
}


//  - exportando a conexão para o index.js dos loaders - 
export default startDB