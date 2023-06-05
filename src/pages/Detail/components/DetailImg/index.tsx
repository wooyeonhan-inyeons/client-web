import React, { Suspense } from "react";
import { HeadBlinder } from "./components/headBlinder";
import { Box, Skeleton } from "@mui/material";
import { GetPostInterface } from "../../interface";

const LazyImageCarousel = React.lazy(
  () => import("./components/ImageCarousel")
);

export default function DetailImg({
  wooyeon,
}: {
  wooyeon: GetPostInterface | undefined;
}) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        aspectRatio: "1/1",
        marginBottom: "2rem",
      }}
    >
      <HeadBlinder />
      <Suspense
        fallback={
          <Skeleton
            variant="rectangular"
            sx={{
              display: "block",
              width: "100%",
              height: "100%",
            }}
          />
        }
      >
        <LazyImageCarousel images={wooyeon?.image} />
      </Suspense>
    </Box>
  );
}
