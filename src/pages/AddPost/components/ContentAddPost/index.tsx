import { Badge, Box, Button, Chip, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import { PostStateInterface } from "../HeaderAddPost/interface";
import {
  createTheme,
  ThemeProvider,
  Theme,
  useTheme,
} from "@mui/material/styles";
import ImageUploading, { ImageListType } from "react-images-uploading";
import ScrollContainer from "react-indiana-drag-scroll";
import Icon from "@mui/material/Icon";

const defaultStyle = {
  display: "flex",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
};

const defaultStyle2 = {
  display: "flex",
  height: "100%",
};

// 아이폰 SE 규격 css 수정
const customTheme = (outerTheme: Theme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
      primary: {
        main: "#00A651",
      },
      secondary: {
        main: "#EEF1EE",
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
  const [title, setTitle] = useState<string>();
  const [content, setContent] = useState<string>();
  const outerTheme = useTheme();

  const [images, setImages] = useState([]);
  const maxNum = 10;

  const onPhotoUpload = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  const onHandleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onHandleContent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  // 게시글 내용 post에 입력
  useEffect(() => {
    setPost((prevState) => ({
      ...prevState,
      title: title,
      content: content,
      photo: images,
    }));
    console.log("최종: ", post);
    console.log("images's lenght: ", images.length);
  }, [title, content, images]);

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
          maxHeight: "100vh",
          padding: "1rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ pb: "1rem" }}>
            <Chip
              label={post?.category}
              size="medium"
              color="primary"
              sx={{ fontWeight: "900" }}
            />
          </Box>
          <TextField
            label="주소를 확인해 주세요"
            variant="standard"
            InputProps={{
              readOnly: true,
            }}
            defaultValue={post?.address}
            margin="dense"
          />
          <TextField
            label="우연의 제목을 입력해 주세요"
            variant="standard"
            margin="dense"
            color="primary"
            value={title}
            onChange={onHandleTitle}
          />
          <TextField
            multiline
            rows={4}
            label="어떤 일이 있었나요?"
            variant="standard"
            margin="dense"
            InputProps={{
              disableUnderline: true, // 하단 보더 선을 제거하는 옵션입니다.
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
                className={`scroll-container ${
                  images.length == 0 ? defaultStyle : defaultStyle2
                }`}
                horizontal
                vertical={false}
              >
                {imageList.map((image, index) => (
                  <Box
                    key={index}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      p: 20,
                      "@media (max-width: 375px)": {
                        p: 14,
                      },
                      position: "relative",
                      mr: 3,
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
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    p: 20,
                    "@media (max-width: 375px)": {
                      p: 15,
                    },
                    position: "relative",
                  }}
                >
                  <Button
                    onClick={onImageUpload}
                    style={{
                      border: "2px dashed #B2B1B1",
                      borderRadius: "20px",
                      backgroundColor: "#F3F3F3",
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Icon style={{ fontSize: "3rem", color: "#ED6728" }}>
                      add_circle
                    </Icon>
                    <Typography
                      sx={{
                        color: "black",
                        fontSize: "1.2rem",
                        fontWeight: "medium",
                      }}
                    >
                      사진 추가
                    </Typography>
                  </Button>
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
