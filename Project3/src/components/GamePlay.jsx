import { useState } from "react";
import TotalScore from "./TotalScore";
import NumbaerSelector from "./NumbaerSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { Button, OutLineButton } from "../styled/Button";
import GameRules from "./GameRules";


const GamePlay = () => {
  const [showRules,setShowRules] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");

  const generateRandumNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randumNumber = generateRandumNumber(1, 7);
    setCurrentDice((prev) => randumNumber);

    if (selectedNumber === randumNumber) {
      setScore((prev) => prev + randumNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };
  const resetScore = () => {
    setScore(0);
  };
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumbaerSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btn">
        <OutLineButton onClick={resetScore}>Reset Score</OutLineButton>
        <Button onClick={()=>setShowRules((prev)=>!prev)}> { showRules ?"Hide":"Show"}Rules</Button>
      </div>
 {showRules &&  <GameRules/>}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btn {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;
