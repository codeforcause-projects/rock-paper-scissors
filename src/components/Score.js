import { Box, Typography } from "@mui/material";

function Score({playerScore, computerScore}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h3">Score</Typography>
      <Typography variant="h2">{`${playerScore} / ${computerScore}`}</Typography>
    </Box>
  );
}

export default Score;
