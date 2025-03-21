import css from "./PsychologistCard.module.css";

const PsychologistCard = ({ psychologist, onFavoriteClick, isFavorite }) => {
  return (
    <div className={css.card}>
      <p>Psychologist</p>
      <img src={psychologist.avatar_url} />
      <h3>{psychologist.name}</h3>
      <p>{psychologist.rating}</p>
      <p>Rating:{psychologist.rating}</p>
      <p>Price / 1 hour:{psychologist.price_per_hour} </p>
      <button
        className={isFavorite ? css.favoriteActive : css.favorite}
        onClick={() => onFavoriteClick(psychologist)}
      >
        ❤️
      </button>
      <p>Experience: :{psychologist.experience}</p>
      <p>License:{psychologist.license}</p>
      <p>Specialiation:{psychologist.specialization}</p>
      <p>Initial_consultation::{psychologist.initial_consultation}</p>
      <p>{psychologist.about}</p>
      <button type="button">Read more</button>
    </div>
  );
};
export default PsychologistCard;
