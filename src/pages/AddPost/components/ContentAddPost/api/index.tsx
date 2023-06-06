import imageCompression from "browser-image-compression";
import { BACK_URL } from "../../../../../common";
import { Category } from "../../CategoryAddPost/type";
import { UploadPostType } from "../../HeaderAddPost/interface";

// files 타입에 자꾸 undefined 에러가 떠서.. 일단 any로 해둠....일단은..

export const Post = async (post: any) => {
  const formData = new FormData();
  console.log("form data123: ", formData);

  const option = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1024,
  };

  const files = [];
  for (const photo of post.photo || []) {
    if (photo instanceof Blob || photo instanceof File) {
      if (photo.type.startsWith("image/")) {
        files.push(photo);
      } else {
        console.error("Invalid image file:", photo);
      }
    } else {
      // photo가 Blob 또는 File이 아닌 경우, 적절한 변환 작업 수행
      const blob = new Blob([photo], { type: "image/jpeg" });
      const file = new File([blob], "photo.jpg");
      files.push(file);
    }
  }

  for (let i = 0; i < files.length; i++) {
    const compressedBlob = await imageCompression(files[i] as any, option);
    const compressedFile = new File([compressedBlob], compressedBlob.name, {
      type: compressedBlob.type,
    });
    formData.append("photo", compressedFile);
  }

  formData.append("latitude", post.latitude);
  formData.append("longitude", post.longitude);
  formData.append("category", post.category);
  formData.append("content", post.content);
  // const blob = new Blob([post.photo], { type: "image/jpeg" });
  // const file = new File([blob], "photo.jpg");
  // formData.append("photo", file);
  console.log("has?: ", formData.has("latitude"));
  console.log("Form Data Contents:");
  for (const [key, value] of formData.entries()) {
    console.log("key : value ", key, value);
  }

  const response = await fetch(`${BACK_URL}/post`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
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
