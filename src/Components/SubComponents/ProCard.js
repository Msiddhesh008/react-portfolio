import React from "react";
import { Link } from "react-router-dom";

const ProCard = ({ imgLink, techColor, tech, proName, proLink }) => {
  return (
    <div className="pro-cnt pt-4 pb-4 ps-3 pe-3 mb-3">
      <img src={imgLink} width={220} className="img-fluid" alt="pro-img" />

      <div className="pro-disc p-2 ps-4">
        <span
          style={{
            color: techColor,
          }}
        >
          {tech}
        </span>
        <h3>{proName}</h3>
        <Link className="pro-btn" to={proLink}>
          Live demo
        </Link>
      </div>
    </div>
  );
};

export default ProCard;
