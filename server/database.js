import {MongoClient, ServerApiVersion} from 'mongodb'
import 'dotenv/config'

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/"

const options = {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
}

let client;
const connectToMongoDB = async () => {      //* creating aa client if already a client is not created
    if(!client){
        try {
            client = await MongoClient.connect(uri, options)
            console.log("connected to mongodb");
            
        } catch (error) {
            console.log(error);
            
        }
    }
    return client
}

const getConnectedClient = () => client;

export {connectToMongoDB, getConnectedClient}