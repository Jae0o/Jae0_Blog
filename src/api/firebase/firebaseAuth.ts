import {
  UserCredential,
  browserSessionPersistence,
  getAuth, // createUserWithEmailAndPassword,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { firebaseApp } from "./firebase";

const auth = getAuth(firebaseApp);

interface LoginInfo {
  email: string;
  password: string;
}
// type SignUp = (params: LoginInfo) => void;
type Login = (params: LoginInfo) => Promise<UserCredential>;

// export const firebaseSignUp: SignUp = async ({ email, password }) => {
//   await createUserWithEmailAndPassword(auth, email, password);
// };

export const firebaseLogin: Login = async ({ email, password }) => {
  return await setPersistence(auth, browserSessionPersistence)
    .then(async () => {
      return await signInWithEmailAndPassword(auth, email, password)
        .then(res => {
          return res;
        })
        .catch(error => {
          throw Error(error);
        });
    })
    .catch(error => {
      throw Error(error);
    });
};
