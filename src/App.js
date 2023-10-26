import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ImageViewer from "./components/imageViewer";
import VideoViewer from "./components/videoViewer";

function App() {
  const [data, setData] = useState(null);
  const myAPIKey = "gncikmQ4I59JnJdONN4osKC2rzK9zVJFghn8RAh3";
  // Make a request for a user with a given ID

  const [date, setDate] = useState("2012-10-02");

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${myAPIKey}&date=${date}&thumbs=true `
      )
      .then(function (response) {
        // handle success
        console.log(response);
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [date]);

  return (
    <div className="App">
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      {data ? (
        <>
          {data.media_type === "video" ? (
            <VideoViewer data={data} />
          ) : (
            <ImageViewer data={data} />
          )}
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default App;
