import { PostUploadValidate } from "./Validate.Types";

export const postUploadValidate: PostUploadValidate = post => {
  if (!post.category) {
    alert("카테고리를 꼭 설정해주세요");
    return false;
  }
  return true;
};
