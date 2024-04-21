import css from "./ImageCard.module.css";

export default function ImageCard({ data, modalOpen }) {
  return (
    <div
      onClick={() => {
        modalOpen(data.urls.full);
      }}
    >
      <img
        className={css.img}
        src={data.urls.small}
        alt={data.alt_description}
        width={300}
        height={300}
      />
    </div>
  );
}
