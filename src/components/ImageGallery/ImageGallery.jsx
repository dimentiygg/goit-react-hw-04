import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ data, modalOpen }) {
  return (
    <ul className={css.galleryList}>
      {data.map((el) => (
        <li className="list-item" key={el.id}>
          <ImageCard data={el} modalOpen={modalOpen} />
        </li>
      ))}
    </ul>
  );
}
