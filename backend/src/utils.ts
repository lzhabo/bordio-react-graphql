import * as crypto from "crypto";
import { IHash } from "./interfaces";

export const generateSalt = (rounds?: number) => {
  if (rounds == null) rounds = 12;

  if (rounds >= 15) throw new Error(`${rounds} is greater than 15,Must be less that 15`);

  return crypto
    .randomBytes(Math.ceil(rounds / 2))
    .toString("hex")
    .slice(0, rounds);
};

export const hasher = (password: string, salt?: string): IHash => {
  if (salt == null) {
    salt = generateSalt();
  }
  let hash = crypto.createHmac("sha512", salt);
  hash.update(password);
  let value = hash.digest("hex");
  return {
    salt: salt,
    hashedpassword: value,
  };
};

export const compare = (password: string, hash: IHash) => {
  if (password == null || hash == null) {
    throw new Error("password and hash is required to compare");
  }
  if (typeof hash !== "object") {
    throw new Error("password must be a String and hash must be an Object");
  }
  let passwordData = hasher(password, hash.salt);
  return passwordData.hashedpassword === hash.hashedpassword;
};

export function loadVar(name: string): string;
export function loadVar<T extends boolean>(
  name: string,
  optional: T
): T extends false ? string : string | undefined;
export function loadVar(name: string, optional?: unknown): string | undefined {
  const result = process.env[name];
  if (result == null && !optional) {
    throw new Error(`${name} is required`);
  }
  return result;
}

export function randomInteger(min: number, max: number) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
