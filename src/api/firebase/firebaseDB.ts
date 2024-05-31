import { get, ref, set } from "firebase/database";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";

import { PostData } from "@/types/original";

import { database, fireStore } from "./firebase";

/* ============== Options ============== */
export interface SetOptions {
  option: string;
  value: string;
}
export const setOptions = async ({ option, value }: SetOptions) => {
  await set(ref(database, `${option}/${value}`), value).catch(() => {
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

type GetPostsList = (category: string) => Promise<PostData[]>;

export const getPostsList: GetPostsList = async category => {
  return await get(ref(database, `Posts/${category}`))
    .then(res => {
      if (res.exists()) {
        const fetchedList: PostData[] = Object.values(res.val());
        return fetchedList;
      }
      throw new Error("get posts list Error");
    })
    .catch(() => {
      throw new Error("get posts list Error");
    });
};

export const getAllPostsList = async () => {
  // return await get(ref(database, `Posts/`))
  //   .then(res => {
  //     if (res.exists()) {
  //       return res.val();
  //     }
  //     throw new Error("get all post list Error");
  //   })
  //   .catch(() => {
  //     throw new Error("get all post list Error");
  //   });
  const queryRef = query(collection(fireStore, "posts"));
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

export interface DeletePost {
  postCategory: string;
  postId: string;
}
export const deletePost = async ({ postCategory, postId }: DeletePost) => {
  await set(ref(database, `Posts/${postCategory}/${postId}`), null).catch(
    () => {
      throw new Error("delete post Error");
    },
  );
};

export const getGet = async () => {
  // await getDocs(
  //   query(collection(fireStore, "posts"), where("category", "==", "BLOG")),
  // ).then(res => {
  //   res.forEach(doc => {
  //     if (doc.exists()) {
  //       console.log(doc.data());
  //     }
  //   });
  // });
};
