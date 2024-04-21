import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ImageGallery from "../ImageGallery/ImageGallery";
import fetchImages from "../images-api";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  function openModal(fullImg) {
    setIsOpen(true);
    setModalImage(fullImg);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getImages() {
      try {
        setError(false);
        setLoad(true);
        const data = await fetchImages(query, page);
        setImages((prevImages) => {
          return [...prevImages, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoad(false);
      }
    }

    getImages();
  }, [query, page]);

  const handleMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && (
        <ImageGallery data={images} modalOpen={openModal} />
      )}
      {load && <Loader />}
      {images.length > 0 && !load && <LoadMoreBtn loadMore={handleMore} />}
      {error && <ErrorMessage />}
      <ImageModal
        isOpen={modalIsOpen}
        isClose={closeModal}
        modalImage={modalImage}
      />
    </>
  );
}

export default App;
