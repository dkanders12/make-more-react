import React, { useState, useEffect } from "react"; // Corrected import
import { fetchMusicData } from "./Fetch.Data";

const FetchSupa = () => {
  const [MusicData, setMusicData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMusicData();
      setMusicData(data);
    };

    fetchData();
  }, []);

  console.log(MusicData);

  return (
    <div>
      {MusicData.length > 0 ? (
        <ul>
          {MusicData.map((item, index) => (
            <li key={index}>{item.name}</li> // Adjust according to your data structure
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FetchSupa;
