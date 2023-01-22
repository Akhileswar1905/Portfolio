import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound">
      <h2>Page Not Found</h2>
      <p>
        Go To Home Page{" "}
        <Link to="/" style={{ textDecoration: "none", color: "olivedrab" }}>
          Home
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
