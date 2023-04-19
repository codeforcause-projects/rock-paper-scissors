import { Box } from "@mui/material";
import "./App.css";
import { useSelector } from "react-redux";
import HandGesture from "./components/HandGesture";
import ActionBox from "./components/ActionBox";
import HandText from "./components/HandText";
import Score from "./components/Score";

function App() {
  const { computerHand, playerHand, computerScore, playerScore } = useSelector(
    (state) => state.game
  );

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100vw",
      height: "100vh",
      backgroundColor: "grey.100",
    }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "100vw", md: "50vw" },
          height: "100vh",
        }}
      >
        <HandGesture
          playerGesture={playerHand.symbol}
          computerGesture={computerHand.symbol}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flexGrow: 1,
          }}
        >
          <Score playerScore={playerScore} computerScore={computerScore} />
          <HandText
            playerText={playerHand.value}
            computerText={computerHand.value}
          />
        </Box>

        <ActionBox />
      </Box>
    </Box>
  );
}

export default App;
