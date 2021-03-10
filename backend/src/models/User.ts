import mongoose, { Document } from "mongoose";

export interface User {
  name: string;
  email: string;
  country: string;
  gender: string;
  terms: boolean;
}

export type TUserDocument = Document & User;

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  country: { type: String, required: true },
  gender: { type: String, required: true },
  terms: { type: Boolean, required: true },
});

export const User = mongoose.model<TUserDocument>("User", UserSchema);
