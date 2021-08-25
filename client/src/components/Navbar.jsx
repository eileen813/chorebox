import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <navbar className="navbar">
      <Link to="/">Home</Link>
      <Link to="/new">Add A Chore</Link>
      <Link to="/about">About</Link>
    </navbar>
  );
}
