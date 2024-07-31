import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Homepage() {
  return (
    <div>
      <Navbar link={<Link to="second">second page</Link>} />
    </div>
  );
}

export default Homepage;
