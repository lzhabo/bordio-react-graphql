import { IUser } from "./interfaces";
import mongoose from "mongoose";
import { User } from "./models/User";

class Database {
  constructor(mongoUrl: string) {
    mongoose
      .connect(mongoUrl, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("✅  Connected to MongoDB");
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
      })
      .catch((err) => {
        console.log(`❌  MongoDB connection error. Please make sure MongoDB is running. ${err}`);
      });
  }

  users = () => User.find({}).exec();

  findUser = async (id: string) => User.findById(id).exec();

  findUserByEmail = async (email: string) => User.find({ email: email }).exec();

  createUser = async (data: Omit<IUser, "id">) => await User.create(data);
}

export default Database;
