import React, { useState, useEffect } from "react"; // Corrected import
import { fetchMusicData } from "../FetchSupa/Fetch.Data";

const FetchSupa = () => {
  const [MusicData, setMusicData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMusicData();
      setMusicData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {MusicData.length > 0 ? (
        <ul>
          {MusicData.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FetchSupa;
