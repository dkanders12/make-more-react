import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";
export const FetchComponent = () => {
  // Kalder state variabel med useState()
  const [goals, setGoals] = useState([]);

  // Kalder useEffect
  useEffect(() => {
    // Sætter asynkron funktion til fetch
    const getData = async () => {
      const url = "https://api.mediehuset.net/sdg/goals";
      try {
        // Fetch kalde med axios
        const result = await axios.get(url);
        // Sætter state var til api response
        setGoals(result.data.items);
      } catch (err) {
        console.error(err);
      }
    };
    // Kalder function
    getData();
  }, [setGoals]); //<<; Sender state setter med som dependency

  return (
    <>
      {goals &&
        goals.map((goal) => {
          return <p key={goal.id}>{goal.title}</p>;
        })}
    </>
  );
};
