import { PostUploadValidateFunc } from "../Types/Util/ValidateTypes";

export const postUploadValidate: PostUploadValidateFunc = (post) => {
  if (!post.category) {
    alert("카테고리를 꼭 설정해주세요");
    return false;
  }
  return true;
};
