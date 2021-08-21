import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"
import { Route, Link } from "react-router-dom";
import Form from './components/Form';
import { baseURL, config } from './services';


export default function App() {
const [chores, setChores] = useState([])


  useEffect(() => {
    const fetchChores = async () => {
      const resp = await axios(baseURL, config)
      console.log(resp.data.records)
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
          //each snack is displayed from fields object
            const {name, description} = chore.fields
            return (
              <article key={index}>
                <h3>{name}</h3>
                <p>{description}</p>
              </article>
            )
          })
        }
      </Route>
      <Route path="/new">
        <Form />
      </Route>
      <Route path="/edit/:id">
        <h1>Pre-populated chore to edit.</h1>
      </Route>
    </>
  );
}