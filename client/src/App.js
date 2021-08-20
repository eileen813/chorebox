import './App.css';

export default function App() {
  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/new">Add Chore</Link>
    </nav>
      <Route path="/" exact></Route>
    </>
  );
}