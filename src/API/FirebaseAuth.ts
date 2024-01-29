import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./Firebase";
import { Login, SignUp } from "./Firebase.Types";

export const firebaseSignUp: SignUp = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

export const firebaseLogin: Login = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password)
    .then(res => {
      return res;
    })
    .catch(error => {
      throw Error(error);
    });
};
