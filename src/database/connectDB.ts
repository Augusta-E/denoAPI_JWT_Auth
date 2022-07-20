import { MongoClient } from "https://deno.land/x/mongo@v0.30.0/mod.ts";

  // Connecting to a Mongo Database
  const client = new MongoClient();
  
  const dbString = "DB_String"

  await client.connect(dbString)
  
 console.log("Database connected!");
 const db = client.database("deno_auth");

 export default db;