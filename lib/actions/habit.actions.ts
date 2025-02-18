"use server";

import { Databases, ID, Query } from "node-appwrite";

import {
  BUCKET_ID,
  DATABASE_ID,
  ENDPOINT,
  PATIENT_COLLECTION_ID,
  PROJECT_ID,
  databases,
  storage,
  users,
} from "../appwrite.config";
import { parseStringify } from "../utils";

// To add new habit in table 'habits' - appwrite
export const createHabit = async (habitData: AllHabitsProps) => {
  try {
    //const user = await users.get(userId);
    //return parseStringify(user);
  } catch (error: any) {
    console.error("An error occurred while getting the current user:", error);
  }
};
