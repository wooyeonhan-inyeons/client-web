import { Box, Button, Chip, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useOutletContext } from "react-router";
import SaveBtn from "../../../../component/SaveBtn";
import { PostStateInterface } from "../HeaderAddPost/interface";
import {
  createTheme,
  ThemeProvider,
  Theme,
  useTheme,
} from "@mui/material/styles";
import ImageUploading, { ImageListType } from "react-images-uploading";
import ScrollContainer from "react-indiana-drag-scroll";

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

const ContentAddPost = () => {
  const { post } = useOutletContext<PostStateInterface>();
  const navigate = useNavigate();
  const outerTheme = useTheme();

  console.log(post);
  const handleNext = () => {
    navigate("/add-post/photo");
  };

  const [images, setImages] = useState([]);
  const maxNum = 10;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      <Box
        sx={{
          height: "100%",
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
          />
          <TextField
            multiline
            rows={4}
            label="어떤 일이 있었나요?"
            variant="standard"
            margin="dense"
          />
        </Box>
        <Box>
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNum}
          >
            {({
              imageList,
              onImageUpload,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <ScrollContainer
                className="scroll-container"
                horizontal
                vertical={false}
                style={{
                  display: "flex",
                  height: "100%",
                  alignItems: "center",
                }}
              >
                {imageList.map((image, index) => (
                  <Box
                    key={index}
                    sx={{ width: "100%", p: 4 }}
                    onClick={() => {
                      console.log("hi");
                    }}
                  >
                    <img
                      src={image.dataURL}
                      style={{
                        // 이거 퍼센트로 어케 함
                        width: "20rem",
                        height: "20rem",
                        objectFit: "cover",
                        borderRadius: "15px",
                      }}
                    />
                    <div>
                      {/* <button onClick={() => onImageRemove(index)}>
                        Remove
                      </button> */}
                    </div>
                  </Box>
                ))}
                <Button
                  onClick={onImageUpload}
                  style={{
                    margin: "0 auto",
                    border: "2px dashed #B2B1B1",
                    borderRadius: "20px",
                    backgroundColor: "#F3F3F3",
                    width: "20rem",
                    height: "20rem",
                  }}
                >
                  사진 <br /> 추가
                </Button>
              </ScrollContainer>
            )}
          </ImageUploading>
        </Box>
        <SaveBtn text="우연 등록하기" onClick={handleNext} />
      </Box>
    </ThemeProvider>
  );
};

export default ContentAddPost;
