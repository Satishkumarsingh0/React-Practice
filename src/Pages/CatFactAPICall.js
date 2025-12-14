import React, { useState } from "react";
import Axios from "axios";

const CatFactAPICall = () => {
  const [catFact, setCatFact] = useState("");
  /*
  fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
 */
  const generateCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };
  /*   useEffect(() => {
  Axios.get("https://catfact.ninja/fact").then((res) => {
    setCatFact(res.data.fact);
  });
   }, []);
   */
  return (
    <div>
      <button onClick={generateCatFact}> Gernerate Cat Fact </button>
      <div>{catFact}</div>
    </div>
  );
};

export default CatFactAPICall;
