import axios from "axios";
import React, { useEffect, useState } from "react";
import { moon } from "../api/moonapi";

const B = () => {
  const [moonData, setMoonData] = useState([]);
  const colorArr = ["blue", "red", "yellow"];

  const getMoon = async () => {
    const data = await moon(setMoonData);
  };

  useEffect(() => {
    getMoon();
  }, []);

  return (
    <div>
      B
      <div>
        {moonData.map((i, index) => (
          <div key={index} style={{ background: colorArr[index] }}>
            {i}
          </div>
        ))}
      </div>
    </div>
  );
};

export default B;
