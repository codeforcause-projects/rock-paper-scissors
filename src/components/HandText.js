import { Box, Typography } from "@mui/material";

function HandText({ playerText, computerText }) {
  return (
    <Box
      sx={{
        margin: 5,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <HandTextItem name="You" handText={playerText} />
      <HandTextItem name="Computer" handText={computerText} />
    </Box>
  );
}

function HandTextItem({ name, handText }) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        margin: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography>{name} Chose</Typography>
      <Typography variant="h4">{handText}</Typography>
    </Box>
  );
}

export default HandText;
