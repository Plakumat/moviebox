import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { API } from '../../service';
import { IMovieTypes, BaseImageURL } from '../../model/common';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MovieDetail = () => {
  const { pathname } = useLocation();
  const [movieDetail, setMovieDetail] = useState<IMovieTypes>();

  const getDetail = async () => {
    try {
      const detail = await API.getMovieDetail(pathname);
      if (detail) setMovieDetail(detail);
      return detail;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  if (movieDetail) {
    const {
      original_title,
      poster_path,
      backdrop_path,
      overview,
      genres,
      spoken_languages,
    } = movieDetail;

    return (
      <div className='moviebox__detail'>
        <div className='moviebox__detail__poster'>
          <LazyLoadImage effect='blur' src={BaseImageURL + poster_path} />
        </div>
        <div className='moviebox__detail__movie__info__wrapper'>
          <div
            className='moviebox__detail__movie__info'
            style={{
              backgroundImage: `linear-gradient(black, black),url(${
                BaseImageURL + backdrop_path
              })`,
            }}
          ></div>
          <div className='moviebox__detail__movie__info__overlay'>
            <h1 className='moviebox__detail__movie__title'>{original_title}</h1>
            <p className='moviebox__detail__movie__description'>{overview}</p>
            <p className='moviebox__detail__movie__genres'>
              {genres.map((genre, index) => (
                <span key={index}>{genre.name}</span>
              ))}
            </p>
            <p className='moviebox__detail__movie__languages'>
              {spoken_languages.map((language, index) => (
                <span key={index}>{language.name}</span>
              ))}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <></>;
};

export default MovieDetail;
