import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Secondpage() {
  return (
    <div>
      <Navbar link={<Link to="/">first page</Link>} />
    </div>
  );
}

export default Secondpage;
