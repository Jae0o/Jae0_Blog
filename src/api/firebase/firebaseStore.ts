import { getDownloadURL, ref } from "firebase/storage";
import { uploadBytes } from "firebase/storage";

import { imageResizer } from "@/util";

import { firebaseStorage } from "./firebase";

export interface SetImageStorage {
  file: File;
  path: string;
}

export const setImageStorage = async ({ file, path }: SetImageStorage) => {
  let resizedImage: File | Blob = file;

  if (file.type !== "image/gif") {
    resizedImage = await imageResizer(file);
  }

  const storageRef = ref(firebaseStorage, `image/${path}`);
  const newImage = await uploadBytes(storageRef, resizedImage)
    .then(res => res)
    .catch(() => {
      throw new Error("set image error");
    });

  const newImageUrl = await getDownloadURL(newImage.ref);

  return newImageUrl;
};
