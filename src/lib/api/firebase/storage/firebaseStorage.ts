import { getStorage } from "@firebase/storage";

import { firebaseApp } from "../";

export const fireStorage = getStorage(firebaseApp);
