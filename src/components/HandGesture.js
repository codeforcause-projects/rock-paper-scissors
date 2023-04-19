import { Box, Typography } from "@mui/material";

function HandGesture({ playerGesture, computerGesture}) {
  return (
    <Box
      sx={{
        marginTop: { xs: 5, sm: 10 },
        marginBottom: { xs: 5, sm: 10 },
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Typography variant="h1">{playerGesture}</Typography>
      <Typography variant="h1">{computerGesture}</Typography>
    </Box>
  );
}

export default HandGesture;
