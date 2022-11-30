import React from "react";
import { Box, CirclarProgress } from "@mui/material";

const Loading = (props) => {
  return (
    <Box
      sx={{
        display: flex,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: props.fullHeight ? "100vh" : "100%",
      }}
    >
      <CirclarProgress />
    </Box>
  );
};

export default Loading;
