import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className="navigation">
      <nav>
        <Link to="/Books">Books</Link>
        <Link to="/Categories">Categories</Link>
      </nav>
    </div>
  );
}
