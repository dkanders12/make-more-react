// components/Supabase/Posters.jsx
import React, { useEffect, useState } from "react";
import { fetchPostersData } from "./SupabaseController";

export const Posters = () => {
  const [postersData, setPostersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPostersData();
      setPostersData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Posters</h1>
      <ul>
        {postersData.map((poster, index) => (
          <li key={index}>
            <p>{poster.name}</p>
            <p>{poster.slug}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
