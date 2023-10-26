<<<<<<< HEAD
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
=======
import React from "react";
import Nasa from "./components/Nasa";
import Header from "./components/Header";
import Api from "./Api/NasaApi";
import Footer from "./components/Footer";
import "./App.css";
import Section from "./components/Section";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    Api()
      .then((res) => setData(res))
      .catch((error) => data(error));
  }, []);

  return (
    <div>
      <Header data={data} />
      <Section data={data} />
      <Nasa data={data} />
      <Footer data={data} />
>>>>>>> 4e34d5afab36618e06b435a4b9ca36f10c6105c9
    </div>
  );
}

export default App;
