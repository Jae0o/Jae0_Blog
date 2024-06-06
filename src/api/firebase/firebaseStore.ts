import { getDownloadURL, ref } from "firebase/storage";
import { uploadBytes } from "firebase/storage";

import { imageResizer } from "@/util";

import { firebaseStorage } from "./firebase";

export interface SetImageStorage {
  file: File;
  id: string;
}

export const setImageStorage = async ({ file, id }: SetImageStorage) => {
  let resizedImage: File | Blob = file;

  if (file.type !== "image/gif") {
    resizedImage = await imageResizer({
      file,
      maxWidth: 1200,
      maxHeight: 500,
    });
  }

  const storageRef = ref(firebaseStorage, `image/${id}`);
  const newImage = await uploadBytes(storageRef, resizedImage)
    .then(res => res)
    .catch(() => {
      throw new Error("set image error");
    });

  const newImageUrl = await getDownloadURL(newImage.ref);

  return newImageUrl;
};

export const setPostImageStorage = async ({ file, id }: SetImageStorage) => {
  let resizedImage: File | Blob = file;

  if (file.type !== "image/gif") {
    resizedImage = await imageResizer({
      file,
      maxWidth: 800,
      maxHeight: 1600,
    });
  }

  const storageRef = ref(firebaseStorage, `image/postImage/${id}`);
  const newImage = await uploadBytes(storageRef, resizedImage)
    .then(res => res)
    .catch(() => {
      throw new Error("set Post image error");
    });

  const newImageUrl = await getDownloadURL(newImage.ref);

  return newImageUrl;
};
