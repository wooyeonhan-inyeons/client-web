// 안쓰는 파일

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";
import React from "react";
import SaveBtn from "../../component/SaveBtn";
import MapAddPost from "./components/MapAddPost";
import CategoryAddPost from "./components/CategoryAddPost";
import PhotoAddPost from "./components/PhotoAddPost";
import ContentAddPost from "./components/ContentAddPost";

const addPostPage = [
  {
    id: 1,
    title: "map",
    content: <MapAddPost />,
  },
  {
    id: 2,
    title: "category",
    content: <CategoryAddPost />,
  },
  {
    id: 3,
    title: "photo",
    content: <PhotoAddPost />,
  },
  {
    id: 4,
    title: "content",
    content: <ContentAddPost />,
  },
];

const AddPost = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  // const maxSteps = addPostPage.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography>{addPostPage[activeStep].title}</Typography>
      </Paper>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {addPostPage.map((step, index) => (
          <div key={step.title}>
            {Math.abs(activeStep - index) <= 2 ? (
              <div>{step.content}</div>
            ) : null}
          </div>
        ))}
      </SwipeableViews>

      <SaveBtn text="다음" onClick={handleNext} />
    </Box>
  );
};

export default AddPost;
