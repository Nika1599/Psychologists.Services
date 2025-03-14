import css from "./Home.module.css";
import { NavLink } from "react-router-dom";
import AuthModal from "../../components/AuthModal/AuthModal.jsx";
import { useState } from "react";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(true);
  return (
    <div>
      <nav className={css.nav}>
        <p className={css.logo}>psychologists.services</p>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/psychologists">Psychologists</NavLink>
        <button
          onClick={() => {
            setIsRegister(false);
            setModalOpen(true);
          }}
        >
          Log In
        </button>
        <button
          onClick={() => {
            setIsRegister(true);
            setModalOpen(true);
          }}
        >
          Registration
        </button>
        <AuthModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          isRegister={isRegister}
        />
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
