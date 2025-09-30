import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

const startDB = async () => {
    await mongoose.connect(process.env.DB_URI)
}

export default startDB