import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Route } from "react-router-dom";
import Form from "./components/Form";
import { baseURL, config } from "./services";
import Chore from "./components/Chore";
import Navbar from "./components/Navbar";
import About from "./components/About";
import "./components/Navbar.css";
import "./components/Form.css";
import Footer from "./components/Footer";
import "./components/Footer.css";
import "./components/About.css";
import Detail from "./components/Detail";
import "./components/Detail.css";

export default function App() {
  const [chores, setChores] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const [preview, setPreview] = useState({});
  const [toggleComponent, setToggleComponent] = useState(false);

  useEffect(() => {
    const fetchChores = async () => {
      const resp = await axios.get(baseURL, config);
      setChores(resp.data.records);
    };
    fetchChores();
  }, [toggleFetch, preview]);

  const handleClick = (e) => {
    console.log(e.target.id);
    const chorePreview = chores.find((chore) => {
      return chore.id === e.target.id;
    });
    setPreview(chorePreview);
    setToggleComponent((prev) => !prev);
  };

  return (
    <>
      <Navbar />

      <h1 className="title">ChoreBox</h1>
      <Route path="/" exact>
        <div className="home-container">
          <div className="chore-name">
            {chores.map((chore, index) => {
              return (
                <Chore
                  key={index}
                  chore={chore}
                  setToggleFetch={setToggleFetch}
                  handleClick={handleClick}
                />
              );
            })}
          </div>
          <div className="chore-preview">
            {preview.id && (
              <Detail
                preview={preview}
                setPreview={setPreview}
                setToggleFetch={setToggleFetch}
                setToggleComponent={setToggleComponent}
                toggleComponent={toggleComponent}
              />
            )}
          </div>
        </div>
      </Route>
      <Route path="/new">
        <Form setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/edit/:id">
        <Form
          chores={chores}
          setPreview={setPreview}
          setToggleFetch={setToggleFetch}
        />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Footer />
    </>
  );
}
