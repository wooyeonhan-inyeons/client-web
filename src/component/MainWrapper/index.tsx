import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { HeaderOptinterface } from "../../interface";
import { HeaderProp, WrapperOptInterface } from "./interface";
import Header from "../Header";
import { StyledContainer } from "./style";
import SaveBtn from "../SaveBtn";
import { useMutation } from "react-query";
import { Post } from "../../pages/AddPost/components/ContentAddPost/api";
import { UploadPostType } from "../../pages/AddPost/components/HeaderAddPost/interface";

function MainWrapper({ isHeader }: HeaderProp) {
  const [headOpt, setHeadOpt] = useState<HeaderOptinterface>({
    menus: [{ key: "", value: "" }],
    isForward: true,
  });
  const location = useLocation();
  const navigate = useNavigate();

  const [wrapperOpt, setWrapperOpt] = useState<WrapperOptInterface>({
    isFullWidth: false,
    isNoneHeadPadding: false,
    noneFullHeight: false,
    scrollable: false,
    isBtn: false,
  });

  const [category, setCategory] = useState<string>();
  const [shaking, setShaking] = useState<boolean>(false);
  const [btnText, setBtnText] = useState("다음");

  const initialPostState: UploadPostType = {
    latitude: undefined,
    longitude: undefined,
    address: null,
    category: null,
    photo: [],
    content: "",
  };
  const [post, setPost] = useState<UploadPostType | null>(initialPostState);

  const uploadWooyeon = (post: any | null) => {
    console.log("오호라 잘도 여기까지 왔군");
    console.log(post);
    mutate();
  };

  const handleBtnNavigate = () => {
    if (location.pathname === "/add-post") {
      setBtnText("다음");
      navigate("/add-post/category");
    } else if (location.pathname === "/add-post/category") {
      category && setBtnText("우연 등록하기");
      category && navigate("/add-post/content");
      if (!category) {
        setShaking(true);
        console.log("흔들흔들 setShaking", shaking);
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
  const { mutate, isLoading } = useMutation("post", () => Post(post), {
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
  });

  return (
    <>
      {isHeader && (
        <Header
          headProp={headOpt}
          navigate={navigate}
          setBtnText={setBtnText}
        />
      )}
      <StyledContainer
        className="globalContainer"
        maxWidth="xs"
        sx={{
          pl: wrapperOpt.isFullWidth ? 0 : 2,
          pr: wrapperOpt.isFullWidth ? 0 : 2,
          "@media (min-width: 600px)": {
            pl: wrapperOpt.isFullWidth ? 0 : 2,
            pr: wrapperOpt.isFullWidth ? 0 : 2,
          },
        }}
      >
        <Box
          sx={{
            maxHeight: "100vh",
            touchAction: "none",
            overflowX: wrapperOpt.scrollable ? "scroll" : "hidden",
            height: wrapperOpt.noneFullHeight ? "auto" : "100vh",
            pt: wrapperOpt.isNoneHeadPadding ? 0 : 7,
            "@media (min-width: 600px)": {
              pt: wrapperOpt.isNoneHeadPadding ? 0 : 8,
            },
            pb: wrapperOpt.isBtn ? 8 : 0,
          }}
        >
          <Outlet
            context={{
              headOpt,
              setHeadOpt,
              navigate,
              setWrapperOpt,
              setCategory,
              shaking,
              setShaking,
              post,
              setPost,
            }}
          />
          {wrapperOpt.isBtn && (
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
          )}
        </Box>
      </StyledContainer>
    </>
  );
}

export default MainWrapper;
