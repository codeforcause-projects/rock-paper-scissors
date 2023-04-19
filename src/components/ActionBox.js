import { Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { hand } from "../model/hands";

function ActionButton({ hand }) {
  const dispatch = useDispatch();
  return (
    <Button
      sx={{ width: "100px", height: "100px" }}
      variant="contained"
      onClick={() => {
        dispatch({ type: "game/setPlayerHand", payload: hand });
      }}
    >
      <Typography variant="body1">{hand.value}</Typography>
    </Button>
  );
}

function ActionBox() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 10,
        justifyContent: "space-around",
      }}
    >
      <ActionButton hand={hand.ROCK} />
      <ActionButton hand={hand.PAPER} />
      <ActionButton hand={hand.SCISSORS} />
    </Box>
  );
}

export default ActionBox;
