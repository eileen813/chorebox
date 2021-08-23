import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"
import { Route, Link } from "react-router-dom";
import Form from './components/Form';
import { baseURL, config } from './services';
import Chore from './components/Chore';
import Navbar from './components/Navbar';

export default function App() {
  const [chores, setChores] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)

  useEffect(() => {
    const fetchChores = async () => {
      const resp = await axios(baseURL, config)
      console.log(resp.data)
      setChores(resp.data.records)
    }
    fetchChores()
  }, [toggleFetch])

  return (
    <>
      <Navbar />
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
    </>
  );
}