import { Link } from "react-router-dom";
function Landing() {
  return (
    <div>
      <h1>Welcome to DriversF1!</h1>
      <Link to="/home">
        <button>Get in!</button>
      </Link>
    </div>
  );
}
export default Landing;
