"use server";

import { db } from "@/firebase/firebase";
import {
  addDoc,
  collection,
  doc,
  writeBatch,
  updateDoc,
  arrayRemove,
  arrayUnion,
  getDocs,
} from "firebase/firestore";
import { dummyData } from "@/utils/dummyData";
import { v4 as uuidv4 } from "uuid";
import { User } from "firebase/auth";

const createUser = async (data: {
  username: string;
  email: string;
  password: string;
}) => {
  const collectionRef = collection(db, "users");

  await addDoc(collectionRef, {
    username: data.username,
    email: data.email,
    password: data.password,
  });
};

const batchAddParks = async () => {
  const batch = writeBatch(db);

  dummyData.forEach((item) => {
    const itemData = {
      ...item,
    };
    const docRef = doc(collection(db, "parks"));
    batch.set(docRef, itemData);
  });
  await batch.commit();
};

export { createUser, batchAddParks };
