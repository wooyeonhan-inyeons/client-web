import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useOutletContext } from "react-router-dom";
import { UploadPostType } from "./interface";
import { WrapperOptInterface } from "../../component/MainWrapper/interface";
import { X } from "@phosphor-icons/react";
import { useMutation } from "react-query";
import { Post } from "./components/ContentAddPost/api";
import { Box } from "@mui/material";
import SaveBtn from "../../component/SaveBtn";
import { ContextInterface, HeaderOptinterface } from "../../interface";

const initialPostState: UploadPostType = {
  latitude: undefined,
  longitude: undefined,
  address: null,
  category: null,
  photo: [],
  content: "",
};

function HeaderAddPost() {
  const {
    setHeadOpt,
    navigate,
    setWrapperOpt,
    user,
    initPosition,
    initGeocode,
  } = useOutletContext<ContextInterface>();

  const headerOption: HeaderOptinterface = {
    menus: [
      { key: "위치", value: "/add-post" },
      { key: "카테고리", value: "/add-post/category" },
      { key: "내용", value: "/add-post/content" },
    ],
    isForward: false,
    icon_R: X,
    fn_R: () => navigate("/"),
  };

  const wrapperOption: WrapperOptInterface = {
    // noneFullHeight: true,
    isFullWidth: true,
    isNoneHeadPadding: false,
    isBtn: true,
  };

  useEffect(() => {
    setHeadOpt(headerOption);
    setWrapperOpt(wrapperOption);
    console.log("일단 받음", initPosition);
  }, []);

  ////////////////////////////////

  const [category, setCategory] = useState<string>();
  const [shaking, setShaking] = useState<boolean>(false);
  const [btnText, setBtnText] = useState("다음");
  const [post, setPost] = useState<UploadPostType | null>(initialPostState);
  const location = useLocation();

  useEffect(() => {
    if (post !== null) {
      setCategory(post.category as string);
    }
  }, [post]);

  const uploadWooyeon = (post: any | null) => {
    console.log(post);
    mutate();
  };

  const handleBtnNavigate = () => {
    console.log(location.pathname);
    if (location.pathname === "/add-post") {
      setBtnText("다음");
      navigate("/add-post/category");
    } else if (location.pathname === "/add-post/category") {
      category && setBtnText("우연 등록하기");
      category && navigate("/add-post/content");
      if (!category) {
        setShaking(true);
        // console.log("흔들흔들 setShaking", shaking);
        // 이후에 바로 false로 설정해야 되는데 일단 미루겠음
      }
    } else {
      // 우연 등록하기 버튼 클릭시
      // setBtnText("다음");
      // navigate("/add-post/category"); // 우연 등록 시 라우팅 수정하기
      uploadWooyeon(post);
    }
  };

  // mutation
  const { mutate, isLoading } = useMutation(
    "post",
    () => Post(post, user.access_token),
    {
      onMutate: (data) => {
        //시작
        console.log("onMutation: ", data);
        // console.log("isLoading: ", isLoading);
      },
      onSuccess: () => {
        console.log("우연 등록하기 성공!");
        navigate("/");
      },
      onSettled: () => {
        navigate("/");
      },
    }
  );

  return (
    <>
      <Outlet
        context={{
          setHeadOpt,
          post,
          setPost,
          shaking,
          setShaking,
          setCategory,
          initPosition,
          initGeocode,
        }}
      />
      <Box
        sx={{
          width: "100%",
          maxWidth: "444px",
          margin: "auto",
          position: "fixed",
          bottom: 0,
          px: 3,
          pb: 4,
        }}
      >
        <SaveBtn
          text={btnText}
          onClick={handleBtnNavigate}
          isLoading={isLoading}
        />
      </Box>
    </>
  );
}

export default HeaderAddPost;
