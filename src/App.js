import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ImageViewer from "./components/imageViewer";
import VideoViewer from "./components/videoViewer";

function App() {
  const [data, setData] = useState(null);
  const myAPIKey = "U8GDchKTIuhX6tBZInjga1HZUqMze4w6WotYI6sc";
  // Make a request for a user with a given ID

  const [date, setDate] = useState("1999-01-01");

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
      <div className="container">
        {data ? (
          <>
            <div className="column">
              <div className="nasa">
                <h1> Astronomy Picture of the Day - NASA </h1>
              </div>
              <div className="input">
                {" "}
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />{" "}
              </div>

              <div>
                {" "}
                {data ? <img src={data.url} alt={data.title} /> : null}
              </div>
            </div>
            <div className="column space-between">
              <div className="detail">
                <div className="title">
                  <h1>{data.title}</h1>
                </div>
                <p>{data.explanation}</p>
                <p>{data.copyright}</p>
              </div>
            </div>
          </>
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
}

export default App;
