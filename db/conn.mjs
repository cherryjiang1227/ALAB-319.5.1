// import { MongoClient } from "mongodb";

// const client = new MongoClient(process.env.ATLAS_URI);

// let conn;
// try {
//   conn = await client.connect();
// } catch (e) {
//   console.error(e);
// }

// let db = conn.db("sample_training");

// export default db;

import mongoose from "mongoose";

try {
  await mongoose.connect(process.env.ATLAS_URI);
  console.log("Connected to MongoDB");
} catch (e) {
  console.error(e);
}

export default mongoose;