
import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI); 
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log('mongoose sucessfully connected'); 
        }); 
        connection.on('error', (err) => {
            console.log('mongodb connection error: ', err); 
        })
    } catch (error) {
        console.log('something went wrong while connecting mongoose');
        console.log('error from mongoose connection: ', error);
    }   
}