import { PostData } from "@/lib/types/PostData/PostData";
import {
  collection,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  startAfter,
} from "@firebase/firestore";

import { firebaseApp } from "../firebase";

export const fireStore = getFirestore(firebaseApp);

export const getAllPostList = async ({ cursor }: { cursor: string }) => {
  let queryRef;

  if (cursor) {
    queryRef = query(
      collection(fireStore, "posts"),
      orderBy("createAt", "desc"),
      startAfter(cursor),
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
    throw Error("Failed to fetch posts list all");
  });

  const result: PostData[] = [];

  res.forEach(doc => {
    if (doc.exists()) {
      result.push(doc.data() as PostData);
    }
  });

  return result;
};
