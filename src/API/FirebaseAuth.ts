import {
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./Firebase";

interface LoginInfo {
  email: string;
  password: string;
}
type SignUp = (params: LoginInfo) => void;
type Login = (params: LoginInfo) => Promise<UserCredential>;

export const firebaseSignUp: SignUp = async ({ email, password }) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

export const firebaseLogin: Login = async ({ email, password }) => {
  return await signInWithEmailAndPassword(auth, email, password)
    .then(res => {
      return res;
    })
    .catch(error => {
      throw Error(error);
    });
};
