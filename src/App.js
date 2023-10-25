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
    </div>
  );
}

export default App;
