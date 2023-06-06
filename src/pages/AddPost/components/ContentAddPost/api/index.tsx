import { BACK_URL } from "../../../../../common";

// files 타입에 자꾸 undefined 에러가 떠서.. 일단 any로 해둠....일단은..

export const Post = async (post: any) => {
  const formData = new FormData();
  console.log("==== updated 24 ====");
  console.log("photo: ", post.photo);

  formData.append("latitude", post.latitude);
  formData.append("longitude", post.longitude);
  formData.append("category", post.category);
  formData.append("content", post.content);

  for (const photo of post.photo || []) {
    formData.append("file", photo.file);
  }

  const response = await fetch(`${BACK_URL}/post`, {
    method: "POST",
    headers: {
      // "Content-Type": "multipart/form-data;",
      Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
    },
    body: formData,
  }).then((response) => {
    return response.json();
  });
  console.log("res: ", response);
  return response;
};
