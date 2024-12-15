import { getStorage } from "@firebase/storage";

import { firebaseApp } from "../firebase";

export const fireStorage = getStorage(firebaseApp);
