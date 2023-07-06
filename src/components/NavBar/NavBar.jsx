import { Link } from 'react-router-dom';

export default function NavBar({}) {

  

  return (
    <nav>
      <Link to="/">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/Mens">Mens</Link>
    </nav>
  );
}