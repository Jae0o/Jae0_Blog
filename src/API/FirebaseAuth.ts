import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./Firebase";
import { Login, SignUp } from "./Firebase.Types";

export const signUp: SignUp = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

export const login: Login = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};
