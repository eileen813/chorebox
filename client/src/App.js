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
          //each snack is displayed from fields object
            const {name, description} = chore.fields
            return (
              <article key={index}>
                <h3>{name}</h3>
                <p>{description}</p>
                {/* the link below routes to new page to edit specific chore. */}
                <Link to={`/edit/${chore.id}`}>Edit Chore!</Link>
              </article>
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