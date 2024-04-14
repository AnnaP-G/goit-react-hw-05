import { Atom } from "react-loading-indicators";
import css from "./Loader.module.css";

const Loader = () => {
  return <Atom className={css.loaderAtom} />;
};

export default Loader;
