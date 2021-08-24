import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"
import { Route, Link } from "react-router-dom";
import Form from './components/Form';
import { baseURL, config } from './services';
import Chore from './components/Chore';
import Navbar from './components/Navbar';
import About from './components/About'
import './components/Navbar.css'
import './components/Chore.css';
import './components/Form.css'
import Footer from './components/Footer';
import './components/Footer.css'
import './components/About.css'
import Detail from './components/Detail';

export default function App() {
  const [chores, setChores] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)

  useEffect(() => {
    const fetchChores = async () => {
      const resp = await axios.get(baseURL, config)
      console.log(resp.data)
      setChores(resp.data.records)
    }
    fetchChores()
  }, [toggleFetch])

  return (
    <>
      <Navbar />
      <h1 className="title">ChoreBox</h1>
      <Route path="/" exact>
        {chores.map((chore, index) => {
          return (
              //create chore prop to have access inside Chore.jsx
            <Chore key={index} chore={chore} setToggleFetch={setToggleFetch} />
            )
          })
        }
      </Route>
      <Route path="/new">
        <Form setToggleFetch={setToggleFetch} />
      </Route>
      {/* need access to State for chores.  Use chores prop from above to Form component. */}
      <Route path="/edit/:id">
        <Form chores={chores} setToggleFetch={setToggleFetch}/>
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/detail/:id">
        <Detail chores={chores} />
      </Route>
      <Footer />
    </>
  );
}