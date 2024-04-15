import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.boxNotFound}>
      <p className={css.text}>Uh-oh. Page not found!</p>
      <Link className={css.linkHome} to="/">
        Home Page
      </Link>
    </div>
  );
};

export default NotFoundPage;
