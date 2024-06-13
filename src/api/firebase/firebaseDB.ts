import { get, getDatabase, ref } from "firebase/database";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  setDoc,
  startAfter,
  where,
} from "firebase/firestore";

import { PostData } from "@/types/original";

import { firebaseApp } from "./firebase";

const database = getDatabase(firebaseApp);
const fireStore = getFirestore(firebaseApp);

/* ============== Options ============== */
export interface SetOptions {
  option: string;
  value: string;
}
export const setOptions = async ({ option, value }: SetOptions) => {
  await setDoc(doc(fireStore, `options`, option), {
    list: [value],
  }).catch(() => {
    throw Error(`set options ${option} Error`);
  });
};
type GetOptions = (optionsType: string) => Promise<string[]>;

export const getOptions: GetOptions = async optionsType => {
  return await get(ref(database, optionsType))
    .then(res => {
      if (res.exists()) {
        const fetchedOptions: string[] = Object.values(res.val());
        return fetchedOptions;
      }

      throw new Error("getOption Error");
    })
    .catch(() => {
      throw new Error("getOption Error");
    });
};

/* =============== POST =============== */

type SetPost = (post: PostData) => Promise<void>;

export const setPost: SetPost = async post => {
  const time = JSON.stringify(new Date());

  if (!post.createAt) {
    post.createAt = time;
  }

  post.updateAt = time;

  await setDoc(doc(fireStore, "posts", post.id), post).catch(() => {
    throw new Error("set post Error");
  });
};

export const getPostsList = async ({ category }: { category: string }) => {
  const queryRef = query(
    collection(fireStore, "posts"),
    where("category", "==", category),
  );

  const res = await getDocs(queryRef);

  const result: PostData[] = [];

  res.forEach(doc => {
    if (doc.exists()) {
      result.push(doc.data() as PostData);
    }
  });

  return result;
};

export const getAllPostsList = async ({ cursorId }: { cursorId: string }) => {
  let queryRef;

  if (cursorId) {
    queryRef = query(
      collection(fireStore, "posts"),
      orderBy("createAt", "desc"),
      startAfter(cursorId),
      limit(4),
    );
  } else {
    queryRef = query(
      collection(fireStore, "posts"),
      orderBy("createAt", "desc"),
      limit(4),
    );
  }

  const res = await getDocs(queryRef).catch(() => {
    throw new Error("get all post list Error");
  });

  const result: PostData[] = [];

  res.forEach(doc => {
    if (doc.exists()) {
      result.push(doc.data() as PostData);
    }
  });

  return result;
};

export const getPost = async ({ postId }: { postId: string }) => {
  const storeRef = doc(fireStore, "posts", postId);
  const res = await getDoc(storeRef);

  if (res.exists()) {
    return res.data() as PostData;
  }

  throw new Error("get post Error");
};

export const deletePost = async ({ postId }: { postId: string }) => {
  await deleteDoc(doc(fireStore, "posts", postId));
};
