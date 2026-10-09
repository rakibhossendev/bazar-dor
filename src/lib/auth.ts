import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";

const client = new MongoClient(`${process.env.BETTER_AUTH_MONGODB_ULR}`);
const db = client.db("bazar-dor");


export const auth = betterAuth({
    database: mongodbAdapter(db,{client}),
    emailAndPassword: {
        enabled: true,
    },
    
})