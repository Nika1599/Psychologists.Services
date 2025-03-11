import css from "./Home.module.css";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <nav className={css.nav}>
        <p className={css.logo}>psychologists.services</p>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/psychologists">Psychologists</NavLink>
        <button type="submit">Log In</button>
        <button type="submit">Registration</button>
      </nav>
      <h1>The road to the depths of the human soul</h1>
      <p>
        We help you to reveal your potential, overcome challenges and find a
        guide in your own life with the help of our experienced psychologists.
      </p>
      <img src="/public/HomePageBanner.jpg" alt="Banner" />
      <button type="button">Get started</button>
    </div>
  );
}
