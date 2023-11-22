import { Link } from "react-router-dom";
import { Logo, Text } from "./Landing.Styles";

function Landing() {
  const imagUrl =
    "https://1000marcas.net/wp-content/uploads/2020/01/logo-F1.png";
  return (
    <div>
      <Logo src={imagUrl} alt="logo" />
      <Text>Welcome to F1 Drivers</Text>
      <Link to="/home">
        <button>Get in</button>
      </Link>
    </div>
  );
}
export default Landing;
