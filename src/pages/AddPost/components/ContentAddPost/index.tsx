import { Badge, Box, Button, Chip, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router";

import {
  createTheme,
  ThemeProvider,
  Theme,
  useTheme,
} from "@mui/material/styles";
import ImageUploading, { ImageListType } from "react-images-uploading";
import ScrollContainer from "react-indiana-drag-scroll";
import { MapPin, PlusCircle } from "@phosphor-icons/react";
import { mainPrimary, secondary } from "../../../../common";
import { Category } from "../CategoryAddPost/type";
import "./style.css";
import { PostStateInterface } from "../../interface";

// 아이폰 SE 규격 css 수정
const customTheme = (outerTheme: Theme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
      primary: {
        main: mainPrimary,
      },
      secondary: {
        main: secondary,
      },
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#E0E3E7",
            "--TextField-brandBorderHoverColor": "#B2BAC2",
            "--TextField-brandBorderFocusedColor": "#6F7E8C",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            "&:before, &:after": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            "&:before": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

const shapeStyles = { bgcolor: "primary.main", width: 30, height: 30 };
const shapeCircleStyles = { borderRadius: "50%" };
const ContentAddPost = () => {
  const { post, setPost } = useOutletContext<PostStateInterface>();
  const [content, setContent] = useState<string>();
  const outerTheme = useTheme();

  const [images, setImages] = useState([]);
  const maxNum = 10;

  const onPhotoUpload = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log("imageList: ", imageList);
    console.log("addUpdateIndex: ", addUpdateIndex);
    setImages(imageList as never[]);
  };

  const onHandleContent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  // 게시글 내용 post에 입력
  useEffect(() => {
    setPost((prevState) => ({
      ...prevState,
      content: content,
      photo: images,
    }));
  }, [content, images]);

  // 이미지 삭제 버튼 이벤트 핸들러
  const [showButton, setShowButton] = useState(false);
  const [imageStyle, setImageStyle] = useState({});
  const [selectedImage, setSelectedImage] = useState<number>();

  const handleImageClick = (idx: number) => {
    setSelectedImage(idx);
    // 버튼 보이기
    setShowButton((prev) => !prev);
    // 이미지 스타일 변경
    setImageStyle({
      filter: imageStyle === "brightness(50%)" ? "none" : "brightness(50%)",
    });
  };

  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      <Box
        sx={{
          height: "100%",
          padding: "1rem 0rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "0rem 1.5rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              pb: "1rem",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <Chip
              label={post?.category && `#${Category[post.category as never]}`}
              size="medium"
              color="primary"
              sx={{ fontWeight: "800" }}
            />
            <Box sx={{ display: "flex" }}>
              <MapPin size={22} weight="fill" />
              <Typography sx={{ pl: "5px" }}>{post?.address}</Typography>
            </Box>
          </Box>
          <TextField
            multiline
            rows={6}
            label="어떤 일이 있었나요?"
            variant="standard"
            InputProps={{
              disableUnderline: true, // 하단 보더 선을 제거하는 옵션입니다.
              style: {
                borderTop: "0.5px solid #E5E5E5",
              },
            }}
            value={content}
            onChange={onHandleContent}
          />
        </Box>
        <ImageUploading
          multiple
          value={images}
          onChange={onPhotoUpload}
          maxNumber={maxNum}
        >
          {({ imageList, onImageUpload, onImageRemove }) => (
            // write your building UI
            <Box>
              <ScrollContainer
                className={
                  imageList.length
                    ? "scroll-container scrollContainer--imgExist"
                    : "scroll-container scrollContainer"
                }
                horizontal
                vertical={false}
              >
                {imageList.map((image, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      p: 20,
                      "@media (max-width: 375px)": {
                        p: 14,
                      },
                      position: "relative",
                      mr: 3,
                      height: imageList.length ? "100%" : "75%",
                    }}
                    onClick={() => handleImageClick(index)}
                  >
                    <img
                      src={image.dataURL}
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "15px",
                        filter:
                          selectedImage === index
                            ? showButton
                              ? "brightness(50%)"
                              : "none"
                            : "none",
                      }}
                    />
                    <Badge
                      color="secondary"
                      overlap="circular"
                      badgeContent=" "
                      invisible
                      sx={{
                        position: "absolute",
                        top: "5%",
                        left: "86%",
                        "@media (max-width: 375px)": {
                          left: "83%",
                        },
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          ...shapeStyles,
                          ...shapeCircleStyles,
                          position: "absolute",
                          display: "flex",
                          justifyContent: "center",
                          textAlign: "center",
                          pt: 0.3,
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                        {index + 1}
                      </Box>
                    </Badge>
                    {selectedImage === index
                      ? showButton && (
                          <button
                            onClick={() => {
                              onImageRemove(index);
                            }}
                            style={{
                              // 이미지 중앙에 위치
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              background: "transparent",
                              border: "none",
                              padding: 0,
                              color: "white",
                              fontSize: "1.5rem",
                              fontWeight: "bold",
                            }}
                          >
                            지우기
                          </button>
                        )
                      : null}
                  </Box>
                ))}
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Button
                    onClick={onImageUpload}
                    className={
                      imageList.length ? "plusImage--imgExist" : "plusImage"
                    }
                    style={{
                      background:
                        outerTheme.palette.mode === "light"
                          ? "#ffffff"
                          : "#343332",
                      boxShadow:
                        outerTheme.palette.mode === "light"
                          ? "20px 20px 40px #bebebe"
                          : "20px 20px 40px #1f1f1f",
                    }}
                  >
                    <PlusCircle size={40} color={secondary} />
                    <Typography
                      sx={{
                        color:
                          outerTheme.palette.mode === "light"
                            ? "black"
                            : "white",
                        fontSize: "1.2rem",
                        fontWeight: "medium",
                      }}
                    >
                      사진 추가
                    </Typography>
                  </Button>
                  {/* )} */}
                </Box>
              </ScrollContainer>
            </Box>
          )}
        </ImageUploading>
      </Box>
    </ThemeProvider>
  );
};

export default ContentAddPost;
