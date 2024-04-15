import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <p>Uh-oh. Page not found!</p>
      <Link to="/">Home Page</Link>
    </div>
  );
};

export default NotFoundPage;
