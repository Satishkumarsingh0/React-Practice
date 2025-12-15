import React, { useContext } from "react";
import { UserContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const Home = () => {
  const catfactUrl = "https://catfact.ninja/fact";

  const fetchData = async (URL) => {
    const res = await Axios.get(URL);
    return res.data;
  };
  const {
    data,
    error,
    isLoading,
    refetch: getCatData,
  } = useQuery({
    queryKey: ["cat"],
    queryFn: () => {
      return fetchData(catfactUrl);
    },
  });

  const { userName } = useContext(UserContext);
  return (
    <div>
      Home Page
      <div>User : {userName}</div>
      <div>Cat Fact : {data?.fact}</div>
      {isLoading && <p>Data Loading</p>}
      {error && error?.message}
      <div>
        <button onClick={getCatData}>Get New Cat Fact</button>
      </div>
    </div>
  );
};

export default Home;
