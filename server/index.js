import express from 'express'; 
import dotenv from 'dotenv';
import sequelize from './db.js';
dotenv.config();


const PORT = 3000
const app = express()

const start  = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Server is started on port: ${PORT}`))
    
  } catch (error) {
    console.log(error);
  }
}

start()

