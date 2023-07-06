import React from "react";
import ProCard from "./SubComponents/ProCard";
import taskList from "../Images/ProjectImages/todo.png";
import firechat from "../Images/ProjectImages/firechat.png";
import dadJoke from "../Images/ProjectImages/dad-joke.png";
import diceGame from "../Images/ProjectImages/diceGame1.png";
import flipCoin from "../Images/ProjectImages/coin1.png";
import photoX from "../Images/ProjectImages/photox1.png";

const Project = () => {
  return (
    <div id="projects" className="max-width">
      <ProCard
        imgLink={photoX}
        techColor="#ff4543"
        proName="PhotoX"
        tech="Html Css Js"
        proLink="#"
      />
      <ProCard
        imgLink={firechat}
        techColor="#0097e6"
        proName="Chat App"
        tech="React Js"
        proLink="#"
      />
      <ProCard
        imgLink={taskList}
        techColor="#ff9f43"
        proName="Task List"
        tech="React Js"
        proLink="#"
      />
      <ProCard
        imgLink={dadJoke}
        techColor="#ff9ff3"
        proName="Dad Jokes"
        tech="React Js"
        proLink="#"
      />
      <ProCard
        imgLink={diceGame}
        techColor="#ff4757"
        proName="Dice Game"
        tech="React Js"
        proLink="#"
      />
      <ProCard
        imgLink={flipCoin}
        techColor="#eccc68"
        proName="Flip Coin"
        tech="React Js"
        proLink="#"
      />
    </div>
  );
};

export default Project;
