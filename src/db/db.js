import mongoose from "mongoose";
import { Db_name } from "../constant.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${Db_name}`,
    );
    console.log(`\n Mongodb connected!! ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("MongoDb Connection failed", error);
    process.exit(1);
  }
};

export default connectDB();
