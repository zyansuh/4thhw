import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/detail/1">Go to Detail with ID 1</Link>
    </div>
  );
}

export default Home;
