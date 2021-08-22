import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"
import { Route, Link } from "react-router-dom";
import Form from './components/Form';
import { baseURL, config } from './services';
import Chore from './components/Chore';

export default function App() {
const [chores, setChores] = useState([])

  useEffect(() => {
    const fetchChores = async () => {
      const resp = await axios(baseURL, config)
      console.log(resp.data)
      setChores(resp.data.records)
    }
    fetchChores()
  }, [])

  return (
    <>
      <nav>
      <Link to="/">Home</Link>
      <Link to="/new">Add A Chore</Link>
    </nav>
      <Route path="/" exact>
        {chores.map((chore, index) => {
          return (
              //create chore prop to have access inside Chore.jsx
              <Chore key={index} chore={chore} />
            )
          })
        }
      </Route>
      <Route path="/new">
        <Form />
      </Route>
      {/* need access to State for chores.  Use chores prop from above to Form component. */}
      <Route path="/edit/:id">
        <Form chores={chores}/>
      </Route>
    </>
  );
}