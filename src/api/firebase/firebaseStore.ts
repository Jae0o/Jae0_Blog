import { imageResizer } from "@/util";

import { firebaseApp } from "./firebase";

import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { uploadBytes } from "firebase/storage";

export const firebaseStorage = getStorage(firebaseApp);

export interface SetImageStorage {
  file: File;
  id: string;
}

export const setThumbnailImageStorage = async ({
  file,
  id,
}: SetImageStorage) => {
  let thumbnailImage: File | Blob = file;

  let miniThumbnailImage: File | Blob = file;

  if (file.type !== "image/gif") {
    thumbnailImage = await imageResizer({
      file,
      maxWidth: 1200,
      maxHeight: 500,
      minHeight: 500,
    });

    miniThumbnailImage = await imageResizer({
      file,
      maxWidth: 300,
      maxHeight: 210,
    });
  }

  const mainStorageRef = ref(
    firebaseStorage,
    `image/thumbnail/${id}/main_image_${id}`,
  );

  const miniStorageRef = ref(
    firebaseStorage,
    `image/thumbnail/${id}/mini_${id}`,
  );

  const newMainImage = await uploadBytes(mainStorageRef, thumbnailImage)
    .then(res => res)
    .catch(() => {
      throw new Error("set image error");
    });
  const newMiniImage = await uploadBytes(miniStorageRef, miniThumbnailImage)
    .then(res => res)
    .catch(() => {
      throw new Error("set image error");
    });

  const mainImage = await getDownloadURL(newMainImage.ref);
  const miniImage = await getDownloadURL(newMiniImage.ref);

  return {
    mainImage,
    miniImage,
  };
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
