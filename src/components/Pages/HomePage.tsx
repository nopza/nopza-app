import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/register">Go to RegisterPage</Link>
    </div>
  );
};

export default HomePage;
