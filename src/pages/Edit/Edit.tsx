import "./Edit.style.css";

import { useNavigate, useParams } from "react-router-dom";

import { MUTATION_OPTIONS } from "@/api";
import { CheckAdmin } from "@/components";
import { QUERY_ERROR } from "@/constants";
import { PostData } from "@/types/original";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import LoadingPage from "../Loading/Loading";
import { Editor, EditorSub } from "./components";
import { useCategoryList, useTagList } from "./hooks";

const Edit = () => {
  const categories = useCategoryList();
  const tags = useTagList();

  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation(MUTATION_OPTIONS.SET_POST());
  const navigate = useNavigate();
  const { id: postId = "" } = useParams();

  const onUploadPost = async (post: PostData) => {
    mutate(post, {
      onSuccess: () => {
        navigate("/");
        queryClient.refetchQueries();
      },
      onError: () => alert(QUERY_ERROR.SET_POST),
    });
  };

  if (isPending) {
    return <LoadingPage />;
  }

  return (
    <section className="outlet__edit">
      <CheckAdmin>
        <Editor
          id={postId}
          categoryList={categories}
          tagList={tags}
          onSubmit={onUploadPost}
        />

        <EditorSub />
      </CheckAdmin>
    </section>
  );
};

export default Edit;
