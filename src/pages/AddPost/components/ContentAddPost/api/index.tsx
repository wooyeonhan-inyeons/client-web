import imageCompression from "browser-image-compression";
import { BACK_URL } from "../../../../../common";
import { Category } from "../../CategoryAddPost/type";
import { UploadPostType } from "../../HeaderAddPost/interface";

// files 타입에 자꾸 undefined 에러가 떠서.. 일단 any로 해둠....일단은..

export const Post = async (post: any) => {
  const formData = new FormData();
  console.log("==== updated 15 ====");
  console.log("photo: ", post.photo);

  console.log("append하기 전 타입: ", typeof post.latitude);

  formData.append("latitude", post.latitude.toString());
  formData.append("longitude", post.longitude.toString());
  formData.append("category", post.category); // 데이터 형식 고치기
  formData.append("content", post.content);

  const files = [];
  for (const photo of post.photo || []) {
    if (photo instanceof Blob || photo instanceof File) {
      files.push(photo);
    } else {
      // photo가 Blob 또는 File이 아닌 경우, 적절한 변환 작업 수행
      const blob = new Blob([photo], { type: "image/png" });
      const file = new File([blob], photo.file.name);
      files.push(file);
      formData.append("file", file);
    }
  }

  for (const pair of formData.entries()) {
    console.log(`${pair[0]}: ${pair[1]}`);
    console.log(`${typeof pair[0]}: ${typeof pair[1]}`);
  }
  const boundary = `multipart-formdata-boundary-${Math.random()
    .toString()
    .substring(2)}`;

  const response = await fetch(`${BACK_URL}/post`, {
    method: "POST",
    headers: {
      // "Content-Type": `multipart/form-data; boundary=${boundary};`,
      "Content-Type": "multipart/form-data;",
      Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
    },
    body: formData,
  }).then((response) => {
    return response.json();
  });
  console.log("res: ", response);
  return response;
};
// export const Post = async (post: any) => {
//   const formData = new FormData();
//   formData.append("latitude", `${post.latitude}`);
//   formData.append("longitude", `${post.longitude}`);
//   formData.append("address", `${post.address}`);
//   formData.append("category", `${post.category}`);
//   formData.append("content", `${post.content}`);
//   console.log("this is Post api fn");
//   const option = {
//     maxSizeMB: 1,
//     maxWidthOrHeight: 1024,
//   };

// const files = Array.from(post.photo);
// for (let i = 0; i < files.length; i++) {
//   const compressedBlob = await imageCompression(files[i] as any, option);
//   const compressedFile = new File([compressedBlob], compressedBlob.name, {
//     type: compressedBlob.type,
//   });
//   console.log(files[i]);
//   console.log(compressedFile);
//   formData.append("photo", compressedFile);
// }

//   const response = await fetch(`${BACK_URL}/post`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "multipart/form-data",
//       Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
//     },
//     body: formData,
//   }).then((response) => {
//     return response.json();
//   });
//   console.log(response);
//   return response;
// };
