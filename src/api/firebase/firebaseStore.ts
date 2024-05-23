import { getDownloadURL, ref } from "firebase/storage";
import { uploadBytes } from "firebase/storage";
import { ERROR_MESSAGE } from "@/constants/AlertMessage";
import { imageResizer } from "@/util";
import { firebaseStorage } from "./firebase";

type SetImageStorage = (params: {
  file: File;
  path: string;
}) => Promise<string | void>;

export const setImageStorage: SetImageStorage = async ({ file, path }) => {
  let resizedImage: File | Blob = file;

  if (file.type !== "image/gif") {
    resizedImage = await imageResizer(file);
  }

  const storageRef = ref(firebaseStorage, `image/${path}`);

  const newImage = await uploadBytes(storageRef, resizedImage)
    .then(res => res)
    .catch(() => console.log(ERROR_MESSAGE.UPLOAD_STORAGE_IMAGE));

  if (!newImage) {
    return;
  }

  const newImageUrl = await getDownloadURL(newImage.ref);

  return newImageUrl;
};
