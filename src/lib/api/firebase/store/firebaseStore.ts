import { getFirestore } from "@firebase/firestore";

import { firebaseApp } from "../";

export const fireStore = getFirestore(firebaseApp);
