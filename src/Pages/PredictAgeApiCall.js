import React, { useEffect, useState } from "react";
import Axios from "axios";
const PredictAgeApiCall = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const fetchData = () => {
    if (name) {
      Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
        setAge(res.data.age);
      });
    }
  };

  useEffect(() => {
    if (name.length === 0) {
      setAge("");
    }
  }, [name]);

  return (
    <div>
      <div>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter name..."
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={fetchData}>Predict Age</button>
      </div>
      <div>{age && <p>Predicted Age : {age}</p>}</div>
    </div>
  );
};

export default PredictAgeApiCall;
