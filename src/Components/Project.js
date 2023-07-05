import React from "react";
import ProCard from "./SubComponents/ProCard";

const Project = () => {
  return (
    <div id="projects" className="max-width">
      <ProCard
        imgLink="https://msiddhesh008.github.io/react-portfolio-web-app/static/media/todo.0e519713dbcff7ed2a27.png"
        techColor="#ff9f43"
        proName="Task List"
        tech="React Js"
        proLink="#"
      />
      <ProCard
        imgLink="https://msiddhesh008.github.io/react-portfolio-web-app/static/media/firechat.0204f7f286299e08cdba.png"
        techColor="#0097e6"
        proName="Chat App"
        tech="React Js"
        proLink="#"
      />
      <ProCard
        imgLink="https://msiddhesh008.github.io/react-portfolio-web-app/static/media/dad-joke.2d043d2d168087ec0491.png"
        techColor="#ff9ff3"
        proName="Dad Jokes"
        tech="React Js"
        proLink="#"
      />
      <ProCard
        imgLink="https://msiddhesh008.github.io/portfolioweb/ProjectImages/diceGame1.png"
        techColor="#ff4757"
        proName="Dice Game"
        tech="React Js"
        proLink="#"
      />
      <ProCard
        imgLink="https://msiddhesh008.github.io/portfolioweb/ProjectImages/coin1.png"
        techColor="#eccc68"
        proName="Flip Coin"
        tech="React Js"
        proLink="#"
      />
    </div>
  );
};

export default Project;
