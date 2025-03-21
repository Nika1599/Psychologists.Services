import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPsychologists } from "../../services/api";
import { toggleFavorites } from "../../redux/psychologistSlice";
import PsychologistCard from "../../components/PsychologistCard/PsychologistCard";
import css from "./Psychologists.module.css";

export default function Psychologists() {
  const dispatch = useDispatch();
  const { psychologists, status, error, favorites } = useSelector(
    (state) => state.psychologists
  );

  const [visiblePsychologists, setVisiblePsychologist] = useState(3);

  useEffect(() => {
    dispatch(fetchPsychologists());
  }, [dispatch]);

  const handleLoadMore = () => {
    setVisiblePsychologist((prev) => prev + 3);
  };
  const handleFavoriteClick = (psychologist) => {
    dispatch(toggleFavorites(psychologist));
  };
  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className={css.container}>
      <h1>Psychologists</h1>
      <div className={css.grid}>
        {psychologists.slice(0, visiblePsychologists).map((psychologist) => (
          <PsychologistCard
            key={psychologist.id}
            psychologist={psychologist}
            onFavoriteClick={handleFavoriteClick}
            isFavorite={favorites.some((fav) => fav.id === psychologist.id)}
          />
        ))}
      </div>
      {visiblePsychologists < psychologists.length && (
        <button className={css.loadMore} onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
}
