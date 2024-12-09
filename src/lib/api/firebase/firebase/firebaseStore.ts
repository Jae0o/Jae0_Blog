import { getFirestore } from "@firebase/firestore";

import { firebaseApp } from "./firebase";

export const fireStore = getFirestore(firebaseApp);
