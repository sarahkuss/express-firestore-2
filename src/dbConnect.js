import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

import { credentials } from "../credentials.js"

// initialize the firebase app by bringing in the cert credential as an object
initializeApp ({
  credential: cert(credentials)
})

export const db = getFirestore()